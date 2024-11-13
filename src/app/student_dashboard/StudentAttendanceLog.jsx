import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';


const StudentAttendanceLog = () => {
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [attendanceLog, setAttendanceLog] = useState([]);

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
  };

  const handleCheckIn = () => {
    const dateTime = getCurrentDateTime();
    setCheckInTime(dateTime);
    setAttendanceLog((prevLog) => [...prevLog, { type: 'Check-In', dateTime }]);
  };

  const handleCheckOut = () => {
    const dateTime = getCurrentDateTime();
    setCheckOutTime(dateTime);
    setAttendanceLog((prevLog) => [...prevLog, { type: 'Check-Out', dateTime }]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Student Attendance</div>

      <button
        style={{ ...styles.button, ...styles.checkInButton }}
        onClick={handleCheckIn}
        disabled={!!checkInTime && !checkOutTime}
      >
        Check In
      </button>

      <button
        style={{ ...styles.button, ...styles.checkOutButton }}
        onClick={handleCheckOut}
        disabled={!checkInTime || checkOutTime}
      >
        Check Out
      </button>

      <div style={styles.attendanceLog}>
        <p><strong>Attendance Log</strong></p>
        {attendanceLog.map((log, index) => (
          <div key={index} style={styles.logItem}>
            <span><strong>{log.type}:</strong> {log.dateTime}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '90%',
    maxWidth: '400px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '20px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    backgroundColor: '#27AE60 ',
    color: 'white',
    padding: '20px',
    fontSize: '1.5em'
  },
  button: {
    width: '80%',
    padding: '10px',
    margin: '15px 0',
    fontSize: '1em',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none'
  },
  checkInButton: {
    backgroundColor: '#23C55E',
    color: 'white'
  },
  checkOutButton: {
    backgroundColor: '#1ABB9C',
    color: 'white'
  },
  attendanceLog: {
    padding: '15px',
    backgroundColor: '#2ECC71',
    borderTop: '1px solid #e0e0e0',
    textAlign: 'left'
  },
  logItem: {
    padding: '10px 0',
    borderBottom: '1px solid #e0e0e0'
  }
};

export default StudentAttendanceLog;

