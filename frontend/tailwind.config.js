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
    content: ['./node_modules/flowbite-react/**/*.js', './src/app/**/*.tsx', './src/components/**/*.tsx'],
    darkMode: 'media', // or 'media' or 'class'
    mode: 'jit',
    // important: true,
    theme: {
        extend: {
            colors: {
                primary: {
                    bg: withOpacity('--color-primary-bg'),
                    text: withOpacity('--color-primary-text'),
                    border: withOpacity('--color-primary-border'),
                },
                info: {
                    DEFAULT: withOpacity('--color-info'),
                    dark: withOpacity('--color-info-dark'),
                },
                success: {
                    DEFAULT: withOpacity('--color-success'),
                    light: withOpacity('--color-success-light'),
                },
                warn: {
                    DEFAULT: withOpacity('--color-warning'),
                    light: withOpacity('--color-warning-light'),
                },
                button: {
                    DEFAULT: withOpacity('--color-primary-button-bg'),
                },
                danger: {
                    light: withOpacity('--color-danger-light'),
                    DEFAULT: withOpacity('--color-danger'),
                    dark: withOpacity('--color-danger-dark'),
                },
                base: {
                    layer: {
                        bg: withOpacity('--color-base-layer-bg'),
                    }
                }
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
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
}
