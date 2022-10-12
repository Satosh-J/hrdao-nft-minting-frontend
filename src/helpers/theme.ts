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
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 2500,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
  palette: {
    primary: {
      main: COLORS.blue,
      contrastText: '#ffffff',
      light: COLORS.blueLight,
      dark: COLORS.blueDark
    },
    yellow: {
      main: COLORS.yellow,
      contrastText: '#000',
      light: COLORS.yellowLight,
      dark: COLORS.yellowDark
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          minHeight: 30,
          minWidth: 120,
          textTransform: 'none',
          // fontWeight: 'bold'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
      },
      variants: [
        {
          props: {
            maxWidth: false
          },
          style: {
            '&.MuiContainer-root': {
              paddingLeft: 0,
              paddingRight: 0
            },
          },
        }
      ]
    },

  }
})
