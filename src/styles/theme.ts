export const theme = {
  colors: {
    // Warm and friendly colors based on African sunset/nature theme
    primary: {
      50: '#FFF5E6',
      100: '#FFE4BF',
      200: '#FFD199',
      300: '#FFBE72',
      400: '#FFAB4C',
      500: '#FF9826', // Primary brand color
      600: '#FF8500',
      700: '#CC6A00',
      800: '#995000',
      900: '#663500',
    },
    secondary: {
      50: '#F5F9FF',
      100: '#E5F0FF',
      200: '#C7E0FF',
      300: '#94C1FF',
      400: '#5A9CFF',
      500: '#2673FF', // Secondary brand color
      600: '#0052FF',
      700: '#003ECC',
      800: '#002B8F',
      900: '#001A52',
    },
    accent: {
      // Earthy tones for environmental aspect
      green: '#2D5A27',
      sage: '#8BA888',
      terra: '#CB8E6E',
      clay: '#B4654A',
    },
    neutral: {
      50: '#F9F9F9',
      100: '#F0F0F0',
      200: '#E4E4E4',
      300: '#D1D1D1',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    success: '#2D5A27',
    warning: '#FF9826',
    error: '#B4654A',
    info: '#2673FF',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
  typography: {
    heading: {
      fontFamily: 'var(--font-heading)',
      h1: { fontSize: '3rem', lineHeight: '1.2' },
      h2: { fontSize: '2.25rem', lineHeight: '1.3' },
      h3: { fontSize: '1.875rem', lineHeight: '1.4' },
      h4: { fontSize: '1.5rem', lineHeight: '1.4' },
      h5: { fontSize: '1.25rem', lineHeight: '1.4' },
      h6: { fontSize: '1rem', lineHeight: '1.4' },
    },
    body: {
      fontFamily: 'var(--font-body)',
      small: { fontSize: '0.875rem', lineHeight: '1.5' },
      base: { fontSize: '1rem', lineHeight: '1.6' },
      large: { fontSize: '1.125rem', lineHeight: '1.6' },
    },
    serif: {
      fontFamily: 'var(--font-serif)',
    },
    accent: {
      fontFamily: 'var(--font-accent)',
    },
  },
}
