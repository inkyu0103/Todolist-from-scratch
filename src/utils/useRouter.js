import { useNavigate } from "react-router-dom";

export const useRouter = () => {
  const router = useNavigate();
  const setRoute = (path) => router(path);
  return setRoute;
};
