import * as d64 from 'd64';

const testRegex = /([0-9a-fA-F]{8})-([0-9a-fA-F]{4})-([0-9a-fA-F]{4})-([0-9a-fA-F]{4})-([0-9a-fA-F]{12})/
const _bytesToHex: string[] = [];

for (let i = 0; i < 256; i++) {
  _bytesToHex[i] = (i + 0x100).toString(16).substr(1);
}

export const encode = (uuid: string) => {
  if (testRegex.test(uuid) === false) throw new TypeError('invalid uuid');
  return d64.encode(Buffer.from(uuid.split('-').join(''), 'hex'));
}

export const decode = (d64str: string) => {
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
}
