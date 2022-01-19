import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../actions/blog";
// import "./blogs.css";
// import Image from "../../Assets/images/backend.jpg";
// import { getListTypeBlogs } from "src/actions/typeblog";
import {
  Card,
  CardImg,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

const Blog = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = [];
  const { listblogs, isLoading, error } = useSelector(
    (state) => state.listblogs
  );

  const pageNumbers = [];

  useEffect(() => {
    dispatch(getAllBlogs());
    // dispatch(getListTypeBlogs());
  }, []);

  let totalPosts = 10;
  if (listblogs) {
    console.log(listblogs);
    currentPosts = listblogs?.slice(indexOfFirstPost, indexOfLastPost);
    // console.log(currentPosts)
    totalPosts = listblogs.length;
  }


  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div div className="container  magrin-top">
        <h2>Vietnamese Blog</h2>
        <div className="m-4">
          {isLoading && <div>Loading ... </div>}
        </div>
        <div className="row">
          {listblogs &&
            currentPosts.map((blogs, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-12">
                <Link
                  className="text-decoration-none text-dark"
                  to={"/blog/" + blogs.blog_id}
                >
                  <div className="card-blog my-2">
                    <div>
                      <img
                        src={blogs.blog_imgage ? blogs.blog_imgage : Image}
                        alt=""
                      />
                    </div>
                    <h5 className="my-1 text-decoration-none">
                      {blogs.blog_title?.length > 50
                        ? blogs.blog_title.substring(0, 50) + "..."
                        : blogs.blog_title}
                    </h5>
                    <p className="blog-description text-muted text-decoration-none">
                      {blogs.blog_description?.length > 90
                        ? blogs.blog_description.substring(0, 90) + "..."
                        : blogs.blog_description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        <Pagination aria-label="Page navigation example text-right">
          <PaginationLink first  onClick={() => paginate(1)} />
          <PaginationItem>
            <PaginationLink previous  onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)} />
          </PaginationItem>
          {pageNumbers.map((number) => (
            <PaginationItem key={number} className="page-item">
              <PaginationLink
                onClick={() => paginate(number)}
                // href="!#"
                className="page-link"
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationLink next onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)}  />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last onClick={() => paginate(pageNumbers.length!=0 ? pageNumbers.length: 2)}/>
          </PaginationItem>
        </Pagination>
      </div>
    </>
  );
};

export default Blog;
