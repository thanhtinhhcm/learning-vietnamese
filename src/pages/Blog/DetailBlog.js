import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetOneBlog } from "../../actions/blog";
import { FaEye, FaRegUserCircle } from "react-icons/fa";
import "./blogs.css";
// import Image from "../../Assets/images/backend.jpg";
const DetailBlogPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { blog, isLoading, error } = useSelector((state) => state.listblogs);

  const history = useHistory();

  useEffect(() => {
    dispatch(GetOneBlog(id));
  }, [id]);

  function createMarkup(content) {
    return { __html: content };
  }

  return (
    <div className="magrin-top">
      <div
        className="bg-cover"
        style={{
          backgroundImage: "url(" + Image + ")",
        }}
      >
        <div className="blog-detail-info">
          <h3>{blog?.blog_title}</h3>
          <div className="user-detail">
            <span className="author">
              <span className="icon">
                <FaRegUserCircle />
              </span>
              {blog?.author?.name}
            </span>
            <span className="views">
              <span className="icon">
                <FaEye />
              </span>
              {blog.views}
            </span>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <article className="artrating">
              <div className="blog-content-detail">
                <p>{blog.blog_description}</p>
                {blog.blog_video && (
                  <div className="youtube">
                    <iframe
                      width="560"
                      height="315"
                      src={
                        blog?.blog_video
                          ? blog.blog_video
                          : "https://www.youtube.com/embed/wLmERFUxdyA"
                      }
                      title="Be Learning Vietnamese"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                )}

                <div className="img-content-blogs text-center" dangerouslySetInnerHTML={createMarkup(blog.blog_content)}>
                  {/* {blog.blog_content} */}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailBlogPage;
