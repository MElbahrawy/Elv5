const ip = "http://154.238.217.210:5109";
export const server = {
  register: `${ip}api/Account/register`,
  login: `${ip}api/Account/login`,
  getAllUsers: `${ip}api/Account/GetAllUsers`,
  GetByUserId: `${ip}api/Account/GetByuserId?userId=`,
  technicianUsers: `${ip}api/Account/technicianUsers`,
  updateRole: `${ip}api/Account/updaterole`,
  CreateDevice: `${ip}/api/Elevator/CreateDevice`,
  // "name": "string",
  // "secretCode": "string",
  // "floors": number
  GetAllCompany: `${ip}/api/Company/GetAll`,
  // "id": number
  // "name": "string",
  // "location": "string",
  // "address": "string",
  // "logo": "string",
  // "link": "string",
  // "email": "string",
  // "phone": "string",
  // "whatsApp": "string"
};
