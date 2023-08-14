import React from "react";
import { Provider } from "react-redux";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material"; // Import CssBaseline và createTheme
import store from "./store/store";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import Navbar from "./components/Navbar";

const theme = createTheme({
  palette: {
    background: {
      default: "",
    },
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Navbar />
          <StudentForm />
          <StudentList />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
