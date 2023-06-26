import React from "react";
import Image from "../assets/home-image.jpg";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(51, 119, 153, 0.9), rgba(44, 183, 110, 0.85)), url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div
        style={styles}
        className="w-full h-screen flex flex-col justify-center items-center"
      >
        <div className="min-w-1/3 bg-white/30 rounded-md p-8 flex flex-col gap-4 justify-center items-center">
          <h1 className="font-bold text-3xl">Student Portal</h1>
          <Link to={`/student`}>
            <Button data-testid="student-btn">All Student</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
