let colors = {
    blue: '#222',
    transparent: 'transparent'
}

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
        extend: {
            backgroundColor: colors,
            textColor: colors,
            borderColor: colors,
            fontFamily: {
                RegularFont: [''],
                MediumFont: ['']
            }
        }
    }
}