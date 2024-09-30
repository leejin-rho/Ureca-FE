import '@/styles/global.css';
import { globalStyle } from '@/styles/globals';
import { Global, ThemeProvider } from '@emotion/react';
import { Layout } from '@components/global/Layout';
import Home from '@pages/home/Home';
import FrontendCur from '@pages/home/FrontendCur';
import BackendCur from '@pages/home/BackendCur';
import FAQ from '@pages/home/FAQ';

function App() {
  return (
    <Layout>
      <Global styles={globalStyle} />
      <Home />
      {/* <FAQ /> */}
    </Layout>
  );
}

export default App;
