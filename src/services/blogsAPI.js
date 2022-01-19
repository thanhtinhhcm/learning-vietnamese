import axiosClient from "./axiosClient";

const BlogAPI = {
  getAll: () => {
    // đăng ký tài khoan mật khẩu dùng phương thức post gửi API lên backend
    // console.log(values)
    // console.log(axiosClient.post("/users/login", values))
     return axiosClient.get("/blogs");
  },
  createBlogs: (values) => {
    // đăng ký tài khoan mật khẩu dùng phương thức post gửi API lên backend
    // console.log(values)
    // console.log(axiosClient.post("/users/login", values))
     return axiosClient.post("/blogs/create",values);
  },
  updateBlogs: (values) => {
    // đăng ký tài khoan mật khẩu dùng phương thức post gửi API lên backend
    // console.log(values)
    // console.log(axiosClient.post("/users/login", values))
     return axiosClient.put(`/blogs/update/${values.blog_id}`,values);
  },
  deleteBlogs: (values) => {
    // đăng ký tài khoan mật khẩu dùng phương thức post gửi API lên backend
    // console.log(values)
    // console.log(axiosClient.post("/users/login", values))
     return axiosClient.delete(`/blogs/delete/${values}`);
  },
  GetBlog: (values) => {
     return axiosClient.get(`/blogs/${values}`);
  },
  
  uploadImage: (values) => {
    return axiosClient.post(`/blogs/upload`,values);
  }



//   profile: () => {
//     // đăng ký tài khoan mật khẩu dùng phương thức post gửi API lên backend
//     // console.log(values)
//     // console.log(axiosClient.post("/users/login", values))
//     return axiosClient.get("/users/profile");
//   },

//   register: (values) => {
//     return axiosClient.post("/users/register", values);
//   },
};

export default BlogAPI;
