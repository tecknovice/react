import Form from "./Form";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { readPosts, updatePost } from "../actions/";

const Update = ({ posts, readPosts, updatePost }) => {
  const navigate = useNavigate();
  const params = useParams();

  const [item, setItem] = useState({
    title: "",
    content: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    content: "",
  });

  useEffect(async () => {
    await readPosts();
    const id = Number(params.id);
    const currentItem = posts.find((post) => post.id === id);
    if (currentItem) setItem(currentItem);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
      case "content":
        if (!value) setErrors({ ...errors, [name]: "Field is Required" });
        else setErrors({ ...errors, [name]: "" });
        break;
      default:
        break;
    }
    setItem({ ...item, [name]: value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    await updatePost(item);
    navigate("/list");
  }

  return (
    <Form
      errors={errors}
      item={item}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { readPosts, updatePost };

export default connect(mapStateToProps, mapDispatchToProps)(Update);
