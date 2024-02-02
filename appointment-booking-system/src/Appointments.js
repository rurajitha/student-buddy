import React from 'react';

const Appointments = ({ appointments }) => {
  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.studentName} - {appointment.time} - {appointment.purpose}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
