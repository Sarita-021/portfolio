import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./blogCard";
import "../CSS/blog.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1200 }); // Initialize AOS animations

const Blog = ({ props }) => {
  return (
    <Container fluid className="blog-section bg-black"> {/* Added bg-black class to the container */}
      <Container>
        <div className='title'>
          <h3>Read What I Write</h3>
          <p>Here are some of my latest blog posts and writeups.</p>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {props.Blogs.map((blog) => (
            <Col key={blog.id} md={4} className="blog-card" data-aos="fade-up">
              <BlogCard
                imgPath={blog.img}
                title={blog.title}
                description={blog.description}
                link={blog.link} // Blog link
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};


export default Blog;