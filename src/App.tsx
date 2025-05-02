import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Cables from './pages/Cables';
import Transformers from './pages/Transformers';
import TransformerPoints from './pages/TransformerPoints';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cables" element={<Cables />} />
          <Route path="/transformers" element={<Transformers />} />
          <Route path="/transformer-points" element={<TransformerPoints />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;