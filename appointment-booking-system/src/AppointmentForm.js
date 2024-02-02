import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
  const [studentName, setStudentName] = useState('');
  const [time, setTime] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = { studentName, time, purpose };
    onSubmit(appointment);
    setStudentName('');
    setTime('');
    setPurpose('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Student Name:
        <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
      </label>
      <br />
      <label>
        Time:
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <br />
      <label>
        Purpose:
        <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
