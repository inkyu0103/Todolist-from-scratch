import { Route, Redirect } from "react-router";
import { useAuth } from "./hooks/useAuth";

export const PrivateRoute = ({ component: ComponentName, ...rest }: any) => {
  const { userId } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        userId ? <ComponentName {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export const PublicRoute = ({
  component: ComponentName,
  restricted = false,
  ...rest
}: any) => {
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
