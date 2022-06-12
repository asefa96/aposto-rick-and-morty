import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ILink } from "./types";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "orange",
};

export default (props:ILink) => {
  return (
    <>
      <Link style={linkStyle} to="/locations/1">
        <Typography variant={props.linkVariant}> {props.linkText} </Typography>
      </Link>
    </>
  );
};
