// TODO: answer here
import React, { useState } from "react";
import NavBar from "../components/Navbar";
import { iseNavigate, useNavigate } from "react-router-dom";
import { Center, Button, Input } from "@chakra-ui/react";
import Footer from "../components/Footer";

const AddStudent = () => {
  const navigate = useNavigate();
  // TODO: answer here
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("Male");
  const [faculty, setFaculty] = useState("");
  const [prody, setPrody] = useState("Ekonomi");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let updatedFaculty = "";

    if (prody == "Ekonomi" || prody == "Manajemen" || prody == "Akuntansi") {
      updatedFaculty = "Fakultas Ekonomi";
    } else if (
      prody == "Administrasi Publik" ||
      prody == "Administrasi Bisnis" ||
      prody == "Hubungan Internasional"
    ) {
      updatedFaculty = "Fakultas Ilmu Sosial dan Politik";
    } else if (prody == "Teknik Sipil" || prody == "Arsitektur") {
      updatedFaculty = "Fakultas Teknik";
    } else if (
      prody == "Matematika" ||
      prody == "Fisika" ||
      prody == "Informatika"
    ) {
      updatedFaculty = "Fakultas Teknologi Informasi dan Sains";
    }

    const data = {
      fullname: name,
      profilePicture: profilePicture,
      address: address,
      phoneNumber: phoneNumber,
      birthDate: date,
      gender: gender,
      faculty: updatedFaculty,
      programStudy: prody,
    };

    fetch(`http://localhost:3001/student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => navigate("/student"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <NavBar />

      <Center>
        <form onSubmit={handleSubmit} className="w-1/2 mt-32" id="form-student">
          <div className="flex w-full  mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="input-name"
              >
                Fullname
              </label>
              <Input
                data-testid="name"
                // className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="input-name"
                name="input-name"
                // type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="profile-picture"
              >
                Profile Picture
              </label>
              <input
                data-testid="profilePicture"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="profile-picture"
                type="text"
                name="profile-picture"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="input-address"
              >
                Address
              </label>
              <input
                data-testid="address"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="input-address"
                type="text"
                name="input-address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="flex mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="input-phone"
              >
                Phone Number
              </label>
              <input
                data-testid="phoneNumber"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="input-phone"
                type="text"
                name="input-phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="input-date"
              >
                Birth Date
              </label>
              <input
                data-testid="date"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="input-date"
                type="date"
                name="input-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="input-gender"
              >
                Gender
              </label>
              <div className="relative">
                <select
                  data-testid="gender"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="input-gender"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="input-prody"
              >
                Program Study
              </label>
              <div className="relative">
                <select
                  data-testid="prody"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="input-prody"
                  value={prody}
                  onChange={(e) => {
                    setPrody(e.target.value);
                  }}
                >
                  <option value="Ekonomi">Ekonomi</option>
                  <option value={"Manajemen"}>Manajemen</option>
                  <option value="Akuntansi">Akuntansi</option>
                  <option value="Administrasi Publik">
                    Administrasi Publik
                  </option>
                  <option value="Administrasi Bisnis">
                    Administrasi Bisnis
                  </option>
                  <option value="Hubungan Internasional">
                    Hubungan Internasional
                  </option>
                  <option value="Teknik Sipil">Teknik Sipil</option>
                  <option value="Arsitektur">Arsitektur</option>
                  <option value="Matematika">Matematika</option>
                  <option value="Fisika">Fisika</option>
                  <option value="Informatika">Informatika</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:mb-0 mt-6">
            <Button
              colorScheme="whatsapp"
              data-testid="add-btn"
              type="submit"
              value="Add student"
              id="add-btn"
              //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add student
            </Button>
          </div>
        </form>
      </Center>

      <Footer />
    </>
  );
};

export default AddStudent;
