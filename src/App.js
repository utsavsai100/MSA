import Header from "./components/Header/Header";
import "./App.css";
import * as React from "react";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@material-ui/icons/Search";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import WhatshotIcon from "@material-ui/icons/Whatshot";

import { Route, Router, useNavigate } from "react-router-dom";

import Trending from "./components/Pages/Trending/Trending";
import Movies from "./components/Pages/Movies/Movies";
import Series from "./components/Pages/Series/Series";
import Search from "./components/Pages/Search/Search";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
  },
});
function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (value === 0) navigate.push("/");
  });

  //const navigate = useNavigate();
  // const confirm = (e) => {
  //   navigate.push('/')
  // }
  return (
<>
      
      
          <Router>
            <Route path="/" component={Trending} exact />
            <Route path="/ Movies" component={Movies} />
            <Route path="/Series" component={Series} />
            <Route path="/Search" component={Search} />
          </Router>

        {/* <Header /> */}
      
      {/* <div className="bx">
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              style={{ color: "black" }}
              label="Trending"
              icon={<WhatshotIcon />}
            />
            <BottomNavigationAction
              style={{ color: "black" }}
              label="Movies"
              icon={<MovieIcon />}
            />
            <BottomNavigationAction
              style={{ color: "black" }}
              label="TV Series"
              icon={<TvIcon />}
            />
            <BottomNavigationAction
              style={{ color: "black" }}
              label="Search"
              icon={<SearchIcon />}
            />
          </BottomNavigation>
        </Box>
      </div> */}
</>
  );
}

export default App;
