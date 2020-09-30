import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  header: {
    padding: "5px 0px 5px 16px",
  },
  post: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    padding: "0px 16px 0px 16px",
  },
  avatar: {
    display: "flex",
    // alignItems: "center",
    paddingRight: "10px",
    // paddingTop: "20px",
  },
  postInput: {
    width: "100%",
  },
  postButton: {
    float: "right",
    margin: "10px",
  },
});
