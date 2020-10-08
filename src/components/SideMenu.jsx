import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";

const SideMenu = ({ userId }) => {
  return (
    <MenuList>
      <MenuItem component={Link} to="/home">
        <ListItemIcon>
          <HomeIcon fontSize="large" />
        </ListItemIcon>
        <Typography variant="inherit">Home</Typography>
      </MenuItem>
      <MenuItem component={Link} to={`/profile/${userId}`}>
        <ListItemIcon>
          <PersonIcon fontSize="large" />
        </ListItemIcon>
        <Typography noWrap variant="inherit">
          Profile
        </Typography>
      </MenuItem>
    </MenuList>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
});

export default connect(mapStateToProps)(SideMenu);
