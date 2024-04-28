const ip = "http://154.237.212.17:5109/";
export const server = {
  register: `${ip}api/Account/register`,
  login: `${ip}api/Account/login`,
  getAllUsers: `${ip}api/Account/GetAllUsers`,
  GetByUserId: `${ip}api/Account/GetByuserId?userId=`,
  technicianUsers: `${ip}api/Account/technicianUsers`,
  updateRole: `${ip}api/Account/updaterole`,
};
