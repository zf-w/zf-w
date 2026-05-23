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

const LANG_EN_TEXT_OBJ = {
    TITLE_TEXT: "SHA-3 Hasher",
    SUBTITLE_TEXT: "Secure Hash Algorithm 3 based on Keccak algorithm",
    INPUT_HEADING_TEXT: "1. Input",
    OUTPUT_HEADING_TEXT: "2. Output",
    UPDATE_BTN_TEXT: "Update",
    RESET_BTN_TEXT: "Reset",
    INFO_CONTENT_HTML: `
<ul>
<li>Update Button: pushes the message to the hashers.</li>
<li>Reset Button: resets the hashers.</li>
<li>Output Section: displays the finalized digest given the previously "updated" message and the current content in the textarea.</li>
</ul>`
}

export const LANG_TEXT_CONFIG_OBJ = {
    "en": LANG_EN_TEXT_OBJ
};

export const LANG_DEFAULT_TEXT_OBJ = LANG_EN_TEXT_OBJ;