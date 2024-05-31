const baseUrl = "http://localhost:8000/api";
//const baseUrl  = "https://final-prpject2024.onrender.com/api";
export default class ApiPath {


  // ---- auth ----
  static register = `${baseUrl}/user/register`;
  static login = `${baseUrl}/user/login`;
  static forgotPassword = `${baseUrl}/user/forgot`;
  static changePassword = `${baseUrl}/user/changepassword`;
  static updateUser = `${baseUrl}/user/update`;
  static updateProfileImage = `${baseUrl}/user/updateprofileimage`;
  static refreshToken = `${baseUrl}/user/refresh`;
  static deleteUser = `${baseUrl}/user/delete`;
  static userInfo = `${baseUrl}/user/info`;
  static getAllUser = `${baseUrl}/user/selectall`;

  // ---- student ----
  static getAllStudent = `${baseUrl}/student/selectall`;
  static getOneStudent = `${baseUrl}/student/selectone/`;
  static getByUserIdStudent = `${baseUrl}/student/selectby/`;
  static addStudent = `${baseUrl}/student/insert`;
  static updateStudent = `${baseUrl}/student/update/`;
  static deleteStudent = `${baseUrl}/student/delete/`;

  // ---- teacher ----
  static getAllTeacher = `${baseUrl}/teacher/selectall`;
  static getOneTeacher = `${baseUrl}/teacher/selectone/`;
  static getByUserIdTeacher = `${baseUrl}/teacher/selectby/`;
  static addTeacher = `${baseUrl}/teacher/insert`;
  static updateTeacher = `${baseUrl}/teacher/update/`;
  static deleteTeacher = `${baseUrl}/teacher/delete/`;

  // ---- part ----
  static getAllPart = `${baseUrl}/part/selectall`;
  static getOnePart = `${baseUrl}/part/selectone/`;
  static addPart = `${baseUrl}/part/insert`;
  static updatePart = `${baseUrl}/part/update/`;
  static deletePart = `${baseUrl}/part/delete/`;

  // ---- major ----
  static getAllMajor = `${baseUrl}/major/selectall`;
  static getOneMajor = `${baseUrl}/major/selectone/`;
  static addMajor = `${baseUrl}/major/insert`;
  static updateMajor = `${baseUrl}/major/update/`;
  static deleteMajor = `${baseUrl}/major/delete/`;

  // ---- year ----
  static getAllYear = `${baseUrl}/year/selectall`;
  static getOneYear = `${baseUrl}/year/selectone/`;
  static addYear = `${baseUrl}/year/insert`;
  static updateYear = `${baseUrl}/year/update/`;
  static deleteYear = `${baseUrl}/year/delete/`;

  // ---- checklist ----
  static getAllChecklist = `${baseUrl}/checklist/selectall`;
  static getOneChecklist = `${baseUrl}/checklist/selectone/`;
  static addChecklist = `${baseUrl}/checklist/insert`;
  static updateChecklist = `${baseUrl}/checklist/update/`;
  static deleteChecklist = `${baseUrl}/checklist/delete/`;

  // ---- subject ----
  static getAllSubject = `${baseUrl}/subject/selectall`;
  static getOneSubject = `${baseUrl}/subject/selectone/`;
  static addSubject = `${baseUrl}/subject/insert`;
  static updateSubject = `${baseUrl}/subject/update/`;
  static deleteSubject = `${baseUrl}/subject/delete/`;

  // ---- class ----
  static getAllClass = `${baseUrl}/class/selectall`;
  static getOneClass = `${baseUrl}/class/selectone/`;
  static addClass = `${baseUrl}/class/insert`;
  static updateClass = `${baseUrl}/class/update/`;
  static deleteClass = `${baseUrl}/class/delete/`;

  // ---- class detail ----
  static getAllClassDetail = `${baseUrl}/classdetail/selectall`;
  static getOneClassDetail = `${baseUrl}/classdetail/selectone/`;
  static getByClassIdClassDetail = `${baseUrl}/classdetail/selectbyclassid/`;
  static addClassDetail = `${baseUrl}/classdetail/insert`;
  static updateClassDetail = `${baseUrl}/classdetail/update/`;
  static deleteClassDetail = `${baseUrl}/classdetail/delete/`;

  // ---- report ----
  // static getAllReport = `${baseUrl}/report/selectall`;
  // static getOneReport = `${baseUrl}/report/selectone/`;
  // static addReport = `${baseUrl}/report/insert`;
 

}