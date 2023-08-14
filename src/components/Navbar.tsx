import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          paddingY={2}
        >
          <Typography variant="h5">Student Management</Typography>
        </Box>
        <Box textAlign='center' ></Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
