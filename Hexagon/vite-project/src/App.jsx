import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import EditorPage from './pages/EditorPage';
import PublicPage from './pages/PublicPage';

function App() {
  return (
    <Routes>
      {/* Admin Dashboard */}
      <Route path="/" element={<AdminDashboard />} />

      {/* Puck Editor */}
      <Route path="/editor" element={<EditorPage />} />

      {/* Public pages — Vietnamese (default) */}
      <Route path="/:slug" element={<PublicPage />} />
      <Route path="/hoat-dong/:slug" element={<PublicPage />} />
      <Route path="/su-kien/:slug" element={<PublicPage />} />
      <Route path="/tin-tuc/:slug" element={<PublicPage />} />

      {/* Public pages — English */}
      <Route path="/en/:slug" element={<PublicPage forceLang="en" />} />
      <Route path="/en/hoat-dong/:slug" element={<PublicPage forceLang="en" />} />
      <Route path="/en/su-kien/:slug" element={<PublicPage forceLang="en" />} />
      <Route path="/en/tin-tuc/:slug" element={<PublicPage forceLang="en" />} />
    </Routes>
  );
}

export default App;
