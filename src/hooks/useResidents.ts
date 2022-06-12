import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchResidents } from "../features/residents/slices/residentsSlices";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const useResidents = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((data) => data.resident.status);
  const residents = useAppSelector((data) => data.resident.resident);
  const residentUrls = useAppSelector((data) => data.resident.residentUrls);
  const { id } = useParams();
  const [page, setPage] = React.useState(1);

  const onPagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    //fetch residents via location id and pagination
    dispatch(
      fetchResidents({
        locationId: Number(id),
        pagination: page,
      })
    );
  }, [page]);

  return {
    page,
    loading,
    residents,
    residentUrls,
    onPagination,
  };
};
