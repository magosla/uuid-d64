"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d64 = require("d64");
const testRegex = /([0-9a-fA-F]{8})-([0-9a-fA-F]{4})-([0-9a-fA-F]{4})-([0-9a-fA-F]{4})-([0-9a-fA-F]{12})/;
const _bytesToHex = [];
for (let i = 0; i < 256; i++) {
    _bytesToHex[i] = (i + 0x100).toString(16).substr(1);
}
exports.encode = (uuid) => {
    if (testRegex.test(uuid) === false)
        throw new TypeError('invalid uuid');
    return d64.encode(Buffer.from(uuid.split('-').join(''), 'hex'));
};
exports.decode = (d64str) => {
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
//# sourceMappingURL=index.js.map