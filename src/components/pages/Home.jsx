import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import * as Yup from "yup";

import AppFormField from "../AppFormField";
import AppForm from "../AppForm";
import AppFormButton from "../AppFormButton";
import useStyles from "../styles/home";
import Posts from "../Posts";

const validationSchema = Yup.object().shape({
  text: Yup.string().label("Post"),
});

const Home = () => {
  const posts = [
    {
      id: "5f5c9d142de0ee1e14bcca3e",
      text: "Doggo the lazy quick brown fox jumped over",
      name: "Roseller",
      avatar:
        "//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445?s=200&r=pg&d=mm",
      likes: [],
      comments: [],
      date: "2020-09-12T10:04:04.935Z",
    },
    {
      id: "5f5c9d142de0ee1e14bcca3w",
      text: "Doydoy",
      name: "Teodorics",
      avatar:
        "//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445?s=200&r=pg&d=mm",
      likes: [],
      comments: [],
      date: "2020-08-12T10:04:04.935Z",
    },
  ];

  const classes = useStyles();
  const handleSubmit = ({ text }) => {
    console.log(text);
  };

  return (
    <>
      <div className={classes.header}>
        <Typography variant="h5">Home</Typography>
      </div>
      <Divider />
      <div className={classes.post}>
        <div className={classes.avatar}>
          <Avatar
            alt="Remy Sharp"
            src="//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445"
          />
        </div>
        <AppForm
          initialValues={{ text: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <div className={classes.postInput}>
            <AppFormField label="Post something!" name="text" multiline />
            <AppFormButton
              style={classes.postButton}
              size="medium"
              name="text"
              value="Post"
              color="primary"
            />
          </div>
        </AppForm>
      </div>
      <Posts posts={posts} />
    </>
  );
};

export default Home;
