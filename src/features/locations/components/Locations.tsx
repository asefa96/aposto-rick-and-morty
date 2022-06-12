import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { fetchLocations } from "../slices/locationsSlices";
import LocationCard from "../../../components/Cards/LocationCard/LocationCard";
import {
  Box,
  Fade,
  Grid,
  Grow,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import CardSkelton from "../../../components/Skelton/CardSkelton";
import { useAppCtx } from "../../../context/AppContext/hooks";
import { ActionTypes } from "../../../context/AppContext/types";
import EmptyGridCard from "../../../components/Cards/EmptyGridCard";
import { useNavigate, useParams } from "react-router-dom";
import {useLocations} from "../../../hooks/useLocations";

interface LocationsProp {
  pageCount: number;
}

export default (props: LocationsProp) => {
  const { page, locations, loading, onPagination } =
    useLocations();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {locations?.map((location) => (
            <Grow in={loading == "idle"} {...(loading ? { timeout: 800 } : {})}>
              <Grid item xs={12} sm={6} md={6} key={location.id}>
                {loading == "idle" ? (
                  <LocationCard
                    name={location.name}
                    id={location.id}
                    type={location.type}
                    dimension={location.dimension}
                    residents={location.residents}
                    url={location.url}
                    created={location.created}
                  />
                ) : (
                  <CardSkelton />
                )}
              </Grid>
            </Grow>
          ))}
          {locations?.length == 1 ||
          locations?.length == 2 ||
          locations?.length == 3 ||
          locations?.length == 4
            ? Array.from({ length: 4 - locations?.length }, (_, i) => (
                <Grid item xs={12} sm={6} md={6}>
                  <EmptyGridCard />
                </Grid>
              ))
            : ""}
        </Grid>
      </Box>
      <Stack mt={2}>
        <Pagination
          count={Math.ceil(props.pageCount / 4)}
          page={page}
          onChange={onPagination}
          variant="outlined"
        />
      </Stack>
    </>
  );
};
