import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';

function ProtectedRoute({ component: Component, ...rest }) {

  const { values } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {

        return values.currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to='/sign-in' />
        );
      }}>
    </Route>
  )
};
export default ProtectedRoute;