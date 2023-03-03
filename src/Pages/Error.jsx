import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Error = ({ message }) => {
  const navigator = useNavigate();
  useEffect(() => {
    navigator("/");
  }, []);
  return (
    <>
      <h2 className="text-4xl text-center mt-20">{message}</h2>
    </>
  );
};
