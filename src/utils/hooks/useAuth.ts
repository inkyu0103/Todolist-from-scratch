import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const useAuth = () => {
  const { email, userId } = useSelector(
    (state: RootState) => state.authReducer
  );

  return { email, userId };
};
