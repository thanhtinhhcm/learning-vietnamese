import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoursesByCategory, getAllCourses } from '../../actions/courses';

export default function Courses() {
    const dispatch = useDispatch();
    // const {category} = useParams();
    const { course, isLoading, error } = useSelector((state) => state.course);

    useEffect(() => {
        dispatch(getAllCourses());
    }, []);

    if (course) {
        console.log(course);
    }
    return <div><h1>This is test course API</h1></div>;
}
