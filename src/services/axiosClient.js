import axios from "axios";
import qs from "qs";

const axiosClient = axios.create({
  // baseURL: "https://elearning0706.cybersoft.edu.vn/api",
  baseURL: "http://localhost:4000/api",
  
  // Tự cấu hình cách lấy params mặc định của axios
  // bỏ qua giá trị null và undefined trong params để url call api ko bị lỗi
  paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});

axiosClient.interceptors.request.use(
  (config) => {
    // xử lý trước khi request đc gửi lên server
    // Thêm Authorization vào header
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      const { access_token } = JSON.parse(accessToken);
      // console.log(accessToken)
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    // xử lý khi request bị lỗi
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xử lý nếu kết quả trả về bị lỗi
    if(error.status === 401){
        // Xử lý logout: clear localStorage, đẩy người dùng về trang login
        // localStorage.clear
    }
    if(error.status === 500){
        // Xử lý thông báo cho người dùng server đang bị lỗi

    }
    return Promise.reject(error);
  }
);

export default axiosClient;
