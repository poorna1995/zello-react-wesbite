import Seo from "components/Seo";
import { Box } from "@mui/system";
import NoAuthAppHeader from "components/NoAuthAppHeader";

const HomeLayout = ({ title, children }) => {
  return (
    <Box style={{ background: "#010912" }}>
      <NoAuthAppHeader isAdmin />
      <Seo title={title} />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: "1", p: "3", width: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default HomeLayout;
