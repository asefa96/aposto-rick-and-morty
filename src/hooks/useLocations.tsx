import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppCtx } from "../context/AppContext/hooks";
import { ActionTypes } from "../context/AppContext/types";
import { fetchLocations } from "../features/locations/slices/locationsSlices";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Header = (props: any) => (
  <Typography variant="h3" color="white" component="div" gutterBottom>
    {props.header}
  </Typography>
);

export const useLocations = () => {
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const { id } = useParams();
  const { dispatch } = useAppCtx();
  const locations = useAppSelector((post) => post.location.value);
  const loading = useAppSelector((post) => post.location.status);
  const [page, setPage] = React.useState(1);

  const onPagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    //update url each pagination
    navigate(`/locations/${value}`);
  };

  useEffect(() => {
     // set pagination num if the user come with url link
    setPage(Number(id));
    // fetch location via page num
    appDispatch(fetchLocations(Number(id)));
    //set grid page header
    dispatch({
      type: ActionTypes.SetHeader,
      payload: {
        gridHeader: <Header header="Locations" />,
      },
    });
  }, [page]);

  return {
    page,
    locations,
    loading,
    onPagination,
    id,
    dispatch,
  };
};
