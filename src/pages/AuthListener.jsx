import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getIsUserLoggedIn } from "../redux/auth/selectors";

export default () => {
  const isUserLoggedIn = useSelector(getIsUserLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) navigate("/main");
  }, [isUserLoggedIn]);

  return <></>;
};
