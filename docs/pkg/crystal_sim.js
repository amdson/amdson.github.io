/* @ts-self-types="./crystal_sim.d.ts" */

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
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CrystalSimFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_crystalsim_free(ptr, 0);
    }
    /**
     * Create a new simulation from a JSON config string.
     * @param {string} config_json
     */
    constructor(config_json) {
        const ptr0 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.crystalsim_new(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        CrystalSimFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Byte offset into WASM linear memory of the particle buffer.
     * Buffer layout: [x, y, type_id, radius, orientation]  per particle (f32, stride 5)
     *
     * JS: `new Float32Array(wasm.memory.buffer, sim.particle_buffer(), sim.particle_count() * 5)`
     * @returns {number}
     */
    particle_buffer() {
        const ret = wasm.crystalsim_particle_buffer(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Number of particles currently in the simulation.
     * @returns {number}
     */
    particle_count() {
        const ret = wasm.crystalsim_particle_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Update chemical potential for a particle type at runtime and recalculate all rates.
     * @param {number} type_id
     * @param {number} mu
     */
    set_chemical_potential(type_id, mu) {
        wasm.crystalsim_set_chemical_potential(this.__wbg_ptr, type_id, mu);
    }
    /**
     * Update temperature at runtime and recalculate all particle rates.
     * @param {number} t
     */
    set_temperature(t) {
        wasm.crystalsim_set_temperature(this.__wbg_ptr, t);
    }
    /**
     * Simulated time in KMC time units.
     * @returns {number}
     */
    simulation_time() {
        const ret = wasm.crystalsim_simulation_time(this.__wbg_ptr);
        return ret;
    }
    /**
     * Advance the simulation by `n` KMC events.
     * @param {number} n
     */
    step(n) {
        wasm.crystalsim_step(this.__wbg_ptr, n);
    }
    /**
     * JSON array of per-type metadata: [{"color":"#hex","radius":r}, ...]
     * @returns {string}
     */
    type_metadata_json() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.crystalsim_type_metadata_json(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
}
if (Symbol.dispose) CrystalSim.prototype[Symbol.dispose] = CrystalSim.prototype.free;

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
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        EditorSimFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_editorsim_free(ptr, 0);
    }
    /**
     * Add one particle instance. Returns its index.
     * @param {number} x
     * @param {number} y
     * @param {number} type_id
     * @param {number} orientation_deg
     * @param {boolean} frozen
     * @returns {number}
     */
    add_particle(x, y, type_id, orientation_deg, frozen) {
        const ret = wasm.editorsim_add_particle(this.__wbg_ptr, x, y, type_id, orientation_deg, frozen);
        return ret >>> 0;
    }
    /**
     * Construct from a JSON config string. Starts with zero particles.
     * @param {string} config_json
     */
    constructor(config_json) {
        const ptr0 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.editorsim_new(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        EditorSimFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Byte offset into WASM linear memory of the stride-5 particle buffer.
     * Valid until any method that may reallocate the buffer is called.
     *
     * JS: `new Float32Array(memory.buffer, sim.particle_buffer(), sim.particle_count() * 5)`
     * @returns {number}
     */
    particle_buffer() {
        const ret = wasm.editorsim_particle_buffer(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Number of particles currently in the sim.
     * @returns {number}
     */
    particle_count() {
        const ret = wasm.editorsim_particle_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Run up to `n` FIRE-style relaxation steps.
     *
     * This is a global O(N²) version of the local FIRE loop in kmc.rs
     * (`relax_new_particle_fixed_grid`). The velocity integration math
     * is identical; the only difference is that all particles participate
     * rather than just those in a 5×5 cell neighbourhood.
     * @param {number} n
     */
    relax(n) {
        wasm.editorsim_relax(this.__wbg_ptr, n);
    }
    /**
     * Swap-remove particle at index `i`. Index stability not guaranteed.
     * @param {number} i
     */
    remove_particle(i) {
        wasm.editorsim_remove_particle(this.__wbg_ptr, i);
    }
    /**
     * Zero all particle velocities (call after a manual drag-move so relaxation
     * resumes from rest rather than from stale momentum).
     */
    reset_velocities() {
        wasm.editorsim_reset_velocities(this.__wbg_ptr);
    }
    /**
     * Replace all particles from a JSON array.
     * Schema: `[{"x":f,"y":f,"type_id":u,"orientation_deg":f,"frozen":b}, ...]`
     * All velocities are zeroed.
     * @param {string} placements_json
     */
    set_particles(placements_json) {
        const ptr0 = passStringToWasm0(placements_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.editorsim_set_particles(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * JSON array of per-type metadata for the renderer.
     * Format: `[{"color":"#hex","radius":r,"patches":[{"angle_rad":f,"color":"#fff"},...]}]`
     * Matches the format returned by `CrystalSim::type_metadata_json`.
     * @returns {string}
     */
    type_metadata_json() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.editorsim_type_metadata_json(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Replace the config (e.g. after the user edits interaction parameters)
     * without clearing the current particle layout.
     * @param {string} config_json
     */
    update_config(config_json) {
        const ptr0 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.editorsim_update_config(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
}
if (Symbol.dispose) EditorSim.prototype[Symbol.dispose] = EditorSim.prototype.free;

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_throw_6ddd609b62940d55: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./crystal_sim_bg.js": import0,
    };
}

const CrystalSimFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_crystalsim_free(ptr >>> 0, 1));
const EditorSimFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_editorsim_free(ptr >>> 0, 1));

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('crystal_sim_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
