import { calculator } from '.';

test('adds 1 and 2 to make 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('multiplies 2 and 3 to make 6', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test('subtracts 4 from 6 to make 2', () => {
    expect(calculator.subtract(6, 4)).toBe(2);
});

test('divides 6 into 3 to make 2', () => {
    expect(calculator.divide(6, 3)).toBe(2);
});
