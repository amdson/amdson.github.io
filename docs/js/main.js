/**
 * main.js — entry point.
 *
 * Loads the WASM module, wires up simulation + renderer + controls,
 * then runs the requestAnimationFrame render/step loop.
 */

import init, { CrystalSim } from '/docs/pkg/crystal_sim.js';
import * as simAPI from './simulation.js';
import { Renderer } from './renderer.js';
import { initControls } from './controls.js';

// ── State ─────────────────────────────────────────────────────────────────
const canvas   = document.getElementById('canvas');
const renderer = new Renderer(canvas);
renderer.paused = false;

let controls = null;
let wasmModule = null;

// ── Startup ───────────────────────────────────────────────────────────────
async function start() {
  // Load WASM and default config in parallel.
  const [defaultConfig, wasm] = await Promise.all([
    fetch('/config/sierpinski_xor.json').then(r => r.json()),
    init(),
  ]);
  wasmModule = wasm;

  // Prefer a config sent from the editor over the default.
  let config = defaultConfig;
  let fromEditor = false;
  const editorJson = localStorage.getItem('crystal_editor_config');
  if (editorJson && localStorage.getItem('crystal_editor_config_pending')) {
    localStorage.removeItem('crystal_editor_config_pending');
    try {
      config = JSON.parse(editorJson);
      fromEditor = true;
    } catch (e) { /* ignore malformed */ }
  }

  boot(config);

  if (fromEditor) {
    showEditorConfig();
  }

  // Wire "Open Editor" button — saves current config so editor can pre-load it.
  document.getElementById('openEditorBtn').addEventListener('click', () => {
    if (controls) {
      const cfg = controls.getCurrentConfig();
      if (cfg) localStorage.setItem('crystal_sim_current_config', JSON.stringify(cfg));
    }
    window.open('editor.html', '_blank');
  });

  // Live-reload when the editor pushes a new config.
  const channel = new BroadcastChannel('crystal_sim');
  channel.addEventListener('message', e => {
    if (e.data?.type === 'load_config') {
      localStorage.setItem('crystal_editor_config', JSON.stringify(e.data.config));
      localStorage.setItem('crystal_editor_config_pending', '1');
      showEditorConfig();
      boot(e.data.config);
    }
  });
}

/** Mark the config select as "From Editor" and show the hidden option. */
function showEditorConfig() {
  const edOpt = document.getElementById('editorConfigOption');
  if (edOpt) edOpt.style.display = '';
  const sel = document.getElementById('configSelect');
  if (sel) sel.value = 'editor';
}

function boot(config) {
  // (Re-)initialise simulation
  simAPI.initSim({ CrystalSim, memory: wasmModule.memory }, config);

  // Wire controls on first boot only
  if (!controls) {
    controls = initControls(simAPI, renderer, config, (newCfg) => boot(newCfg ?? config));
  } else {
    controls.onNewConfig(config);
  }

  // Start (or restart) the render loop
  requestAnimationFrame(frame);
}

// ── FPS counter ───────────────────────────────────────────────────────────
let lastTime = performance.now();
let frameCount = 0;

function frame(now) {
  requestAnimationFrame(frame);

  // FPS
  frameCount++;
  if (now - lastTime >= 1000) {
    document.getElementById('statFps').textContent = frameCount;
    frameCount = 0;
    lastTime = now;
  }

  // Advance simulation
  if (!renderer.paused && controls) {
    simAPI.stepSim(controls.getStepsPerFrame());
  }

  // Render
  const count     = simAPI.getParticleCount();
  const buf       = simAPI.getParticleBuffer();
  const meta      = simAPI.getTypeMetadata();
  const candCount = simAPI.getCandidateCount();
  const candBuf   = simAPI.getCandidateBuffer();
  renderer.draw(buf, count, meta, candBuf, candCount);

  // Update stats
  document.getElementById('statParticles').textContent = count;
  document.getElementById('statTime').textContent =
    simAPI.getTime().toExponential(3);
}

start().catch(console.error);
