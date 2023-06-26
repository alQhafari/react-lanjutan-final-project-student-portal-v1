import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const Student = () => {
  // TODO: answer here
  const [students, setStudent] = useState(null);
  const [filteredStudents, setFilteredStudent] = useState(null);

  const fetchStudent = () => {
    fetch(`http://localhost:3001/student`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
        setFilteredStudent(data);
      })
      .catch(() => console.log("ERROR"));
  };

  const filterStudent = (faculty) => {
    if (faculty === "All") {
      setFilteredStudent(students);
    } else {
      setFilteredStudent(
        students.filter((student) => student.faculty === faculty)
      );
    }
  };

  useEffect(() => {
    fetchStudent();
    filterStudent("All");
  }, []);

  const handleDeleteButton = async (id) => {
    await fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => fetchStudent())
      .catch((error) => {
        console.log("Delete error", error);
      });
  };
  return (
    <>
      <NavBar />
      <div className="w-full px-32 mt-16 flex justify-between">
        <h2 className="font-bold text-3xl">All Student</h2>

        <Select
          id="countries"
          onChange={(e) => filterStudent(e.target.value)}
          data-testid="filter"
          color={""}
          width={"fit"}
          // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option defaultValue={true} value="All">
            All
          </option>
          <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
          <option value="Fakultas Ilmu Sosial dan Politik">
            Fakultas Ilmu Sosial dan Politik
          </option>
          <option value="Fakultas Teknik">Fakultas Teknik</option>
          <option value="Fakultas Teknologi Informasi dan Sains">
            Fakultas Teknologi Informasi dan Sains
          </option>
        </Select>
      </div>
      <div className="w-full mt-16 px-32">
        {students ? (
          <TableContainer>
            <Table variant="simple" id="table-student">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Full Name</Th>
                  <Th>Faculty</Th>
                  <Th>Program Study</Th>
                  <Th>Option</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredStudents?.map((student, index) => (
                  <Tr className="student-data-row" key={index}>
                    <Td>{student.id}</Td>
                    <Td>
                      <Link to={`/student/${student.id}`}>
                        {student.fullname}
                      </Link>
                    </Td>
                    <Td>{student.faculty}</Td>
                    <Td>{student.programStudy}</Td>
                    <Td>
                      <button
                        onClick={() => handleDeleteButton(student.id)}
                        data-testid={`delete-${student.id}`}
                        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                      >
                        Button
                      </button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <p>Loading ...</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Student;
