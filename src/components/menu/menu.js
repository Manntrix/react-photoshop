import React, { Component } from 'react';
import './menu.css';
import logo from '../../assets/logo.png';
import min from '../../assets/min.png';
import max from '../../assets/max.png';
import cross from '../../assets/cross.png';




class Menu extends Component {
  toggleFullScreen(elem) {
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
   
    render() {
        
      return (
        <div className="menu">
       
        <div className="logo">
        <img src={logo} alt="logo" />
                </div>
                <div className="nav-bar">
                    <ul>
                        <li><a href="">File</a></li>
                        <li><a href="">Edit</a></li>
                        <li><a href="">Image</a></li>
                        <li><a href="">Layer</a></li>
                        <li><a href="">Type</a></li>
                        <li><a href="">Select</a></li>
                        <li><a href="">Filter</a></li>
                        <li><a href="">View</a></li>
                    </ul>
                </div>
                <div className="menu-icons">
                    <img src={min} alt=""/>
                    <a onClick={() => this.toggleFullScreen(document.body)} id="fullscreen"  href="#"> <img src={max} alt=""/></a>
                    <a   href="#"> <img  src={cross} alt=""/></a>
                </div>
       
</div>
      );
    }
  }
  
  export default Menu;
  