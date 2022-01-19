import axiosClient from "./axiosClient";

const signupAPI = {
  signup: (values) => {
    return axiosClient.post("/users/register", values);
  },

  // register: (values) => {
  //   return axiosClient.post("/QuanLyNguoiDung/DangKy", values);
  // },
};

export default signupAPI;
