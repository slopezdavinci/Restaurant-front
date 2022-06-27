import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useLoggedState = () => {
  const [isLogged, setIsLogged] = useState(false);

  const { uid } = useSelector((state) => state.auth);

  const validateLoggedState = () => {
    setIsLogged(!!uid);
  };

  useEffect(() => {
    validateLoggedState();
  });

  return { isLogged };
};
