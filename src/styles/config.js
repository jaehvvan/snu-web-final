import { createTheme } from '@mui/material';
import KoreaNewsM from '../assets/fonts/a대한늬우스M.ttf';
import KoreaNewsL from '../assets/fonts/a대한늬우스L.ttf';

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
