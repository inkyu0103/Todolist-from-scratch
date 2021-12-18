import { Route } from "react-router";
import { Redirect } from "react-router";
import { useAuth } from "./hooks/useAuth";

export const PrivateRoute = ({ component: ComponentName, ...rest }) => {
  const { userId } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        userId ? <ComponentName {...props} /> : <h1>없음</h1>
      }
    />
  );
};

export const PublicRoute = ({
  component: ComponentName,
  restricted = false,
  ...rest
}) => {
  const { userId } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        userId && restricted ? (
          <Redirect to={`/${userId}`} />
        ) : (
          <ComponentName {...props} />
        )
      }
    />
  );
};
