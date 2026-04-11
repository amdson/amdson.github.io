/* tslint:disable */
/* eslint-disable */

/**
 * WASM-exposed crystal growth simulator.
 *
 * JS usage:
 * ```js
 * import init, { CrystalSim } from './pkg/crystal_sim.js';
 * await init();
 * const sim = new CrystalSim(JSON.stringify(config));
 * sim.step(500);
 * const ptr = sim.particle_buffer();
 * const buf = new Float32Array(sim.memory().buffer, ptr, sim.particle_count() * 5);
 * ```
 */
export class CrystalSim {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Create a new simulation from a JSON config string.
     */
    constructor(config_json: string);
    /**
     * Byte offset into WASM linear memory of the particle buffer.
     * Buffer layout: [x, y, type_id, radius, orientation]  per particle (f32, stride 5)
     *
     * JS: `new Float32Array(wasm.memory.buffer, sim.particle_buffer(), sim.particle_count() * 5)`
     */
    particle_buffer(): number;
    /**
     * Number of particles currently in the simulation.
     */
    particle_count(): number;
    /**
     * Update chemical potential for a particle type at runtime and recalculate all rates.
     */
    set_chemical_potential(type_id: number, mu: number): void;
    /**
     * Update temperature at runtime and recalculate all particle rates.
     */
    set_temperature(t: number): void;
    /**
     * Simulated time in KMC time units.
     */
    simulation_time(): number;
    /**
     * Advance the simulation by `n` KMC events.
     */
    step(n: number): void;
    /**
     * JSON array of per-type metadata: [{"color":"#hex","radius":r}, ...]
     */
    type_metadata_json(): string;
}

/**
 * Lightweight physics sandbox exposed to the browser config editor.
 *
 * JS usage:
 * ```js
 * import init, { EditorSim } from './pkg/crystal_sim.js';
 * await init();
 * const sim = new EditorSim(JSON.stringify(config));
 * sim.add_particle(0, 0, 0, 0, false);
 * sim.relax(30);
 * const buf = new Float32Array(memory.buffer, sim.particle_buffer(), sim.particle_count() * 5);
 * ```
 */
export class EditorSim {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Add one particle instance. Returns its index.
     */
    add_particle(x: number, y: number, type_id: number, orientation_deg: number, frozen: boolean): number;
    /**
     * Construct from a JSON config string. Starts with zero particles.
     */
    constructor(config_json: string);
    /**
     * Byte offset into WASM linear memory of the stride-5 particle buffer.
     * Valid until any method that may reallocate the buffer is called.
     *
     * JS: `new Float32Array(memory.buffer, sim.particle_buffer(), sim.particle_count() * 5)`
     */
    particle_buffer(): number;
    /**
     * Number of particles currently in the sim.
     */
    particle_count(): number;
    /**
     * Run up to `n` FIRE-style relaxation steps.
     *
     * This is a global O(N²) version of the local FIRE loop in kmc.rs
     * (`relax_new_particle_fixed_grid`). The velocity integration math
     * is identical; the only difference is that all particles participate
     * rather than just those in a 5×5 cell neighbourhood.
     */
    relax(n: number): void;
    /**
     * Swap-remove particle at index `i`. Index stability not guaranteed.
     */
    remove_particle(i: number): void;
    /**
     * Zero all particle velocities (call after a manual drag-move so relaxation
     * resumes from rest rather than from stale momentum).
     */
    reset_velocities(): void;
    /**
     * Replace all particles from a JSON array.
     * Schema: `[{"x":f,"y":f,"type_id":u,"orientation_deg":f,"frozen":b}, ...]`
     * All velocities are zeroed.
     */
    set_particles(placements_json: string): void;
    /**
     * JSON array of per-type metadata for the renderer.
     * Format: `[{"color":"#hex","radius":r,"patches":[{"angle_rad":f,"color":"#fff"},...]}]`
     * Matches the format returned by `CrystalSim::type_metadata_json`.
     */
    type_metadata_json(): string;
    /**
     * Replace the config (e.g. after the user edits interaction parameters)
     * without clearing the current particle layout.
     */
    update_config(config_json: string): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_editorsim_free: (a: number, b: number) => void;
    readonly editorsim_add_particle: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
    readonly editorsim_new: (a: number, b: number) => [number, number, number];
    readonly editorsim_particle_buffer: (a: number) => number;
    readonly editorsim_particle_count: (a: number) => number;
    readonly editorsim_relax: (a: number, b: number) => void;
    readonly editorsim_remove_particle: (a: number, b: number) => void;
    readonly editorsim_reset_velocities: (a: number) => void;
    readonly editorsim_set_particles: (a: number, b: number, c: number) => [number, number];
    readonly editorsim_type_metadata_json: (a: number) => [number, number];
    readonly editorsim_update_config: (a: number, b: number, c: number) => [number, number];
    readonly __wbg_crystalsim_free: (a: number, b: number) => void;
    readonly crystalsim_new: (a: number, b: number) => [number, number, number];
    readonly crystalsim_particle_buffer: (a: number) => number;
    readonly crystalsim_particle_count: (a: number) => number;
    readonly crystalsim_set_chemical_potential: (a: number, b: number, c: number) => void;
    readonly crystalsim_set_temperature: (a: number, b: number) => void;
    readonly crystalsim_simulation_time: (a: number) => number;
    readonly crystalsim_step: (a: number, b: number) => void;
    readonly crystalsim_type_metadata_json: (a: number) => [number, number];
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
