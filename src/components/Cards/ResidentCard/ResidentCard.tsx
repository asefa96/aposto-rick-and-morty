import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { IResident } from "../../../features/residents/types";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FavoriteIcon from "@mui/icons-material/Favorite";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const StatusIcon = (props: any) => {
  return (
    <>
      {props.status == "Alive" ? (
        <FavoriteIcon color="success"/>
      ) : props.status == "Dead" ? (
        <HeartBrokenIcon color="error" />
      ) : (
        <QuestionMarkIcon color="warning" />
      )}
    </>
  );
};

export default (props: IResident) => {
  return (
    <Card
      elevation={10}
      sx={{
        display: "flex",
        border: "0.5px gray solid",
        background: "rgb(60, 62, 68)",
        color: "white",
        minHeight: "21vw",
      }}
    >
      <Grid container columns={{ xs: 12, sm: 12, md: 12 }} >
        <Grid item sm={12} md={4}>
          <CardMedia
            component="img"
            image={props.image}
            alt="Location Card"
            sx={{
              height: "100%",
            }}
          />
        </Grid>
        <Grid item sm={12} md={8}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", textAlign: "start" }}>
              <Typography noWrap mb={1} component="div" variant="h4">
                {props.name}
              </Typography>
              <Typography noWrap mb={2} variant="h5" component="div">
                <span> </span> {props.type}
              </Typography>
              <Typography noWrap mb={1} variant="h6" component="div">
                Status: {props.status}
                <StatusIcon status={props.status} />
              </Typography>
              <Typography noWrap mb={1} variant="h6" component="div">
                Species: {props.species}
              </Typography>
              <Typography noWrap mb={1}variant="h6" component="div">
                Gender: {props.gender}
              </Typography>
              <Typography noWrap mb={2} variant="h6" component="div">
                Origin: {props.origin.name}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
