import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { fetchLocationsCount } from "../features/locations/slices/locationsSlices";
import Home from "../pages/Home";
import Resident from "../pages/Resident";
import Location  from "../pages/Location";

export default () => {
  const [pages, setPages] = useState<any>(0);
  const dispatch = useAppDispatch();
  // Fetch Location Count from API info for pagination's page count

  useEffect(() => {
    dispatch(fetchLocationsCount()).then((data) => {
      setPages(data?.payload);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/locations/:id"} element={<Location pages={pages} />} />
        <Route path={"/locations/:id/residents"} element={<Resident pages={pages} />} />
      </Routes>
    </>
  );
};
