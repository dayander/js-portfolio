'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProjects, getHome,getOne} from '../../actions/projectsActions';

import {Jumbotron, Button, Grid, Row, Col, Well} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Link} from 'react-router';

import PullQuote from '../pullQuote';
import ProjectLarge from '../projectLarge';
import Header from '../Header';

import {updateCounter} from "../../actions/headerActions";

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            header: ['an Accessibility Advocate', 'a Snowboarder', 'Determined', 'Self-Motivated', 'Anderson Day'],
            img: '/images/home1.png',
            headerText:'',
            counter: 0,
            isMounted: false,
            to: '/vim',
            to1: '/alc',
            to2: '/usa',
            projcets: [],
            vim: {getter:''},
            alc:this.props.projects.projects[1],
            p3:this.props.projects.projects[2],
            projectName: '',
            getter:'',
            bgImage:'/',

        }
    }


    componentDidMount(){



        document.title = "Anderson Day's Portfolio";



        // Set focus to the content container
        document.getElementById('app').focus();

        // Ensure the viewport returns to the top of the document window
        window.scrollTo(0, 0);


        this.props.getProjects();

       //this.interval = this.updateHeader()\



        this.setState({
            isMounted: true,
            bgImage: this.props.projects,
            vim: this.props.projects.projects[0],
        });

        this.myInterval = setInterval(this.updateHeader.bind(this), 2000)



        }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    findVIM(project){
        return project.projectName === 'VIM';
    }

    updateHeader(){

            if(this.state.counter<4){
                this.setState((prevState, props) => ({
                    counter: prevState.counter + 1
                }));}else{
                this.setState(()=>({
                    counter: 0
                }))
            }


    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }



    render(){
        const homePageList = this.props.projects.projects.map((projects, i)=>{
            return(
                <ProjectLarge key={i}
                              companyName={projects.projectName}
                              projectHeading={projects.projectHeading}
                              getter={projects.getter}
                              project={projects}
                              to={projects.getter}
                              img={projects.bgImage}/>
            )
        });





        return(
            <div>
            <Header color={"#fff"} img={'/images/homePageHeader.jpg'} h1={"Anderson Day"} h2={`I am ${this.state.header[0]}`}/>
            {/*<div style={{ backgroundImage: `url(/images.homePageHeader.jpg)`}}  className='jumbotron header-image'>*/}
                {/*<div className='container'>*/}
                    {/*<h1>Anderson Day</h1>*/}

                    {/*<h2>I am {this.state.header[0]}</h2>*/}
                {/*</div>*/}
            {/*</div>*/}




        <PullQuote
            header={'Creating for Everyone'}
            body={'I am an accessibility advocate. My interest ' +
            'currently lies in web accessibility. I am passionate about ' +
            'incorporating accessibility from the ground up in the design process.  '}
/>
                <PullQuote
                    header={"Developing From the User's Perspective"}
                    body={`Studying Experience Architecture has taught
                     me how to craft experiences from the users perspective.
                    Designing accessible experiences, helps create more meaningful experiences for everyone.`}
                />
                <PullQuote
                    header={'Design With Research'}
                    body={'My background comes from design and creative thinking. ' +
                    'I love combining my experience ' +
                    'with design and problem solving to make rad products people CAN use.'}
                />

                <PullQuote
                    header={'Creating Tool Box'}
                    body={"I've worked with Javascript, React, Node, Express, Redux, WCAG 2.0, Section508, HTML," +
                    " CSS, SCSS, Python and Django, Php, CMS including Wordpress, Adobe Business Catalyst, Concrete" +
                    " 5 and Drupal. I’ve also used the Adobe Creative Cloud, Microsoft Office, Universal Design," +
                    " User Research, Screen Reader - Voiceover"}
                />





<Well>
    <Row>
        <Col xs={12}>
                {homePageList[0]}
        </Col>
    </Row>
    <Row>
        <Col xs={12} sm={6}>
            {homePageList[1]}
        </Col>
        <Col xs={12} sm={6}>

            {homePageList[2]}

        </Col>
    </Row>


</Well>
            </div>



        )
    }

}

const mapStateToProps = (state)=>{
    return{
        counter: state.counter,
        projects: state.projects,
        vim: state.vim,
        alc: state.alc,
        getter: state.getter,

    }
};

const mapDispatchToProps= ( dispatch) =>{
    return bindActionCreators(
        {
            getProjects,
            getHome,


        }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
