"use strict";

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPosts} from '../../actions/blogActions';
import {Carousel,Grid, Col, Row, Button} from 'react-bootstrap';
import Header from "../Header";
import { Route, Switch, Link, withRouter} from 'react-router-dom';
import BlogPostItem from './blogPostItem';
import PostLarge from '../postLarge';
import ProjectTemplate from '../projects/projectTemplate';
import PageShell from './PageShell';








class BlogPostList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            h1: "Anderson's Blog Posts",
            h2: "A place where I share my ideas and research",


        }
    }


     componentDidMount(){
         document.title = 'Blog Posts || Anderson Day';


         // Set focus to the content container
         document.getElementById('app').focus();

         // Ensure the viewport returns to the top of the document window
         window.scrollTo(0, 0);


        this.props.getPosts();





    }
    render(){
        const blogPostList = this.props.posts.posts.map((post, i)=>{
            return(
                <Row key={i} className='blog-list-item'>
                    <Col xs={12}  >

                        <Link params={`${this.props.match.url}${post.slug}`} to={`${this.props.match.url}${post.slug}`} >
                            <PostLarge  title={post.name} content={post.content} />
                        </Link>

                    </Col>
                </Row>
            )
        });



        return(
            <div>

                  <Header h1={this.state.h1}   h2={this.state.h2}/>

                <Row style={{marginTop: '15px'}}>
                    <div className="container">
                    <h2>What I've been thinking about.</h2>
                        <p>Find a range of topics.
                            Read about what interests me and what I think it useful information to share</p>
                    </div>
                    {blogPostList}
                </Row>
                <Switch>
                <Route path='/blog/:test' component={PageShell(BlogPostItem)}/>
                </Switch>

            </div>
        )
    }

}


const mapStateToProps = (state)=>{
    return{
    posts:state.posts,
    }
};

const mapDistpatchTopProps = (dispatch) =>{
    return bindActionCreators({
        getPosts,

    }, dispatch)
};

export default connect(mapStateToProps, mapDistpatchTopProps)(BlogPostList);