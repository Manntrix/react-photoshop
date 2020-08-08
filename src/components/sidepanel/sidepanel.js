import React, {Children, Component } from 'react';
import Draggable from 'react-draggable';
import './sidepanel.css'
import cross from '../../assets/cross.png';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';
import {Tabs, Tab, Col, Nav, NavItem, } from '../../../node_modules/react-bootstrap/dist/react-bootstrap'



class Sidepanel extends Component {
    componentDidMount = () => {
        $('.spcross').click(function () {
            $('#sidepanel').css({
                'display' : 'none'
            });
        });
    }
  render() {
    return (
        <Draggable>
            
        <div id="sidepanel">
        <div className="paneltop">
            <img  className="spcross" src={cross} alt="" /> 
        </div>
        <div className="panelbody">
            <div id="layer-tab">
               
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                     
                    <a className="nav-link active" data-toggle="tab" href="#1">Layer</a>
                  </li>
                  <li className="nav-item">
                       
                    <a className="nav-link" data-toggle="tab" href="#2">Menu 1</a>
                  </li>
                  <li className="nav-item">
                     
                    <a className="nav-link" data-toggle="tab" href="#3">Menu 2</a>
                  </li>
                </ul>
              
               
                <div className="tab-content">
                  <div id="1" className="tab-pane active">
                    <div className="sec-1">
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle" data-toggle="dropdown">
                              Kind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Link 1</a>
                              <a className="dropdown-item" href="#">Link 2</a>
                              <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                          </div>
                          <div className="imgsec">
                              <ul>
                                  <li><a href="#">
                                      <img src="img/image.png" alt="" />
                                  </a></li>
                                  <li><a href="#">
                                      <img src="img/cir.png" alt="" />
                                  </a></li>
                                  <li><a href="#">
                                      <img src="img/text.png" alt="" />
                                  </a></li>
                                  <li><a href="#">
                                      <img src="img/tri.png" alt="" />
                                  </a></li>
                                  <li><a href="#">
                                      <img src="img/book.png" alt="" />
                                  </a></li>
                              </ul>
                          </div>
                    </div>
                    <div className="sec-2">
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle button1" data-toggle="dropdown">
                              Normal
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Link 1</a>
                              <a className="dropdown-item" href="#">Link 2</a>
                              <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                          </div>
                          <p>Opacity</p>
                          <div className="dropdown">
                            <button type="button" className="dropdown-toggle button2" data-toggle="dropdown">
                              100%
                            </button>
                            <div className="dropdown-menu">
                              <input type="range" min="1" max="100" defaultValue="50" />
                            </div>
                          </div>
                        
                    </div>
                    <div className="sec-3">
                        <p>Lock:</p>
                        <div className="imgsec">
                            <ul>
                                <li><a href="#">
                                    <img src="img/trans.png" alt="" />
                                </a></li>
                                <li><a href="#">
                                    <img src="img/brush.png" alt="" />
                                </a></li>
                                <li><a href="#">
                                    <img src="img/move.png" alt="" />
                                </a></li>
                                <li><a href="#">
                                    <img src="img/artboard.png" alt="" />
                                </a></li>
                                <li><a href="#">
                                    <img src="img/lock.png" alt="" />
                                </a></li>
                            </ul>
                        </div>
                        <p>Fill</p>
                          <div className="dropdown">
                            <button type="button" className="dropdown-toggle button3" data-toggle="dropdown">
                              100%
                            </button>
                            <div className="dropdown-menu">
                              <input type="range" min="1" max="100" defaultValue="50" />
                            </div>
                          </div>
                    </div>
                    <div className="sec-4">
                        <div className="left-sec">
                                <img src="img/eyes.png" alt="" />
                        </div>
                        <div className="right-sec">
                              <div className="box"></div>
                              <p>Home</p>      
                        </div>
                    </div>
                  </div>
                  <div id="2" className="container tab-pane fade"><br></br>
                    
                  </div>
                  <div id="3" className="container tab-pane fade"><br></br>
                    
                  </div>
                </div>
            </div>
        </div>
    </div>
    </Draggable>
    );
  }
}

export default Sidepanel;
