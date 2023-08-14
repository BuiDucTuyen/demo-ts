import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Container, Typography, Paper } from '@mui/material';
import StudentItem from './StudentItem';

const StudentList: React.FC = () => {
  const students = useSelector((state: RootState) => state.student.students);

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 7, // Điều chỉnh giá trị này để điều chỉnh khoảng cách từ trên xuống
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Paper sx={{ padding: 2, width: '100%', maxWidth: 400 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Student List
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {students.map(student => (
            <StudentItem key={student.id} student={student} />
          ))}
        </ul>
      </Paper>
    </Container>
  );
};

export default StudentList;
