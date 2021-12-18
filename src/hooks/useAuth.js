import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, userId } = useSelector((state) => state.auth);

  return { email, userId };
};
