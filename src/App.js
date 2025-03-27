import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './Pages/Search';
import Index from './Pages/Index';
import NewChat from "./Pages/NewChat";
import Chat from "./Pages/Chat";
import Favorites from "./Pages/Favorites";
import Settings from "./Pages/Settings";
import Chat2 from "./Pages/Chat2";
import CurrentChat from "./Pages/CurrentChat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/new-chat" element={<NewChat />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Chat2" element={<Chat2 />} />
        <Route path="/CurrentChat" element={<CurrentChat />} />
      </Routes>
    </Router>
  );
}

export default App;
