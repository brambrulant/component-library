export type TextComposition = {
  fontFamily: string
  fontWeight: string
  lineHeight: string
  fontSize: string
  letterSpacing?: string
}

export interface Typography {
  fontFamily: {
    bold: string
    news: string
  }
  variants: {
    h1: TextComposition
    h2: TextComposition
    h3: TextComposition
    h4: TextComposition
    xs: TextComposition
    s: TextComposition
    m: TextComposition
    l: TextComposition
  }
}

export const typography: Typography = {
  fontFamily: {
    bold: 'ClanPro-Bold',
    news: 'ClanPro-News',
  },
  variants: {
    h1: {
      fontFamily: 'ClanPro-Bold',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.03em',
      fontSize: '48px',
    },
    h2: {
      fontFamily: 'ClanPro-Bold',
      fontWeight: '700',
      lineHeight: '36px',
      letterSpacing: '-0.03em',
      fontSize: '24px',
    },
    h3: {
      fontFamily: 'ClanPro-Bold',
      fontWeight: '700',
      lineHeight: '32px',
      letterSpacing: '-0.02em',
      fontSize: '20px',
    },
    h4: {
      fontFamily: 'ClanPro-Bold',
      fontWeight: '700',
      lineHeight: '24px',
      letterSpacing: '-0.02em',
      fontSize: '16px',
    },
    l: {
      fontFamily: 'ClanPro-News',
      fontWeight: '475',
      lineHeight: '28px',
      fontSize: '16px',
    },
    m: {
      fontFamily: 'ClanPro-News',
      fontWeight: '475',
      lineHeight: '24px',
      fontSize: '14px',
    },
    s: {
      fontFamily: 'ClanPro-News',
      fontWeight: '475',
      lineHeight: '20px',
      fontSize: '12px',
    },
    xs: {
      fontFamily: 'ClanPro-News',
      fontWeight: '475',
      lineHeight: '16px',
      fontSize: '10px',
    },
  },
}
