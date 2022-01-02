import React from "react";
import { connect } from "react-redux";
import { readPosts, deletePost } from "../actions";
import { Link } from "react-router-dom";

class List extends React.Component {
  async componentDidMount() {
    if (this.props.posts.length === 0) await this.props.readPosts();
  }

  render() {
    return (
      <div className="ui celled list">
        {this.props.posts.map((post) => (
          <div className="item" key={post.id}>
            <div className="right floated content">
              <button
                className="ui button"
                onClick={() => this.props.deletePost(post.id)}
              >
                Delete
              </button>
            </div>
            <div className="content">
              <Link className="header" to={`/update/${post.id}`}>
                {post.title}
              </Link>
              <div className="description">{post.content}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = { readPosts, deletePost };

export default connect(mapStateToProps, mapDispatchToProps)(List);
