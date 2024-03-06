import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function EducationDetails() {
  const education = useSelector(state => state.user.education);
  const certifications = useSelector(state => state.user.certifications);
  const [newCertification, setNewCertification] = useState('');
  const [showTextField, setShowTextField] = useState(false);
  const dispatch = useDispatch();

  const handleAddCertification = () => {
    dispatch({ type: 'ADD_CERTIFICATION', payload: newCertification });
    setNewCertification('');
  };

  return (
    <div>
      <h2>Education Details</h2>
      <p>10th: {education.tenth.instituteName} - CGPA: {education.tenth.cgpa}</p>
      <p>Higher Secondary: {education.higherSecondary.instituteName} - CGPA: {education.higherSecondary.cgpa}</p>
      <p>Graduation: {education.graduation.instituteName} - CGPA: {education.graduation.cgpa}</p>
      <h2>Certification Details</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
      {showTextField && (
        <div>
          <input
            type="text"
            style={{ width: '50%' }}
            value={newCertification}
            onChange={e => setNewCertification(e.target.value)}
          />
          <button onClick={handleAddCertification}>Add</button>
        </div>
      )}
      {!showTextField && (
        <button onClick={() => setShowTextField(true)}>Add New</button>
      )}
    </div>
  );
}

export default EducationDetails;
