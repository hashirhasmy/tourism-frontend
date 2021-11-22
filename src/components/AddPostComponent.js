import React, { Component } from 'react';
import axios from 'axios';

class AddPostComponent extends Component {
  state = {
    caption: '',
    description: '',
  };

  onCaptionChange = (e) => {
    //console.log("Author name --->" +e.terget.value);
    this.setState({
      caption: e.target.value,
    });
  };
  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const API_URL_ENDPOINT = 'http://localhost:8081/api/v1/posts/add';

    const data = {
      caption: this.state.caption,
      description: this.state.description,
    };

    axios
      .post(API_URL_ENDPOINT, data)
      .then((res) => console.log('Response ---> ' + res))
      .catch((err) => console.log('Error : ' + err));
  };

  render() {
    return (
      <div
        className="container"
        style={{
          marginTop: '15rem',
        }}
      >
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <h4 className="mt-2">Add a Package</h4>

            <form className="mt-4" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="post-caption">Enter the package name</label>
                <input
                  type="text"
                  onChange={this.onCaptionChange}
                  className="form-control"
                  id="post-caption"
                />
              </div>
              <div className="form-group">
                <label htmlFor="post-description">Enter the Description</label>
                <textarea
                  type="text"
                  onChange={this.onDescriptionChange}
                  className="form-control"
                  id="post-description"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Publish
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPostComponent;
