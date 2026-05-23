// Zhifeng's SHA-3 Implementation for Web
// Copyright (C) 2026  Zhifeng
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>. 

export class Sha3_224Hasher {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Sha3_224Hasher.prototype);
        obj.__wbg_ptr = ptr;
        Sha3_224HasherFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Sha3_224HasherFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_sha3_224hasher_free(ptr, 0);
    }
    /**
     * @returns {Sha3_224Hasher}
     */
    clone() {
        const ret = wasm.sha3_224hasher_clone(this.__wbg_ptr);
        return Sha3_224Hasher.__wrap(ret);
    }
    /**
     * @returns {Uint8Array}
     */
    finalize() {
        const ret = wasm.sha3_224hasher_finalize(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    get_digest_u8_arr_len() {
        const ret = wasm.sha3_224hasher_get_digest_u8_arr_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_msg_buf_u8_arr_len() {
        const ret = wasm.sha3_224hasher_get_msg_buf_u8_arr_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Sha3_224Hasher}
     */
    static new() {
        const ret = wasm.sha3_224hasher_new();
        return Sha3_224Hasher.__wrap(ret);
    }
    reset() {
        wasm.sha3_224hasher_reset(this.__wbg_ptr);
    }
    /**
     * @param {Uint8Array} msg_u8_arr_ref
     */
    update(msg_u8_arr_ref) {
        const ptr0 = passArray8ToWasm0(msg_u8_arr_ref, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.sha3_224hasher_update(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) Sha3_224Hasher.prototype[Symbol.dispose] = Sha3_224Hasher.prototype.free;

export class Sha3_256Hasher {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Sha3_256Hasher.prototype);
        obj.__wbg_ptr = ptr;
        Sha3_256HasherFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Sha3_256HasherFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_sha3_256hasher_free(ptr, 0);
    }
    /**
     * @returns {Sha3_256Hasher}
     */
    clone() {
        const ret = wasm.sha3_256hasher_clone(this.__wbg_ptr);
        return Sha3_256Hasher.__wrap(ret);
    }
    /**
     * @returns {Uint8Array}
     */
    finalize() {
        const ret = wasm.sha3_256hasher_finalize(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    get_digest_u8_arr_len() {
        const ret = wasm.sha3_256hasher_get_digest_u8_arr_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_msg_buf_u8_arr_len() {
        const ret = wasm.sha3_256hasher_get_msg_buf_u8_arr_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Sha3_256Hasher}
     */
    static new() {
        const ret = wasm.sha3_256hasher_new();
        return Sha3_256Hasher.__wrap(ret);
    }
    reset() {
        wasm.sha3_256hasher_reset(this.__wbg_ptr);
    }
    /**
     * @param {Uint8Array} msg_u8_arr_ref
     */
    update(msg_u8_arr_ref) {
        const ptr0 = passArray8ToWasm0(msg_u8_arr_ref, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.sha3_256hasher_update(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) Sha3_256Hasher.prototype[Symbol.dispose] = Sha3_256Hasher.prototype.free;

export class Sha3_384Hasher {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Sha3_384Hasher.prototype);
        obj.__wbg_ptr = ptr;
        Sha3_384HasherFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Sha3_384HasherFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_sha3_384hasher_free(ptr, 0);
    }
    /**
     * @returns {Sha3_384Hasher}
     */
    clone() {
        const ret = wasm.sha3_384hasher_clone(this.__wbg_ptr);
        return Sha3_384Hasher.__wrap(ret);
    }
    /**
     * @returns {Uint8Array}
     */
    finalize() {
        const ret = wasm.sha3_384hasher_finalize(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    get_digest_u8_arr_len() {
        const ret = wasm.sha3_384hasher_get_digest_u8_arr_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_msg_buf_u8_arr_len() {
        const ret = wasm.sha3_384hasher_get_msg_buf_u8_arr_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Sha3_384Hasher}
     */
    static new() {
        const ret = wasm.sha3_384hasher_new();
        return Sha3_384Hasher.__wrap(ret);
    }
    reset() {
        wasm.sha3_384hasher_reset(this.__wbg_ptr);
    }
    /**
     * @param {Uint8Array} msg_u8_arr_ref
     */
    update(msg_u8_arr_ref) {
        const ptr0 = passArray8ToWasm0(msg_u8_arr_ref, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.sha3_384hasher_update(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) Sha3_384Hasher.prototype[Symbol.dispose] = Sha3_384Hasher.prototype.free;

export class Sha3_512Hasher {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Sha3_512Hasher.prototype);
        obj.__wbg_ptr = ptr;
        Sha3_512HasherFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        Sha3_512HasherFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_sha3_512hasher_free(ptr, 0);
    }
    /**
     * @returns {Sha3_512Hasher}
     */
    clone() {
        const ret = wasm.sha3_512hasher_clone(this.__wbg_ptr);
        return Sha3_512Hasher.__wrap(ret);
    }
    /**
     * @returns {Uint8Array}
     */
    finalize() {
        const ret = wasm.sha3_512hasher_finalize(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    get_digest_u8_arr_len() {
        const ret = wasm.sha3_512hasher_get_digest_u8_arr_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_msg_buf_u8_arr_len() {
        const ret = wasm.sha3_512hasher_get_msg_buf_u8_arr_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Sha3_512Hasher}
     */
    static new() {
        const ret = wasm.sha3_512hasher_new();
        return Sha3_512Hasher.__wrap(ret);
    }
    reset() {
        wasm.sha3_512hasher_reset(this.__wbg_ptr);
    }
    /**
     * @param {Uint8Array} msg_u8_arr_ref
     */
    update(msg_u8_arr_ref) {
        const ptr0 = passArray8ToWasm0(msg_u8_arr_ref, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.sha3_512hasher_update(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) Sha3_512Hasher.prototype[Symbol.dispose] = Sha3_512Hasher.prototype.free;
export function __wbg___wbindgen_throw_81fc77679af83bc6(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_externrefs;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
}
const Sha3_224HasherFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_sha3_224hasher_free(ptr >>> 0, 1));
const Sha3_256HasherFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_sha3_256hasher_free(ptr >>> 0, 1));
const Sha3_384HasherFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_sha3_384hasher_free(ptr >>> 0, 1));
const Sha3_512HasherFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_sha3_512hasher_free(ptr >>> 0, 1));

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

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

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
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

let WASM_VECTOR_LEN = 0;


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}
