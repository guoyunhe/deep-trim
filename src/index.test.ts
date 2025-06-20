import { deepTrim } from '.';

it('deep trim string', async () => {
  expect(deepTrim(' foo bar ')).toBe('foo bar');
});

it('deep trim array', async () => {
  expect(deepTrim([' foo ', ' bar ', 123])).toEqual(['foo', 'bar', 123]);
});

it('deep trim object', async () => {
  const date = new Date();
  expect(
    deepTrim({
      foo: ' foo ',
      bar: ' bar ',
      foobar: [' foo ', ' bar ', 123],
      nope: false,
      num: 123,
      date,
    }),
  ).toEqual({
    foo: 'foo',
    bar: 'bar',
    foobar: ['foo', 'bar', 123],
    nope: false,
    num: 123,
    date,
  });
});
