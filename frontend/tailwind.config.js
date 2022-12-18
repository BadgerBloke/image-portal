/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`
        }
        return `rgb(var(${variableName}))`
    }
}

module.exports = {
    content: ['./src/pages/**/*.{ts,tsx,js,jsx}', './src/components/**/*.{ts,tsx,js,jsx}'],
    darkMode: 'media', // or 'media' or 'class'
    mode: 'jit',
    // important: true,
    theme: {
        extend: {
            colors: {
                brand: {
                    muted: withOpacity('--color-brand-muted'),
                    inverted: withOpacity('--color-brand-inverted'),
                    yellow: withOpacity('--color-brand-yellow'),
                    red: withOpacity('--color-brand-red'),
                    primary: withOpacity('--color-brand-primary'),
                    base: {
                        "light": withOpacity('--color-brand-base-light'),
                        DEFAULT: withOpacity('--color-brand-base'),
                    },
                    themeShadow: withOpacity('--color-themeShadow'),
                },
            },
            spacing: {
                'screenLessNav': 'calc(100vh - 64px)'
            },
            minWidth: theme => ({
                ...theme('spacing'),
            }),
            maxWidth: theme => ({
                ...theme('minWidth'),
            }),
            minHeight: theme => ({
                ...theme('spacing'),
            }),
            maxHeight: theme => ({
                ...theme('minHeight'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ]
}
