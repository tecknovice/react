import React from "react";
import { Post } from "../interfaces/Post";

interface FormProps {
  handleSubmit: Function;
  handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  item: Post;
  errors: {
    title: string;
    content: string;
  };
}

export default class Form extends React.Component<FormProps> {
  render() {
    const { handleSubmit, handleChange, item, errors } = this.props;
    return (
      <form className="ui form" onSubmit={(e) => handleSubmit(e)}>
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={item.title}
            onChange={handleChange}
          />
          {errors.title && <span style={{ color: "red" }}>{errors.title}</span>}
        </div>
        <div className="field">
          <label>Content</label>
          <textarea
            name="content"
            placeholder="Content"
            value={item.content}
            onChange={handleChange}
          />
          {errors.content && (
            <span style={{ color: "red" }}>{errors.content}</span>
          )}
        </div>
        <button
          className="ui button"
          type="submit"
          disabled={
            !Boolean(item.title) ||
            !Boolean(item.content) ||
            Boolean(errors.title) ||
            Boolean(errors.content)
          }
        >
          Submit
        </button>
      </form>
    );
  }
}
