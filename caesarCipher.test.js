import { caesarCipher } from '.';

test('shifts bread by a factor of 2 to make dtgcf', () => {
    expect(caesarCipher('bread', 2)).toBe('dtgcf');
});

test('tests lettercase (should follow original)', () => {
    expect(caesarCipher('BrEaD', 2)).toBe('DtGcF');
});

test('tests punctuation (should remain unchanged)', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
