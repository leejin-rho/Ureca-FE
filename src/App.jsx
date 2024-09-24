import { globalStyle } from '@/styles/globals';
import { Global, ThemeProvider } from '@emotion/react';
import { Layout } from '@components/global/Layout';
import Home from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Global styles={globalStyle} />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>

    // <Layout>
    //   <Global styles={globalStyle} />
    //   <Home />
    // </Layout>
  );
}

export default App;
