// // File: src/app/student_dashboard/DocumentUpload.jsx
// import React, { useState } from 'react';

// const DocumentUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       // Handle file upload logic here (e.g., send to server or cloud storage)
//       alert(`File "${selectedFile.name}" uploaded successfully!`);
//       setSelectedFile(null); // Reset file after upload
//     } else {
//       alert('Please select a file to upload');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Upload Documents</h2>
//       <input type="file" onChange={handleFileChange} style={styles.inputFile} />
//       <button onClick={handleUpload} style={styles.uploadButton}>
//         Upload
//       </button>
//       {selectedFile && <p style={styles.fileName}>Selected File: {selectedFile.name}</p>}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: '90%',
//     maxWidth: '400px',
//     margin: '20px auto',
//     padding: '20px',
//     textAlign: 'center',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
//   },
//   inputFile: {
//     display: 'block',
//     margin: '15px auto',
//     fontSize: '1em',
//   },
//   uploadButton: {
//     padding: '10px 20px',
//     fontSize: '1em',
//     fontWeight: 'bold',
//     backgroundColor: '#FF4500',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   },
//   uploadButtonHover: {
//     backgroundColor: '#ff6f33',
//   },
//   fileName: {
//     marginTop: '10px',
//     fontStyle: 'italic',
//     color: '#555',
//   },
// };

// export default DocumentUpload;


import React, { useState } from 'react';

const DocumentUpload = () => {
  const [uploadedDocs, setUploadedDocs] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newDoc = {
        id: Date.now(),
        name: selectedFile.name,
        file: selectedFile,
      };
      setUploadedDocs([...uploadedDocs, newDoc]);
      setSelectedFile(null);
    }
  };

  const handleView = (doc) => {
    // Logic for viewing the document, e.g., opening in a new tab
    const fileURL = URL.createObjectURL(doc.file);
    window.open(fileURL, '_blank');
  };

  const handleUpdate = (id) => {
    // Logic for updating a document (this could include selecting a new file)
    const updatedFile = window.prompt("Enter new file name (for demo purposes):");
    setUploadedDocs((prevDocs) =>
      prevDocs.map((doc) =>
        doc.id === id ? { ...doc, name: updatedFile || doc.name } : doc
      )
    );
  };

  const handleDelete = (id) => {
    setUploadedDocs(uploadedDocs.filter((doc) => doc.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Document Upload</h2>
      <div style={styles.uploadSection}>
        <input type="file" onChange={handleFileChange} style={styles.input} />
        <button onClick={handleUpload} style={styles.uploadButton}>Upload</button>
      </div>
      
      <h3 style={styles.subHeader}>Uploaded Documents</h3>
      <ul style={styles.documentList}>
        {uploadedDocs.map((doc) => (
          <li key={doc.id} style={styles.documentItem}>
            <span>{doc.name}</span>
            <button onClick={() => handleView(doc)} style={styles.viewButton}>View</button>
            <button onClick={() => handleUpdate(doc.id)} style={styles.updateButton}>Update</button>
            <button onClick={() => handleDelete(doc.id)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    width: '90%',
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '1.5em',
    color: '#333',
    textAlign: 'center',
  },
  uploadSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px 0',
  },
  input: {
    marginRight: '10px',
  },
  uploadButton: {
    padding: '10px 20px',
    backgroundColor: '#27AE60',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  subHeader: {
    fontSize: '1.2em',
    marginTop: '20px',
  },
  documentList: {
    listStyleType: 'none',
    padding: 0,
  },
  documentItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '8px',
  },
  viewButton: {
    backgroundColor: '#1E90FF',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  updateButton: {
    backgroundColor: '#FFD700',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  deleteButton: {
    backgroundColor: '#FF4500',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default DocumentUpload;

