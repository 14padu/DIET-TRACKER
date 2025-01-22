import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

 import Navbar from './components/Navbar';
 import Footer from './components/Footer';
import CreatePerson from './components/CreatePerson';
// import ShowPersonList from './components/ShowPersonList';
// import ShowPersonDetails from './components/ShowPersonDetails';
// import ExportPage from './components/ExportPage';
// import UpdatePersonInfo from './components/UpdatePersonInfo';
// import HomePage from './components/HomePage';
// import SearchPerson from './components/SearchPerson';
// import QRCodePage from './components/QRCodePage';

const App = () => {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
      
        <Box component="main" flexGrow={1} py={3}>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/person-create" element={<CreatePerson />} />
            {/* <Route path="/person-list" element={<ShowPersonList />} />
            <Route path="/edit-person/:id" element={<UpdatePersonInfo />} />
            <Route path="/show-person/:id" element={<ShowPersonDetails />} />
            <Route path="/export" element={<ExportPage />} />
            <Route path="/search" element={<SearchPerson />} />
            <Route path="/qr-codes" element={<QRCodePage />} /> */}
          </Routes>
        </Box>
      
      </Box>
    </Router>
  );
};

export default App;
