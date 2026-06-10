import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js },
        extends: ['prettier', 'js/recommended'],
        languageOptions: { ...globals.jest },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
    },
]);
