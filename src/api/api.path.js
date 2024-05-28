//const baseUrl = "http://localhost:8000/api";
const baseUrl  = "https://final-prpject2024.onrender.com/api";
export default class ApiPath {

  // ---- auth ----
  static  login = `${baseUrl}/user/login`
  static  register = `${baseUrl}/user/register`

  // ---- student ----
  static  addStudent = `${baseUrl}/student/insert`
  static  updateStudent = `${baseUrl}/student/update/`
  static  getOneStudent = `${baseUrl}/student/getOne/`
  static  getAllStudent = `${baseUrl}/student/selectall`
  static  deleteStudent = `${baseUrl}/student/delete/`

  // ---- teacher ----
  static  getAllTeacher = `${baseUrl}/teacher/selectall`

  // ---- year ----
  static  getAllYear = `${baseUrl}/year/selectall`

  // --- major ----
  static  getAllMajor = `${baseUrl}/major/selectall`

  // ---- part ----
  static  getAllPart = `${baseUrl}/part/selectall`

  // ---- subject ----
  static  getAllSubject = `${baseUrl}/subject/selectall`

  // ---- class ----
  static  getAllClass = `${baseUrl}/class/selectall`


}