import { Box, Fade, Grid, Grow, Pagination, Stack } from "@mui/material";
import CardSkelton from "../../../components/Skelton/CardSkelton";
import ResidentCard from "../../../components/Cards/ResidentCard/ResidentCard";
import EmptyGridCard from "../../../components/Cards/EmptyGridCard";
import { useResidents } from "../../../hooks/useResidents";

interface LocationsProp {
  pageCount: number;
}

export default (props: LocationsProp) => {
  const { page, loading, residents, residentUrls, onPagination } = useResidents();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {residents?.map((resident) => (
            <Grow in={loading == "idle"} {...(loading ? { timeout: 800 } : {})}>
              <Grid item xs={12} sm={6} md={6} key={resident.id}>
                {loading == "idle" ? (
                  <ResidentCard
                    name={resident.name}
                    created={resident.created}
                    episode={resident.episode}
                    gender={resident.gender}
                    id={resident.id}
                    image={resident.image}
                    location={resident.location}
                    origin={resident.origin}
                    species={resident.species}
                    status={resident.status}
                    type={resident.type}
                    url={resident.url}
                  />
                ) : (
                  <CardSkelton />
                )}
              </Grid>
            </Grow>
          ))}
          {residents?.length == 1 ||
          residents?.length == 2 ||
          residents?.length == 3 ||
          residents?.length == 4
            ? Array.from({ length: 4 - residents?.length }, (_, i) => (
                <Grid item xs={12} sm={6} md={6}>
                  <EmptyGridCard />
                </Grid>
              ))
            : ""}
        </Grid>
      </Box>
      <Stack mt={2}>
        <Pagination
          count={Math.ceil(residentUrls.length / 4)}
          page={page}
          onChange={onPagination}
          variant="outlined"
        />
      </Stack>
    </>
  );
};
