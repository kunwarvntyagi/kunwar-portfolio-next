let colors = {
    greenbg: '#00cb84',
    blue: '#222',
    white: '#fff',
    black: '#000',
    heroColor: '#f5f5f5cc',
    transparent: 'transparent',
    
}
const safeList = ['bg-hero', 'border-black', 'border-4', 'bg-white']

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
            backgroundImage: {
                hero: 'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(/static/images/a.jpg)'
            },
            screens: {
                sm: '300px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px'
            },
            fontFamily: {
                Regular: ['Gotham-Rounded-Book'],
                Medium: ['Gotham-Rounded-Medium'],
                Bold: ['Gotham-Rounded-Bold']
            },
            fontSize: {
                '14': '14px',
                '16': '16px',
                '20': '20px',
                '25': '25px',
                '30': '30px'
            },
            lineHeight: {
                '20': '20px'
            },
            width: {
                auto: 'auto',
                full: '100%',
                '10vw': '10vw',
                '12vw': '12vw',
                '15vw': '15vw',
                '20': '20px',
                '30': '30px',
                '40': '40px',
                '50': '50px',
                '60': '60px',
                '70': '70px',
                '1/2': '50%',
                '1/3': '33.33%',
                '2/3': '66.66%'
            },
            height: {
                auto: 'auto',
                full: '100%',
                hero: 'calc(100vh - 90px)',
                '10vh': '10vh',
                '12vh': '12vh',
                '15vh': '15vh',
                '20': '20px',
                '30': '30px',
                '40': '40px',
                '50': '50px',
                '60': '60px',
                '70': '70px',
                screen: '100vh'
            },
            maxWidth: {
                md: '768px',
                lg: '984px',
                '1/2': '50%',
                '1/3': '33.33%',
                '2/3': '66.66%',
                '3/4' : '75%',
                '4/5': '80%',
                '9/10': '90%'
            },
            maxHeight: {

            },
            minWidth: {

            },
            minHeight: {
                '140': '140px'
            },
            padding: {
                '5': '5px',
                '10': '10px',
                '15': '15px',
                '20': '20px',
                '25': '25px',
                '30': '30px',
                '40': '40px',
                '50': '50px',
                '60': '60px'
            },
            margin: {
                auto: 'auto',
                '10vw': '10vw',
                '10vh': '10vh',
                '6': '6px',
                '10': '10px',
                '13': '13px',
                '15': '15px',
                '20': '20px',
                '25': '25px',
                '30': '30px',
                '40': '40px',
                '50': '50px',
                '60': '60px'
            },
            borderWidth: {
                '1': '1px'
            },
            borderRadius: {

            },
            inset: {
                '1/2': '50%'
            },
            spacing: {
                '1/2': '50%'
            },
            gap: {

            },
            zIndex: {
                '10': '10',
                '20': '20',
                '50': '50'

            },
            opacity: {

            },
            boxShadow: {
                lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"
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
    safelist: safeList
}