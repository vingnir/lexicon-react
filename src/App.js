import './App.css';
import Sidebar from './Components/Layout/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import People from './Pages/People';
import Languages from './Pages/Languages';
import Profile from './Pages/Profile';
import PeopleDetails from './Pages/People-details';
import ErrorPage from './Pages/ErrorPage';
import AddPerson from './Pages/AddPerson';




function App() {
  return (
    <Router>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/people-details" element={<PeopleDetails />} />
        <Route path="/person-add" element={<AddPerson />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
