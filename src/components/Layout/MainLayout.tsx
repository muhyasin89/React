import Header from "./Header";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const MainLayout = ({ children }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Header />
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
        <Footer />
      </Grid>
    </>
  );
};

export default MainLayout;
