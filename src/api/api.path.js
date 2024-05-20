const baseUrl  = "https://final-prpject2024.onrender.com/api";
export default class ApiPath {
  static  login = `${baseUrl}/user/login`
  static  register = `${baseUrl}/user/register`
  static  addStudent = `${baseUrl}/student/insert`
  static  updateStudent = `${baseUrl}/student/update/`
  static  getOneStudent = `${baseUrl}/student/getOne/`
  static  getAllStudent = `${baseUrl}/student/getAll`
  static  deleteStudent = `${baseUrl}/student/delete/`
}