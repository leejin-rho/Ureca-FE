import '@/styles/global.css';
import { globalStyle } from '@/styles/globals';
import { Global, ThemeProvider } from '@emotion/react';
import { Layout } from '@components/global/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Router Import
import Home from '@pages/home/Home';
import Apply from '@pages/Apply';
import FrontendCur from '@pages/home/FrontendCur';
import BackendCur from '@pages/home/BackendCur';
import FAQ from '@pages/home/FAQ';
import { ScrollProvider } from './assets/context/ScrollContext';

function App() {
  return (
    <BrowserRouter>
      <ScrollProvider>
        <Layout>
          <Global styles={globalStyle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/frontend" element={<FrontendCur />} />
            <Route path="/backend" element={<BackendCur />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </Layout>
      </ScrollProvider>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <Layout>
//       <Global styles={globalStyle} />
//       <Home />
//       {/* <FAQ /> */}
//     </Layout>
//   );
// }

export default App;
