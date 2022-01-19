import axiosClient from "./axiosClient";

const authAPI = {
  login: (values) => {
    // đăng ký tài khoan mật khẩu dùng phương thức post gửi API lên backend
    // console.log(values)
    // console.log(axiosClient.post("/users/login", values))
     return axiosClient.post("/users/login", values);
  },

  profile: () => {
    // đăng ký tài khoan mật khẩu dùng phương thức post gửi API lên backend
    // console.log(values)
    // console.log(axiosClient.post("/users/login", values))
    return axiosClient.get("/users/profile");
  },

  register: (values) => {
    return axiosClient.post("/users/register", values);
  },
};

export default authAPI;
