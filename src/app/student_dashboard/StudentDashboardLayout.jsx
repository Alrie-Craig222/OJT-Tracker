import React from 'react';
import { Outlet } from 'react-router-dom';

const StudentDashboardLayout = () => {
  return (
    <div className="student_dashboard">
      <header></header>
     
      {/* Add any sidebar or header here */}
      <main>
        <Outlet /> {/* Renders nested student routes here */}
      </main>
    </div>
  );
};

export default StudentDashboardLayout;


// // File: src/app/student_dashboard/StudentDashboard.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const StudentDashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <h1>Student Dashboard</h1>
//       </div>

//       <div className="dashboard-links">
//         <div className="dashboard-link">
//           <Link to="/student_dashboard/my_tasks" className="dashboard-link-button">My Tasks</Link>
//         </div>
//         <div className="dashboard-link">
//           <Link to="/student_dashboard/task_record" className="dashboard-link-button">Task Record</Link>
//         </div>
//         <div className="dashboard-link">
//           <Link to="/student_dashboard/requirements" className="dashboard-link-button">Requirements</Link>
//         </div>
//         <div className="dashboard-link">
//           <Link to="/student_dashboard/attendance" className="dashboard-link-button">Attendance</Link>
//         </div>
//       </div>

//       {/* Inline CSS Styles */}
//       <style jsx>{`
//         .dashboard-container {
//           width: 90%;
//           max-width: 500px;
//           margin: 0 auto;
//           background-color: #fff;
//           border-radius: 8px;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//           padding: 20px;
//         }

//         .dashboard-header {
//           background-color: #FF4500;
//           color: white;
//           text-align: center;
//           padding: 15px;
//           font-size: 1.8rem;
//           border-radius: 8px 8px 0 0;
//         }

//         .dashboard-links {
//           margin-top: 20px;
//         }

//         .dashboard-link {
//           margin-bottom: 15px;
//           text-align: center;
//         }

//         .dashboard-link-button {
//           display: inline-block;
//           width: 80%;
//           padding: 12px;
//           margin: 5px 0;
//           background-color: #FF4500;
//           color: white;
//           text-decoration: none;
//           font-weight: bold;
//           border-radius: 5px;
//           text-align: center;
//           transition: background-color 0.3s;
//         }

//         .dashboard-link-button:hover {
//           background-color: #ff6f33;
//         }

//         .dashboard-link-button:active {
//           background-color: #d73800;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default StudentDashboard;
