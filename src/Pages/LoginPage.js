import { UnloggedLayout } from "../Layout/UnloggedLayout";
import { Login } from "../component/Login";

export const LoginPage = () => {
  return (
    <UnloggedLayout title="Login">
      <Login />
    </UnloggedLayout>
  );
};
