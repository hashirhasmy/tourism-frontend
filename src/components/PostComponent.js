import React, { Component } from 'react';
import axios from 'axios';

class PostComponent extends Component{

   state = {
       error : null,
       isLoaded : false,
       items : []
   }


   componentDidMount(){
        /**
         * We can call API with
         * 1. XmlHttpRequest (AJAX --> outdated*)
         * 2. Fetch API (modern, for now only latest browser version only supporting)
         * 3. Axios (suited any scenario)
         **/

        const API_URL_ENDPOINT = "http://localhost:8081/api/v1/posts";

        //promise().then().catch();
        axios.get(API_URL_ENDPOINT)
        .then(response => {
            this.setState({
                isLoaded : true,
                items : response.data
            })
        })
        .catch(error => {
            this.setState({
                isLoaded : true,
                error : error
            })
        });

   }

   //Render the output to HTML page with JSX.
   render(){
        const {error , isLoaded, items } = this.state;

        if(error){
            return(
                <div className="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                </div>
            );
        } else if(!isLoaded){
            return(
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="conatiner">
                    <div className="row" style={{background: "bisque"}}>
                        <div className="col-sm-8 offset-sm-2" style={{background: "sienna"}}>
                            
                            {items.map(item =>
                            
                                <div key={item.id} className="card mt-3">
                                    <div className="card-header">
                                    <img className="my-in" id="avatar" src="img/nav-logo.png" alt="NA"/>
                                        <div id="u-data">
                                            <h6>{item.caption}</h6>
                                            <p className="" id="post-time">{item.time}</p>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        {item.description}
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-primary">Like</button>
                                    </div>
                                </div>

                            )}

                        </div>
                    </div>
                </div>
            );
        }
       
   }

   
}

export default PostComponent;