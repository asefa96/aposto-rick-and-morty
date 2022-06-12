import { styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useAppCtx } from "../context/AppContext/hooks";
import Routes from "../routes";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(10),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));


export default () => {
  const { gridHeader,dispatch } = useAppCtx();

  return (
    <Main>
      <Box sx={{ textAlign: "start" }}>
        {gridHeader}
      </Box>
      <Box>
        <Routes />
      </Box>
    </Main>
  );
};
