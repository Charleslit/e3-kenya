export const theme = {
  colors: {
    // Brand colors based on the Sisterherd Strong theme
    primary: {
      50: '#FFE5E5',
      100: '#FFCCCC',
      200: '#FF9999',
      300: '#FF6666',
      400: '#FF3333',
      500: '#DC143C', // Crimson red - primary brand color
      600: '#B30000',
      700: '#800000',
      800: '#4D0000',
      900: '#1A0000',
    },
    secondary: {
      50: '#E6FFE6',
      100: '#CCFFCC',
      200: '#99FF99',
      300: '#66FF66',
      400: '#33FF33',
      500: '#228B22', // Forest green - secondary brand color
      600: '#006600',
      700: '#004D00',
      800: '#003300',
      900: '#001A00',
    },
    accent: {
      // Elephant-inspired colors
      beige: '#F5F5DC', // Beige accent
      gray: '#808080', // Elephant gray
      black: '#000000', // Pure black for contrast
    },
    neutral: {
      50: '#FFFFFF',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    success: '#228B22', // Forest green
    warning: '#DC143C', // Crimson
    error: '#DC143C',   // Crimson
    info: '#808080',    // Elephant gray
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
      fontFamily: 'var(--font-crimson)', // Crimson Text for headings
      h1: { fontSize: '3.5rem', lineHeight: '1.2', fontWeight: '700' },
      h2: { fontSize: '2.5rem', lineHeight: '1.3', fontWeight: '700' },
      h3: { fontSize: '2rem', lineHeight: '1.4', fontWeight: '600' },
      h4: { fontSize: '1.5rem', lineHeight: '1.4', fontWeight: '600' },
      h5: { fontSize: '1.25rem', lineHeight: '1.4', fontWeight: '600' },
      h6: { fontSize: '1rem', lineHeight: '1.4', fontWeight: '600' },
    },
    body: {
      fontFamily: 'var(--font-raleway)', // Raleway for body text
      small: { fontSize: '0.875rem', lineHeight: '1.6' },
      base: { fontSize: '1.125rem', lineHeight: '1.7' },
      large: { fontSize: '1.25rem', lineHeight: '1.7' },
    },
    accent: {
      fontFamily: 'var(--font-montserrat)', // Montserrat for accents and buttons
    },
  },
}
