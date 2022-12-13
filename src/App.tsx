import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flex from "./components/Flex/Flex";
import Menu from "./components/Menu";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Grid from "./components/Grid/Grid";

const theme = createTheme({
  palette: {
    primary: {
      light: '#5a6f80',
      main: '#2f4454',
      dark: '#051d2b',
    },
    secondary: {
      light: '#ffacc3',
      main: '#da7b93',
      dark: '#a64c65',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/flex" element={
          <div>
            <Menu />
            <Flex/>
          </div>} />
        <Route path="grid" element={
            <div>
              <Menu />
              <Grid/>
          </div>
        } />

      </Routes>
      </BrowserRouter></ThemeProvider>
  );
}

export default App;
