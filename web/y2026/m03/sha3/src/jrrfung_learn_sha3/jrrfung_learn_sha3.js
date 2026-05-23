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

import init from "./jrrfung_learn_sha3_bg.wasm?init";
import { 
    __wbg_set_wasm, 
    __wbindgen_init_externref_table,
    __wbg___wbindgen_throw_81fc77679af83bc6,
    Sha3_224Hasher, 
    Sha3_256Hasher, 
    Sha3_384Hasher, 
    Sha3_512Hasher 
} from "./jrrfung_learn_sha3_bg.js";


const wasm_promise = await init(
    {
        "./jrrfung_learn_sha3_bg.js": {
            __wbindgen_init_externref_table,
            __wbg___wbindgen_throw_81fc77679af83bc6
        }
    }
).then((instantiated_module) => {
    const wasm = instantiated_module.exports;
    __wbg_set_wasm(wasm);
    wasm.__wbindgen_start();
});

export {
    Sha3_224Hasher, 
    Sha3_256Hasher, 
    Sha3_384Hasher, 
    Sha3_512Hasher  
};
