import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: '신서유기폰트',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        root: { fontFamily: '신서유기폰트' },
      },
    },
  },
});
