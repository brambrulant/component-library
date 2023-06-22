type ColorSet = {
    color40: string
    color45: string
    color50: string
    color55: string
    color60: string
    darkFade: string
    lightFade: string
}

export interface Palette {
    primary: {
        indigo: ColorSet
        green: ColorSet
    }
    secondary: {
        violet: ColorSet
        lightViolet: ColorSet
    }
    intent: {
        blue: ColorSet
        orange: ColorSet
        red: ColorSet
        yellow: ColorSet
    }
    gradient: {
        green: string
        violet: string
    }
    grayScale: {
        placeholder: string
        grey34: string
        grey42: string
        grey58: string
        grey90: string
    }
}

const primary: Palette['primary'] = {
    indigo: {
        color50: '#220C4A',
        color40: '#361376',
        color45: '#2C1060',
        color55: '#180834',
        color60: '#0E051E',
        darkFade: '#090312',
        lightFade: '#C8C2D2',
    },
    green: {
        color50: '#2CE27E',
        color40: '#59E899',
        color45: '#42E58C',
        color55: '#1ED771',
        color60: '#1AC165',
        darkFade: '#0B3820',
        lightFade: '#CAF8DF',
    },
}

const secondary: Palette['secondary'] = {
    violet: {
        color50: '#8000FF',
        color40: '#9933FF',
        color45: '#8D1AFF',
        color55: '#7300E6',
        color60: '#6600CC',
        darkFade: '#200040',
        lightFade: '#DFBFFF',
    },
    lightViolet: {
        color50: '#8664FF',
        color40: '#AE97FF',
        color45: '#9A7DFF',
        color55: '#724AFF',
        color60: '#5E31FF',
        darkFade: '#211940',
        lightFade: '#E1D8FF',
    },
}

const intent: Palette['intent'] = {
    blue: {
        color50: '#13D2FC',
        color40: '#45DCFD',
        color45: '#2CD7FC',
        color55: '#03C7F2',
        color60: '#03B3D9',
        darkFade: '#05343F',
        lightFade: '#C4F4FE',
    },
    orange: {
        color50: '#FF8F5E',
        color40: '#FFB291',
        color45: '#FFA177',
        color55: '#FF7D44',
        color60: '#FF6C2B',
        darkFade: '#402418',
        lightFade: '#FFE3D7',
    },
    red: {
        color50: '#FF5351',
        color40: '#FF8584',
        color45: '#FF6C6A',
        color55: '#FF3A37',
        color60: '#FF211E',
        darkFade: '#401514',
        lightFade: '#FFD4D3',
    },
    yellow: {
        color50: '#FFD65A',
        color40: '#FFEFC0',
        color45: '#FFE38D',
        color55: '#FFD040',
        color60: '#FFC927',
        darkFade: '#403516',
        lightFade: '#FFF5D6',
    },
}

const gradient: Palette['gradient'] = {
    green: 'linear-gradient(90deg, #220C4A 0%, #2CE27E 66%, #CAF8DF 100%)',
    violet: 'linear-gradient(90deg, #220C4A 0%, #8000FF 66%, #8664FF 100%)',
}

const grayScale: Palette['grayScale'] = {
    placeholder: '#CCCCCC',
    grey34: '#F5F5F5',
    grey42: '#E0E0E0',
    grey58: '#B8B8B8',
    grey90: '#666666',
}

export const palette: Palette = {
    primary,
    secondary,
    intent,
    grayScale,
    gradient,
}
