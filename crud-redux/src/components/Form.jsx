import React from "react";

export default class Form extends React.Component {
  render() {
    const { handleSubmit, handleChange, item, errors } = this.props;
    return (
      <form className="ui form" onSubmit={handleSubmit}>
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
            type="text"
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
