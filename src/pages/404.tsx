import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CustomLink from "../components/CustomLink";

export default () => {
  return (
    <>
      <Typography variant="h2" color="blue">
        Page 404 not Found
      </Typography>
      <CustomLink
        linkVariant={"h4"}
        linkText={"Click to go Locations"}
        linkLocation="/locations/1"
      />
    </>
  );
};
