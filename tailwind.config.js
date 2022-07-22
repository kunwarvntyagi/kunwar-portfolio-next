let colors = {
    blue: '#222',
    white: '#fff',
    transparent: 'transparent'
}

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media',
    important: false,
    separator: ':',
    theme: {
        extend: {
            backgroundColor: colors,
            textColor: colors,
            borderColor: colors,
            screens: {
                sm: '300px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px'
            },
            fontFamily: {
                RegularFont: [''],
                MediumFont: [''],
                BoldFont: ['']
            },
            fontSize: {
                '14': '14px'
            },
            lineHeight: {
                '20': '20px'
            },
            width: {
                auto: 'auto',
                full: '100%',
                '50': '50px',
            },
            height: {
                auto: 'auto',
                full: '100%',
                '50': '50px'
            },
            maxWidth: {
                md: '768px',
                lg: '984px',
            },
            maxHeight: {

            },
            minWidth: {

            },
            minHeight: {

            },
            padding: {
                '10': '10px',
                '15': '15px',
                '20': '20px'
            },
            margin: {
                auto: 'auto',
                '10': '10px',
                '15': '15px',
                '20': '20px'
            },
            borderWidth: {

            },
            borderRadius: {

            },
            inset: {

            },
            spacing: {

            },
            gap: {

            },
            zIndex: {

            },
            opacity: {

            }
        }
    },
    variants: {
        extend: {
            fontFamily: ['responsive'],
            display: ['responsive'],
            borderColor: ['responsive']
        },
        padding: ['responsive']
    },
    plugins: [],
}