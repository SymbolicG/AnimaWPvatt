import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import HomePage from './pages/HomePage';
import DirectoryPage from './pages/DirectoryPage';
import EventsPage from './pages/EventsPage';
import CommunityPage from './pages/CommunityPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/directory/:category/:slug" element={<DirectoryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/user/:username" element={<UserProfilePage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
