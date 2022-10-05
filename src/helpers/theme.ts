import { createTheme } from '@mui/material/styles'
import { COLORS } from './constants'

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    yellow: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    yellow?: PaletteOptions['primary'];
    aqua?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    yellow: true;
    aqua: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error: true;
  }
}

export const hrTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.blue,
      contrastText: '#ffffff',
      light: COLORS.blueLight,
      dark: COLORS.blueDark
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          minHeight: 30,
          minWidth: 120,
          textTransform: 'none'
        }
      }
    }
  }
})
