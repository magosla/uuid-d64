const test = require('ava');
const uuid = require('uuid').v4;
const uuid7 = require('uuid').v7;
const { encode, decode } = require('.');

test('decoded data integrity', t => {
  const id = uuid();
  const encoded = encode(id);
  const decoded = decode(encoded);

  t.is(id, decoded);
});


test('decoded data integrity for uuid 7', (t) => {
  const id = uuid7();
  const encoded = encode(id);
  const decoded = decode(encoded);

  t.is(id, decoded);
});