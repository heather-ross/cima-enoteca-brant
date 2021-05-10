import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';

function ProtectedRoute({ component: Component, ...rest }) {

  const { value } = useContext(AuthContext);
  // const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {

        return value.currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to='/sign-in' />
        );
      }}>
    </Route>
  )
};
export default ProtectedRoute;