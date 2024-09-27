import '@/styles/global.css';
import { globalStyle } from '@/styles/globals';
import { Global, ThemeProvider } from '@emotion/react';
import { Layout } from '@components/global/Layout';
import Home from '@pages/Home';
import Curriculum from '@pages/Curriculum';

function App() {
  return (
    <Layout>
      <Global styles={globalStyle} />
      {/* <Home /> */}
      <Curriculum />
    </Layout>
  );
}

export default App;
