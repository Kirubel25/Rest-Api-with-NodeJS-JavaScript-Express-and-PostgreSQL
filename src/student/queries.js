const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const checkEmail = "SELECT s FROM students s WHERE email = $1";
const createStudent =
  "INSERT INTO students(name,email,age,dob) VALUES ($1,$2,$3,$4) RETURNING *";
const checkStudent = "SELECT * FROM students WHERE id=$1";
const deleteStudent = "DELETE FROM students where id=$1";
const updateStudent = "UPDATE students SET name = $1 WHERE id=$2 RETURNING *";

module.exports = {
  getStudents,
  getStudentById,
  checkEmail,
  createStudent,
  deleteStudent,
  checkStudent,
  updateStudent,
};
