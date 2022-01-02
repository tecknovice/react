import Form from "./Form";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../actions/";

const Create = (props) => {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    title: "",
    content: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    content: "",
  });
    const handleChange = (event) => {
    const { name, value } = event.target;
    switch(name) {
      case "title":
      case "content":
        if(!value) setErrors({...errors, [name]: "Field is Required"})
        else setErrors({...errors, [name] : ""})
        break;
      default:
        break;
    }
    setItem({ ...item, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.createPost(item);
    navigate("/list");
  }

  return (
    <Form errors={errors} item={item} handleChange={handleChange} handleSubmit={handleSubmit} />
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { createPost };

export default connect(mapStateToProps, mapDispatchToProps)(Create);
