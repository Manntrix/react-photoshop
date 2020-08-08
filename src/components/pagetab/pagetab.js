import React, { Component } from 'react';
import './pagetab.css';
import cross from '../../assets/cross.png';
import '../../../node_modules/bootstrap/dist/js/bootstrap'
import {Tab, Row, Col, Nav, NavItem, } from '../../../node_modules/react-bootstrap/dist/react-bootstrap'
import '../../../node_modules/plain-draggable/plain-draggable.min.js';
import man from '../../assets/man.svg';
import TypeIt from 'typeit';
import '../../../node_modules/@icon/dashicons/dashicons.css'




class PageTab extends Component {
  componentDidMount(){
    new TypeIt('.type-it', {
      speed: 200
      
  }).type('Hi! I am Manish Mandal').pause(2000).delete().type('And i love programming');
  }
  
    render() {
        
      return (
       
       <Tab.Container id="page-tab" defaultActiveKey="first">
  <Row className="clearfix">
    <Col sm={12} >
      <Nav bsStyle="tabs">
        <NavItem eventKey="first" ><span>Home </span><img  className="tabcross" src={cross} alt="" /></NavItem>
        <NavItem eventKey="second"><span>Home 2</span><img  className="tabcross" src={cross} alt="" /></NavItem>
        <NavItem eventKey="third"><span>Home 3</span><img  className="tabcross" src={cross} alt="" /></NavItem>
        <NavItem eventKey="fourth"><span>Home 4</span><img  className="tabcross" src={cross} alt="" /></NavItem>
      </Nav>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <div>
          <div className="top-head bg-white">
          <div className="circle-r"></div>
          <div className="circle-r"></div>
          <div className="circle-r"></div>
          </div>
          <div className="wbody">
          <img src={man} alt=""/>
          <div className="box-1">
          <p class="type-it"></p>
          </div>
          <div className="box-2">
           <div className="sub-box"></div>
           <div className="sub-box"></div>
           <div className="sub-box"></div>
           <div className="sub-box"></div>
          </div>
          <div className="box-3"></div>
          <div className="box-3"></div>
          <div className="box-3"></div>
          <div className="box-3"></div>
          </div>
          <div className="wfoot"></div>
        </div>
        
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <div className="wordpress">
          <div className="wptop">
          <i class="dashicons dashicons-wordpress"></i>
          <i class="dashicons dashicons-admin-home"></i>
          <p>My Site</p>
          <i class="dashicons dashicons-admin-comments"></i>
          </div>
          <div className="wpside">
          <ul>
            <li><i class="dashicons dashicons-dashboard"></i><a href="#">Dashboard</a></li>
            <li><i class="dashicons dashicons-admin-post"></i><a href="#">Posts</a></li>
            <li><i class="dashicons dashicons-admin-media"></i><a href="">Media</a></li>
            <li><i class="dashicons dashicons-admin-page"></i><a href="">Pages</a></li>
            <li><i class="dashicons dashicons-admin-comments"></i><a href="">Comments</a></li>
            <li><i class="dashicons dashicons-admin-appearance"></i><a href="">Appearance</a></li>
            <li><i class="dashicons dashicons-admin-plugins"></i><a href="">Plugins</a></li>
            <li><i class="dashicons dashicons-admin-users"></i><a href="">Users</a></li>
            <li><i class="dashicons dashicons-admin-tools"></i><a href="">Tools</a></li>
            <li><i class="dashicons dashicons-admin-settings"></i><a href="">Settings</a></li>
           
          </ul>
          </div>
          <div className="wpside-2"></div>

        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
         
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
       

      );
    }
  }
  
  export default PageTab;
  