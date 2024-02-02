import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';

const BookAppointment = ({ onBookAppointment }) => {
  const [showForm, setShowForm] = useState(false);

  const handleBookAppointment = (appointment) => {
    onBookAppointment(appointment);
    setShowForm(false);
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      {showForm ? (
        <AppointmentForm onSubmit={handleBookAppointment} />
      ) : (
        <button onClick={() => setShowForm(true)}>Book Now</button>
      )}
    </div>
  );
};

export default BookAppointment;
