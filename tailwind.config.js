const spacing = {};
const heightWidth = {};
const fontSize = {};
const borderRadius = {};

//------------------------------
// @Spacing (margin,padding,gap)
//-------------------------------
for (let i = 0; i <= 128; i++) {
    spacing[i * 2] = `${i * 2}px`;
}

//------------------------------
// @FontSize
//-------------------------------
for (let i = 10; i <= 40; i++) {
    fontSize[i] = [`${i}px`, `${i}px`];
}

//------------------------------
// @Border Radious
//-------------------------------
for (let i = 0; i <= 40; i++) {
    borderRadius[i] = `${i}px`;
}

//------------------------------
// @Width
// Default have 0 to 256px
//-------------------------------
for (let i = 130; i <= 500; i++) {
    heightWidth[i * 2] = `${i * 2}px`;
}

module.exports = {
    // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    important: true,
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xs: { max: '575px' },
            sm: { min: '576px', max: '768px' },
            md: { min: '769px', max: '991px' },
            lg: { min: '992px', max: '1199px' },
            xl: { min: '1200px' },
            xxl: { min: '1471px' }
        },
        fontFamily: {
            mon: ['Montserrat', 'sans-serif']
        },
        fontSize,
        borderRadius: {
            ...borderRadius,
            full: '9999px'
        },

        colors: {
            black: {
                default: '#000000'
            },
            white: {
                default: '#FFFFFF'
            },
            primary: {
                default: '#315EFF'
            }
        },
        borderWidth: {
            default: '0.5px',
            0: '0',
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px'
        },

        spacing: {
            ...spacing
        },

        extend: {
            width: {
                ...heightWidth
            },
            height: {
                ...heightWidth
            }
        }
    },
    variants: {
        fontSize: ['responsive', 'hover']
    },
    plugins: [],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    }
};
