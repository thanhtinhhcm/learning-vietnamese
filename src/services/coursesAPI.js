import axiosClient from './axiosClient'


const coursesAPI = {
    getCourses: () => {
        return axiosClient.get("/course");
    },

    createCourse: (values) => {
        return axiosClient.post("/course/create",values);
    },

    deleteCourse: (values) => {
        return axiosClient.delete(`/course/delete/${values}`);
    },

    updateCourse: (value) => {
        return axiosClient.put(`/course/update/${value.course_id}`,value);
    },

    uploadImage: (values) => {
        return axiosClient.post(`/course/upload`,values);
    },

    getCoursesByCategory: (category) => {
        return axiosClient.get(`/course/${category}`)
    },
    getCourseList: () => {
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
    },
}

export default coursesAPI;

// Cách sử dụng
// import coursesAPI from 'src/services/coursesAPI';
// const {data} = await coursesAPI.getCourses()