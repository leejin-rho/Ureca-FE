import { globalStyle } from '@/styles/globals';
import { Global, ThemeProvider } from '@emotion/react';
import { Layout } from '@components/global/Layout';
import Home from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apply from './pages/Apply';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Global styles={globalStyle} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
