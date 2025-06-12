import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter
import App from './App.jsx';
import './index.css'; // ✅ Import your CSS file
import { ThemeProvider } from "../src/components/theme-provider.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
