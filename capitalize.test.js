import { capitalize } from './index.js';

test('capitalizes the to The', () => {
    expect(capitalize('the')).toBe('The');
});
