import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import { LocationResults } from "../../../features/locations/types";
import { Avatar, AvatarGroup, Button, Grid, Stack } from "@mui/material";
import { orange } from "@mui/material/colors";
import { characterHelper } from "../../../helpers/getCharacterInfoUrl";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { setResidentUrls } from "../../../features/residents/slices/residentsSlices";
import { useAppCtx } from "../../../context/AppContext/hooks";
import { ActionTypes } from "../../../context/AppContext/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const planetImg = require("../../../assets/images/planet.jpg");
const dimensionImg = require("../../../assets/images/dimension.png");
const clusterImg = require("../../../assets/images/cluster.jpg");
const spaceStationImg = require("../../../assets/images/spaceStation.jpg");

const Header = (props: any) => (
  <Stack direction="row" spacing={2}>
    <Typography variant="h3" component="div" gutterBottom>
      <Link to={"/locations/" + props.locationId}>
        <IconButton color="warning" size="large" aria-label="back">
          <ArrowBackIcon />
        </IconButton>
      </Link>
    </Typography>
    <Typography variant="h3" color="white" component="div" gutterBottom>
      Residents in
    </Typography>
    <Typography variant="h3" color="orange" component="div" gutterBottom>
      {props.locationName}
    </Typography>
    <Typography variant="h3" color="white" component="div" gutterBottom>
      ( {props.residentCount})
    </Typography>
  </Stack>
);

export default (props: LocationResults) => {
  const appDispatch = useAppDispatch();
  const { dispatch } = useAppCtx();
  const { id } = useParams();

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
      <Grid container>
        <Grid item md={4}>
          <CardMedia
            component="img"
            image={
              props.type == "Planet"
                ? planetImg
                : props.type == "Cluster"
                ? clusterImg
                : props.type == "Space station"
                ? spaceStationImg
                : dimensionImg
            }
            alt="Location Card"
            sx={{
              height: "100%",
            }}
          />
        </Grid>
        <Grid item md={8}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", textAlign: "start" }}>
              <Typography noWrap mb={1} component="div" variant="h4">
                {props.name}
              </Typography>
              <Typography noWrap mb={2} variant="h5" component="div">
                <span> </span> {props.type}
              </Typography>
              <Typography noWrap mb={1} variant="h6" component="div">
                Dimension: {props.dimension}
              </Typography>
              <Typography variant="h6" component="div">
                Residents: {props.residents.length}
              </Typography>
              <Stack direction="row" mt={1} spacing={2}>
                <AvatarGroup total={props.residents.length}>
                  {props?.residents.slice(0, 3).map((character) => {
                    return <Avatar src={characterHelper.getImage(character)} />;
                  })}
                </AvatarGroup>
                {props.residents.length > 3 ? "..." : ""}
              </Stack>
            </CardContent>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "end" }}>
            {props.residents.length != 0 ? (
              <Link to={`/locations/${props.id}/residents`}>
                <Button
                  onClick={() => {
                    appDispatch(setResidentUrls(props.residents));
                    dispatch({
                      type: ActionTypes.SetHeader,
                      payload: {
                        gridHeader: (
                          <Header
                            locationId={id}
                            locationName={props.name}
                            residentCount={props.residents.length}
                          />
                        ),
                      },
                    });
                  }}
                  sx={{ color: orange[400] }}
                  endIcon={<PlayArrowIcon />}
                >
                  Get Residents
                </Button>
              </Link>
            ) : (
              <Typography mb={1} component="div" variant="subtitle1">
                No Resident
                <IconButton aria-label="play/pause">
                  <CloseIcon sx={{ color: "Red", height: 28, width: 28 }} />
                </IconButton>
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
