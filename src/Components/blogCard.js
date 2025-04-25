
import React from "react";
import { Card } from "react-bootstrap";
import { ExternalLink } from "lucide-react";
import "../CSS/blog.css";

const BlogCard = ({ imgPath, title, description, link }) => {
  return (
    <Card className="blogcard-dark shadow-lg border-0 rounded-4 p-3 bg-dark text-light">
      <div className="blog-image-container rounded-3 overflow-hidden mb-3">
        <Card.Img variant="top" src={imgPath} alt="blog-img" className="w-100" />
      </div>
      <Card.Body>
        <Card.Title className="fw-semibold fs-5">{title}</Card.Title>
        <Card.Text className="fs-6 text-muted">{description}</Card.Text>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline-light mt-2 d-inline-flex align-items-center gap-2"
        >
          Read More <ExternalLink size={16} />
        </a>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
