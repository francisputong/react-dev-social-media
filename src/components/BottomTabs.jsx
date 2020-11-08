import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import useStyles from "../components/styles/bottomTab";

const BottomTabs = ({ userId }) => {
  const history = useHistory();
  const classes = useStyles();
  const [page, setPage] = useState("/home");

  useEffect(() => {
    return history.push(page);
  }, [page]);

  if (!userId) return <div></div>;

  return (
    <BottomNavigation
      className={classes.tabs}
      value={page}
      onChange={(event, newValue) => {
        console.log(event);
        setPage(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" value="/home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Profile"
        value={`/profile/${userId}`}
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user?.id,
});

export default connect(mapStateToProps)(BottomTabs);
