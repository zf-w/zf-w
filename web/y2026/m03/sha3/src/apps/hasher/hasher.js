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

import { Sha3_224Hasher, Sha3_384Hasher, Sha3_256Hasher, Sha3_512Hasher } from "../../lib.js";
import { BytesAreaElem } from "../../externals.js";

import { DOM_EVENT_CLICK_NAME, HTML_BTN_TAG, HTML_DIV_TAG } from "../../consts.js";
import { LANG_DEFAULT_TEXT_OBJ, LANG_TEXT_CONFIG_OBJ } from "./hash_config.js";

const MAIN_CLASSNAME = "y2026_m03_sha3_hasher";
const CLASSNAME_DISPLAY_INFO = "display_info";
const CLASSNAME_BTN_ROW = "btn_row";
const CLASSNAME_UPDATE_BTN = "update_btn";
const CLASSNAME_RESET_BTN = "reset_btn";

function make_btn_row(
    upper_elem_id,
    update_btn_text,
    reset_btn_text
) {
    const update_btn_elem = document.createElement(HTML_BTN_TAG);
    update_btn_elem.className = CLASSNAME_UPDATE_BTN;
    update_btn_elem.textContent = update_btn_text;

    const reset_btn_elem = document.createElement(HTML_BTN_TAG);
    reset_btn_elem.className = CLASSNAME_RESET_BTN;
    reset_btn_elem.textContent = reset_btn_text;

    const btn_row_elem = document.createElement(HTML_DIV_TAG);
    btn_row_elem.className = CLASSNAME_BTN_ROW;

    btn_row_elem.append(update_btn_elem, reset_btn_elem);

    return {
        update_btn_elem,
        reset_btn_elem,
        elem: btn_row_elem
    };
}

function init_btn_row(
    {
        update_btn_elem,
        reset_btn_elem,
    },
    update_btn_callback_closure,
    reset_btn_callback_closure
) {
    update_btn_elem.addEventListener(DOM_EVENT_CLICK_NAME, update_btn_callback_closure);
    reset_btn_elem.addEventListener(DOM_EVENT_CLICK_NAME, reset_btn_callback_closure);
}

export function render_y2026_m03_sha3(
    main_elem_id, 
    {
        hasher_digest_bit_count_list = [224, 256, 384, 512],
        lang_key = "en",
        digest_default_alphabet_string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    }
) {

    let lang_text_obj = LANG_TEXT_CONFIG_OBJ[lang_key];

    if (lang_text_obj == undefined) {
        lang_text_obj = LANG_DEFAULT_TEXT_OBJ;
    }

    const {    
        TITLE_TEXT,
        SUBTITLE_TEXT,
        INPUT_HEADING_TEXT,
        OUTPUT_HEADING_TEXT,
        UPDATE_BTN_TEXT,
        RESET_BTN_TEXT,
        INFO_CONTENT_HTML
    } = lang_text_obj;

    const main_elem = document.getElementById(main_elem_id);
    main_elem.className = MAIN_CLASSNAME;

    const input_group_elem_id = `${main_elem_id}_input`;
    const output_group_elem_id = `${main_elem_id}_output`;
    const info_btn_elem_id = `${main_elem_id}_info_btn`;

    const hasher_list_state = [];

    for (let digest_bit_count_i = 0; digest_bit_count_i < hasher_digest_bit_count_list.length; ++digest_bit_count_i) {
        const hasher_digest_bit_count = hasher_digest_bit_count_list[digest_bit_count_i];

        if (hasher_digest_bit_count == 224) {
            hasher_list_state.push(Sha3_224Hasher.new());
        } else if (hasher_digest_bit_count == 256) {
            hasher_list_state.push(Sha3_256Hasher.new());
        } else if (hasher_digest_bit_count == 384) {
            hasher_list_state.push(Sha3_384Hasher.new());
        } else if (hasher_digest_bit_count == 512) {
            hasher_list_state.push(Sha3_512Hasher.new());
        }
    }

    if (hasher_list_state.length == 0) {
        hasher_list_state.push(Sha3_224Hasher.new());
    }

    main_elem.innerHTML = `
<div class="heading_row">
<h1 class="title">${TITLE_TEXT}</h1>
<button id="${info_btn_elem_id}" class="info_btn">Info</button>
</div>
<h2 class="subtitle">${SUBTITLE_TEXT}</h2>
<div class="info">${INFO_CONTENT_HTML}</div>
<h3 class="section_heading">${INPUT_HEADING_TEXT}</h3>
<div id="${input_group_elem_id}" class="input_area"></div>
<h3 class="section_heading">${OUTPUT_HEADING_TEXT}</h3>
<div id="${output_group_elem_id}" class="digest_area">
</div>`;

    const info_btn_elem = document.getElementById(info_btn_elem_id);
    info_btn_elem.addEventListener(DOM_EVENT_CLICK_NAME, 
        () => {
            main_elem.classList.toggle(CLASSNAME_DISPLAY_INFO);
        }
    );

    const digest_elem_list = []

    const digest_output_elem = document.getElementById(output_group_elem_id);
    
    hasher_list_state.forEach((hasher, i) => {
        const bytes_io_elem = new BytesAreaElem(
            main_elem_id, 
            {
                elem_title: `SHA-3-${hasher.get_digest_u8_arr_len() * 8}`,
                codec_config: {
                    codec_type_idx: 1,
                    alphabet_string: digest_default_alphabet_string
                },
                read_only_flag: true
            }
        );
        
        digest_output_elem.appendChild(bytes_io_elem.elem);
        digest_elem_list.push(bytes_io_elem);
    });

    const input_elem_div_elem = document.getElementById(input_group_elem_id);

    const input_bytes_area = new BytesAreaElem(
        main_elem_id, 
        {
            elem_title: `Message`,
            codec_config: {
                codec_type_idx: 0,
            },
            read_only_flag: false,
        }
    );

    const hasher_state_update_closure = () => {
        const msg_bytes = input_bytes_area.get_current_bytes();
        input_bytes_area.update_downstream_string("");

        for (let hasher_i = 0; hasher_i < hasher_list_state.length; ++hasher_i) {
            const hasher = hasher_list_state[hasher_i].update(msg_bytes);
        }
    }

    const hasher_state_reset_closure = () => {
        input_bytes_area.update_downstream_string("");

        for (let hasher_i = 0; hasher_i < hasher_list_state.length; ++hasher_i) {
            const hasher = hasher_list_state[hasher_i].reset();
        }

        preview_finalize_closure([]);
    }

    const preview_finalize_closure = (msg_bytes) => {
        for (let hasher_i = 0; hasher_i < hasher_list_state.length; ++hasher_i) {
            const hasher = hasher_list_state[hasher_i].clone();

            hasher.update(msg_bytes);
            const digest_bytes = hasher.finalize();
            hasher.free();
            
            digest_elem_list[hasher_i].recv_upstream_bytes(digest_bytes);
        }
    };

    const btn_row_obj = make_btn_row(main_elem_id, UPDATE_BTN_TEXT, RESET_BTN_TEXT);

    init_btn_row(btn_row_obj, hasher_state_update_closure, hasher_state_reset_closure);

    input_elem_div_elem.append(input_bytes_area.elem, btn_row_obj.elem);

    input_bytes_area.set_input_change_event_listener(preview_finalize_closure);

    preview_finalize_closure([]);
}