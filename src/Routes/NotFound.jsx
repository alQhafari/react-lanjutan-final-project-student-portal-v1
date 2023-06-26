// TODO: answer here
import { useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  const styles = {
    backgroundImage: `linear-gradient(rgba(51, 119, 153, 0.9), rgba(44, 183, 110, 0.85))`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <>
      <div
        style={styles}
        className="w-full h-screen flex flex-col justify-center items-center gap-4"
      >
        <h1 className="text-3xl font-bold">404 | Not Found</h1>
        <Button
          onClick={handleBackButton}
          data-testid="back"
          className="px-4 py-2 rounded-md bg-white/25"
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default NotFound;
