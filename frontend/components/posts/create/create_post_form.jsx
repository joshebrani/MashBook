import React from 'react';
import { withRouter } from "react-router-dom";


class CreatePostForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            body: "",
            post_author_id: this.props.post_author_id,
            wall_id: this.props.wall_id

            
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClick = this.handleClick.bind(this)
    }
    
  
    
    handleInput(type) {
      return (e) =>{
        this.setState({
          [type]: e.target.value
        })
      }
    }
    
    handleSubmit(e) {
      e.preventDefault();
      this.props.makePost(this.state).then(() => this.props.getUsers());
      this.setState({ body: ""});
      this.props.closeModal();
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
                  placeholder={`What's on your mind, ${
                    this.props.currentUser.fname
                  }?`}
                ></textarea>
                <footer>
              <button onClick={this.handleSubmit} className='post-button'>
                <div className='pee'>
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