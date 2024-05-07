const ip = "http://154.238.228.9:5109/";
export const server = {
  // user
  register: `${ip}api/Account/register`,
  login: `${ip}api/Account/login`,
  getAllUsers: `${ip}api/Account/GetAllUsers`,
  GetByUserId: `${ip}api/Account/GetByuserId?userId=`,
  DeleteUser: `${ip}api/Account`,
  //   "userId": number

  technicianUsers: `${ip}api/Account/technicianUsers`,
  updateRole: `${ip}api/Account/updaterole`,
  CreateDevice: `${ip}api/Elevator/CreateDevice`,
  // "name": "string",
  // "secretCode": "string",
  // "floors": number
  GetAllCompany: `${ip}api/Company/GetAll`,
  // "id": number
  // "name": "string",
  // "location": "string",
  // "address": "string",
  // "logo": "string",
  // "link": "string",
  // "email": "string",
  // "phone": "string",
  // "whatsApp": "string"
  Posts: `${ip}api/Post`,
  DeletePost: `${ip}api/Post/`,
};
