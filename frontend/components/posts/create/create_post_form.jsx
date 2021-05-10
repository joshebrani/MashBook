import React from 'react';
import { withRouter } from "react-router-dom";


class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      post_author_id: this.props.post_author_id,
      wall_id: this.props.wall_id,
      photoFile: null,
      photoUrl: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value,
      });
    };
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.makePost(this.state).then(() => this.props.getUsers());
  //   this.setState({ body: "" });
  //   this.props.closeModal();
  // }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[body]", this.state.body);
    formData.append("post[post_author_id]", this.props.post_author_id);
    formData.append("post[wall_id]", this.props.wall_id);

    if (this.state.photoFile) {
      formData.append("post[photo]", this.state.photoFile);
    }

    this.props.makePost(formData).then(() => this.props.getUsers());

    this.setState({
      body: "",
      photoFile: null,
      photoUrl: null,
    });
    this.props.closeModal();
  }

  handleFile(e) {
    // this.setState({ photoFile: e.currentTarget.files[0] });
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
          fileReader.readAsDataURL(file);
        }
  }

  render() {
    return (
      <section className="modal-background">
        <form className="modal-child">
          <div className="post-form">
            <div className="post-head">
              <div
                className="close-post"
                onClick={() => this.props.closeModal()}
              >
                &times;
              </div>
              <h1 className="create-post">Create Post</h1>
              <div className="break"></div>
              <div className="post-profile-head">
                {this.props.currentUser.fname +
                  " " +
                  this.props.currentUser.lname}
              </div>
            </div>
            <textarea
              name="body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleInput("body")}
              placeholder={`What's on your mind, ${this.props.currentUser.fname}?`}
            ></textarea>
            <input type="file" name="" id="" onChange={this.handleFile} />
            <footer>
              <button onClick={this.handleSubmit} className="post-button">
                <div className="pee">
                  <p>Post</p>
                </div>
              </button>
            </footer>
          </div>
        </form>
      </section>
    );
  }
}



export default withRouter(CreatePostForm);