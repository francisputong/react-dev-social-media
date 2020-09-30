import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AuthRoute from "./routes/AuthRoutes";
import PublicRoute from "./routes/PublicRoutes";
import { getUser } from "./redux/actions/auth";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = store.dispatch(getUser());
    setIsLoading(true);
    return () => user;
  }, []);

  if (!isLoading) return <div>Loading...</div>;

  return (
    <Router>
      <Provider store={store}>
        <PublicRoute />
        <AuthRoute />
      </Provider>
    </Router>
  );
};

export default App;
