import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Appointments from './Appointments';
import BookAppointment from './BookAppointment';
import Header from './Header';

const App = () => {
  const [appointments, setAppointments] = useState([]);

  const handleBookAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (<Router><div>
   <Header/>
   
         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/appointments">Appointments</Link>
            </li>
            <li>
              <Link to="/book">Book Appointment</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" render={() => <h2>Welcome to the Appointment Booking System</h2>} />
        <Route path="/appointments" render={() => <Appointments appointments={appointments} />} />
        <Route
          path="/book"
          render={() => <BookAppointment onBookAppointment={handleBookAppointment} />}
        />
     
      </div>   </Router>  );
};

export default App;
