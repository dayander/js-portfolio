import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPosts} from '../../actions/blogActions';
import Header from "../Header";



class BlogPostItem extends React.Component{
    constructor(props){
        super(props);

        this.state={
            post: this.props.posts.posts.find(x => "/blog"+ x.slug.toLowerCase() == this.props.match.url),
            //index: this.props.posts.posts.findIndex(x =>  x.slug === this.props.match.url),
            //this.props.projects.projects.find(x => x.getter === this.props.match.url),
            title: '',
            name: '',

            // index: this.props.projects.projects.findIndex(x => x.getter === this.props.match.url),

            // projects: [],
            // vim: this.props.projects.projects[0],
            // alc:this.props.projects.projects[1],
            // p3:this.props.projects.projects[2],

        }
    }


    componentWillMount(){
        console.log('will', this.state.post)
    }

    componentDidMount(){


        //this.props.getPosts();

        document.title = this.state.post.title +' || Anderson Day';

        // Set focus to the content container
        document.getElementById('app').focus();


        window.scrollTo(0, 0);

    }


    render(){
const bodyText = props =>
    {
        if(this.state.post.title){
            console.log(this.state.post.title)
        }
        };


        return(
            <div>
                <Header h1={this.state.post.title}  h2={this.state.post.name}/>


<div className='bodyContent' dangerouslySetInnerHTML={{__html:this.state.post.content}}></div>


            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
    posts: state.posts,

    }
};

const mapDispatchToProps= ( dispatch) =>{
    return bindActionCreators(
        {

            getPosts

        }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostItem);