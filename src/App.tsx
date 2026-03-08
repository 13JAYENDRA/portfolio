import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkPermit from './pages/WorkPermit';
import WorkExperience from './pages/WorkExperience';
// Recommendations page removed per request
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import Music from './pages/Music';
import Reading from './pages/Reading';
import Blogs from './pages/Blogs';
import Certifications from './pages/Certifications';
import ExtracurricularActivities from './pages/ExtracurricularActivities';
import Feedback from './pages/Feedback';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      {/* recommendations route removed */}
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/music" element={<Layout><Music /></Layout>} />
      <Route path="/reading" element={<Layout><Reading /></Layout>} />
      <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
      <Route path="/extracurricular" element={<Layout><ExtracurricularActivities /></Layout>} />
      <Route path="/feedback" element={<Layout><Feedback /></Layout>} />
    </Routes>
  );
};

export default App;
