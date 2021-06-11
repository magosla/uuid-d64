"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const d64 = require("d64");
const _bytesToHex = [];
for (let i = 0; i < 256; i++) {
    _bytesToHex[i] = (i + 0x100).toString(16).substr(1);
}
const encode = (uuid) => {
    return d64.encode(Buffer.from(uuid.split('-').join(''), 'hex'));
};
exports.encode = encode;
const decode = (d64str) => {
    let i = 0;
    const bth = _bytesToHex;
    const buf = d64.decode(d64str);
    return bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]];
};
exports.decode = decode;
//# sourceMappingURL=index.js.map