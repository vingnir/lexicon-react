import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import People from './Pages/People';
import Languages from './Pages/Languages';
import Profile from './Pages/Profile';
import PeopleDetails from './Pages/People-details';
import ErrorPage from './Pages/ErrorPage';
import ProfileContent from "./Components/ProfileContent"; 
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal
} from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";



function App() {
  return (
    <Router>
      <Sidebar />
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
      </UnauthenticatedTemplate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/people-details" element={<PeopleDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
