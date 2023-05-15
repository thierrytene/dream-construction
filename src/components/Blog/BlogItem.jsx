import React from "react";
import { NavLink } from "react-router-dom";

//import image item blog
import ImageBlog from '../../assets/images/blog/img-1.jpg'

function BlogItem() {
  return (
    <div className="wpo-blog-item">
      <div className="wpo-blog-img">
        <img src={ImageBlog} alt="" />
      </div>
      <div className="wpo-blog-content">
        <a className="date" href="blog-single.html">
          22 September, 2020
        </a>
        <h2>
          <a href="blog-single.html">
            Making this the first true ones the uses a dictionary.
          </a>
        </h2>
        <ul>
          <li>Mabel Fox</li>
          <li>
            <a href="blog-single.html">26 Comments</a>
          </li>
          <li>35 Share</li>
        </ul>
      </div>
    </div>
  );
}

export default BlogItem;
