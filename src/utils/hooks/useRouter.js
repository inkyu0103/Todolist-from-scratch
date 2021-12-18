import { useSelector } from "react-redux";

export const useRouter = () => {
  const router = useSelector((state) => state.router);
  return router;
};
