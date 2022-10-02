import { useContext } from "react";
import { Context } from "../context/Context";

export const useAuth = () => {
  const { authStatus } = useContext(Context);
  return authStatus;
};
