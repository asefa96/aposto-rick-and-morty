import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import Locations from "../features/locations/components/Locations";
import { fetchLocationsCount } from "../features/locations/slices/locationsSlices";
import Residents from "../features/residents/components/Residents";
import Home from "../pages/Home";

export default () => {
  const [pages, setPages] = useState<any>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLocationsCount()).then((data) => {
      setPages(data?.payload);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/locations/:id"} element={<Locations pageCount={pages} />} />
        <Route path={"/locations/:id/residents"} element={<Residents pageCount={pages} />} />
      </Routes>
    </>
  );
};
