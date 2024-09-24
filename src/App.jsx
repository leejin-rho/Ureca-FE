import '@/styles/global.css';
import { globalStyle } from '@/styles/globals';
import { Global, ThemeProvider } from '@emotion/react';
import { Layout } from '@components/global/Layout';
import Home from '@pages/Home';

function App() {
  return (
    <Layout>
      <Global styles={globalStyle} />
      <Home />
    </Layout>
  );
}

export default App;
