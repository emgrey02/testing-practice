import { reverseString } from '.';

test('reverses great to taerg', () => {
    expect(reverseString('great')).toBe('taerg');
});

test('reverses resolution to noituloser', () => {
    expect(reverseString('resolution')).toBe('noituloser');
});
