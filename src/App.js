import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './Pages/Search'; // 'Seach' ki jagah 'Search'
import Index from './Pages/Index';
import NewChat from "./Pages/NewChat";
import CurrentChat from "./Pages/CurrentChat";
import Favorites from "./Pages/Favorites";
import Settings from "./Pages/Settings";
function App() {
  return (
   
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/new-chat" element={<NewChat />} />
        <Route path="/current-chat" element={<CurrentChat />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
