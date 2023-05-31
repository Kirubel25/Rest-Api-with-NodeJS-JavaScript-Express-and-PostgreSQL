const pool = require("../../db");
const query = require("./queries");

//  function to get all students data
exports.getStudents = (req, res) => {
  pool.query(query.getStudents, (error, result) => {
    if (error) {
      throw error;
    } else {
      res.status(200).json(result.rows);
    }
  });
};

// function to get a single student
exports.getStudentById = (req, res) => {
  let id = parseInt(req.params.id);
  pool.query(query.getStudentById, [id], (error, result) => {
    if (error) {
      throw error;
    } else {
      res.status(200).json(result.rows);
    }
  });
};

// function to create studwent

exports.createStudent = async (req, res) => {
  // const client = pool.client();
  // client.begin();
  try {
    let { name, email, age, dob } = req.body;

    const student = await pool.query({
      name: "findStudent",
      text: query.checkEmail,
      values: [email],
    });

    // Check if email is not taken
    if (student.rows.length) return res.send("Email taken");

    // add student to db
    const { rows } = await pool.query({
      name: "createStudent",
      text: query.createStudent,
      values: [name, email, age, dob],
    });

    // Send response
    res.status(201).json({
      message: "Student created successfully",
      data: { student: rows[0] },
    });
  } catch (error) {
    // client.rollback();
    res.send(error);
  }
};

// delete student
exports.deleteStudents = async (req, res) => {
  let id = parseInt(req.params.id);

  // check for student
  const student = await pool.query({
    name: "checkStudent",
    text: query.checkStudent,
    values: [id],
  });

  if (!student.rows.length) return res.send("Student does not exist");

  // delete student from the database
  const { rows } = await pool.query({
    name: "deleteStudent",
    text: query.deleteStudent,
    values: [id],
  });

  res.status(202).json({ message: "Student Deleted Successffuly" });
};
// update Student
exports.updateStudent = async (req, res) => {
  let id = parseInt(req.params.id);
  let { name } = req.body;
  const student = await pool.query({
    name: "checkStudent",
    text: query.checkStudent,
    values: [id],
  });

  if (!student.rows.length) return res.send("Student does not exist");

  const { rows } = await pool.query({
    name: "updateStudent",
    text: query.updateStudent,
    values: [name, id],
  });
  res
    .status(202)
    .json({ message: "Student Deleted Successffuly", data: rows[0] });
};
