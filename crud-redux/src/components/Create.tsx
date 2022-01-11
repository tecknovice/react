import Form from "./Form";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../actions";
import { Post } from "../interfaces/Post";

interface CreateProps {
  createPost: (item: Post) => Promise<void>;
}

const Create = (props: CreateProps) => {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    title: "",
    content: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.createPost(item);
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

const mapDispatchToProps = { createPost };

export default connect(null, mapDispatchToProps)(Create);
