import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../store/studentSlice';
import { TextField, Button, Container, Typography } from '@mui/material';

const StudentForm: React.FC = () => {
  const dispatch = useDispatch();
  const [studentName, setStudentName] = useState<string>('');

  const handleAddStudent = () => {
    if (studentName.trim() !== '') {
      dispatch(addStudent({ id: Date.now(), name: studentName }));
      setStudentName('');
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 4,
        padding: 3,
        borderRadius: 8,
        backgroundColor: '#f5f5f5', // Thay đổi màu nền ở đây
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Hiệu ứng bóng đổ
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add Student
      </Typography>
      <TextField
        label="Student Name"
        value={studentName}
        onChange={e => setStudentName(e.target.value)}
        variant="outlined"
        sx={{ width: '100%', marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleAddStudent}>
        Add Student
      </Button>
    </Container>
  );
};

export default StudentForm;
