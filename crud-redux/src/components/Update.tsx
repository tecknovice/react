import Form from "./Form";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { readPosts, updatePost } from "../actions";
import { Post } from "../interfaces/Post";
import { StoreState } from "../reducers";

export interface UpdateProps {
  posts: Post[];
  readPosts: Function;
  updatePost: Function;
}

const Update = ({ posts, readPosts, updatePost }: UpdateProps) => {
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

  useEffect(() => {
    async function fetchData() {
      await readPosts();
      const id = Number(params.id);
      const currentItem = posts.find((post) => post.id === id);
      if (currentItem) setItem(currentItem);
    }
    fetchData();
  }, []);

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

  async function handleSubmit(event: React.FormEvent) {
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

const mapStateToProps = (state: StoreState) => state;

const mapDispatchToProps = { readPosts, updatePost };

export default connect(mapStateToProps, mapDispatchToProps)(Update);
