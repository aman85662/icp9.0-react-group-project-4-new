import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Footer from "./components/Footer"; 
import Navbar from "./components/Navbar"; 
import Home from "./views/Home/Home";
import TrainExplorer from "./views/Train/TrainExplorer";
import TrainSchedule from "./views/Train/TrainSchedule";
import Booking from "./views/Booking/Booking";
import PassengerDetails from "./views/Booking/PassengerDetail";
import Payment from "./views/Booking/Payment";
import About from './views/About/About';
import PrintTrainTicketPage from './views/Train/PrintTrainTickit';
import CancelTrainTicketPage from './views/Train/CancelTrainTicket';
import TrainRunningStatusPage from './views/Train/TrainRunningStatus';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train-explorer" element={<TrainExplorer />} />
        <Route path="/train-schedules" element={<TrainSchedule />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/passenger-details" element={<PassengerDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/print-train-ticket" element={<PrintTrainTicketPage />} />
        <Route path="/cancel-train-ticket" element={<CancelTrainTicketPage />} />
        <Route path="/train-running-status" element={<TrainRunningStatusPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App