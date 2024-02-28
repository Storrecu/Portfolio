// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Landing from './Landing';
import Home from './Home';
import AboutMe from './AboutMe';

const App = () => {
  // const [showLanding, setShowLanding] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLanding(false);
  //   }, 4000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <main className="main">
      <Routes>
        {/* <Route
          path="/"
          element={
            showLanding ? <Landing showLanding={showLanding} /> : <Home />
          }
        /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </main>
  );
};

export default App;
