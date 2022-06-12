import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppContextProvider from "../context/AppContext/AppProvider";
import AppBar from "./AppBar";
import AppContent from "./AppContent";


export default () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppContextProvider>
        <AppBar />
        <AppContent />
      </AppContextProvider>
    </Box>
  );
};
