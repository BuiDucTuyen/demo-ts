
import React from "react";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../store/studentSlice";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

interface StudentItemProps {
  student: {
    id: number;
    name: string;
   
  };
}

const StudentItem: React.FC<StudentItemProps> = ({ student }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteStudent(student.id));
  };

  return (
    <ListItem>
      <ListItemText primary={student.name} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit">
          <Edit />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default StudentItem;
