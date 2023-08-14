
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Student {
  id: number;
  name: string;

}

interface StudentState {
  students: Student[];
}

const initialState: StudentState = {
  students: [],
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action: PayloadAction<Student>) => {
      const updatedStudent = action.payload;
      const index = state.students.findIndex(student => student.id === updatedStudent.id);
      if (index !== -1) {
        state.students[index] = updatedStudent;
      }
    },
    deleteStudent: (state, action: PayloadAction<number>) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;

export default studentSlice.reducer;
