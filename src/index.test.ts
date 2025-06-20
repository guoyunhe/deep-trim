import { deepTrim } from '.';

describe('deepTrim', () => {
  it('normal', async () => {
    expect(deepTrim('Foo', 'Bar')).toBe('Foo Bar');
  });

  it('lastName upper case', async () => {
    expect(deepTrim('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
