import React, { Component } from 'react';
import './toolbar.css'
import cross from '../../assets/cross.png';
import move from '../../assets/move.png';
import selection from '../../assets/selection.png';
import lasso from '../../assets/lasso.png';
import magic from '../../assets/magic.png';
import crop from '../../assets/crop.png';
import eye from '../../assets/eye.png';
import healing from '../../assets/healing.png';
import brush from '../../assets/brush.png';
import stamp from '../../assets/stamp.png';
import history from '../../assets/history.png';
import eraser from '../../assets/eraser.png';
import gradient from '../../assets/gradient.png';
import blur from '../../assets/blur.png';
import dodge from '../../assets/dodge.png';
import pen from '../../assets/pen.png';
import text from '../../assets/text.png';
import path from '../../assets/path.png';
import rectangle from '../../assets/rectangle.png';
import hand from '../../assets/hand.png';
import mag from '../../assets/mag.png';
import edit from '../../assets/edit.png';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';
import Draggable from 'react-draggable';





class Toolbar extends Component {
    
    componentDidMount = () => {
      
      
        var move = require('../../assets/move.png');
        var selection = require('../../assets/selection.png');
        var lasso = require('../../assets/lasso.png');
        var magic = require('../../assets/magic.png');
        var crop = require('../../assets/crop.png');
        var eye = require('../../assets/eye.png');
        var healing = require('../../assets/healing.png');
        var brush = require('../../assets/brush.png');
        var stamp = require('../../assets/stamp.png');
        var history = require('../../assets/history.png');
        var eraser = require('../../assets/eraser.png');
        var gradient = require('../../assets/gradient.png');
        var blur = require('../../assets/blur.png');
        var dodge = require('../../assets/dodge.png');
        var pen = require('../../assets/pen.png');
        var text = require('../../assets/text.png');
        var path = require('../../assets/path.png');
        var rectangle = require('../../assets/rectangle.png');
        var hand = require('../../assets/hand.png');
        var mag = require('../../assets/mag.png');
        $('.tmove').click(function () {
            $('*').css({
                'cursor' : 'url(' + move + '),auto'
             });
        });
        $('.tselection').click(function () {
            $('*').css({
                'cursor' : 'url(' + selection + '),auto'
            });
        });
        $('.tlasso').click(function () {
            $('*').css({
                'cursor' : 'url(' + lasso + '),auto'
            });
        });
        $('.tmagic').click(function () {
            $('*').css({
                'cursor' : 'url(' + magic + '),auto'
            });
        });
        $('.tcrop').click(function () {
            $('*').css({
                'cursor' : 'url(' + crop + '),auto'
            });
        });
        $('.teye').click(function () {
            $('*').css({
                'cursor' : 'url(' + eye + '),auto'
            });
        });
        $('.thealing').click(function () {
            $('*').css({
                'cursor' : 'url(' + healing + '),auto'
            });
        });
        $('.tbrush').click(function () {
            $('*').css({
                'cursor' : 'url(' + brush + '),auto'
            });
        });
        $('.tstamp').click(function () {
            $('*').css({
                'cursor' : 'url(' + stamp + '),auto'
            });
        });
        $('.thistory').click(function () {
            $('*').css({
                'cursor' : 'url(' + history + '),auto'
            });
        });
        $('.teraser').click(function () {
            $('*').css({
                'cursor' : 'url(' + eraser + '),auto'
            });
        });
        $('.tgradient').click(function () {
            $('*').css({
                'cursor' : 'url(' + gradient + '),auto'
            });
        });
        $('.tblur').click(function () {
            $('*').css({
                'cursor' : 'url(' + blur + '),auto'
            });
        });
        $('.tdodge').click(function () {
            $('*').css({
                'cursor' : 'url(' + dodge + '),auto'
            });
        });
        $('.tpen').click(function () {
            $('*').css({
                'cursor' : 'url(' + pen + '),auto'
            });
        });
        $('.ttext').click(function () {
            $('*').css({
                'cursor' : 'url(' + text + '),auto'
            });
        });
        $('.tpath').click(function () {
            $('*').css({
                'cursor' : 'url(' + path + '),auto'
            });
        });
        $('.trectangle').click(function () {
            $('*').css({
                'cursor' : 'url(' + rectangle + '),auto'
            });
        });
        $('.thand').click(function () {
            $('*').css({
                'cursor' : 'url(' + hand + '),auto'
            });
        });
        $('.tmag').click(function () {
            $('*').css({
                'cursor' : 'url(' + mag + '),auto'
            });
        });
        $('.nicross').click(function () {
            $('#toolbar').css({
                'display' : 'none'
            });
        });
      }
  render() {
    return (
        <Draggable>
        <div id="toolbar">
            <div className="tbtop">
                <img  className="nicross" src={cross} alt="" />
            </div>
            <div className="tbbody">
                <ul>
                    <li><a className="tmove" >
                        <img src={move} alt=""/>
                    </a></li>
                    <li><a className="tselection" >
                        <img src={selection} alt="" />
                    </a></li>
                    <li><a className="tlasso" >
                        <img src={lasso} alt=""/>
                    </a></li>
                    <li><a className="tmagic" >
                        <img src={magic} alt=""/>
                    </a></li>
                    <li><a className="tcrop" href="#">
                        <img src={crop} alt=""/>
                    </a></li>
                    <li><a className="teye" href="#">
                        <img src={eye} alt=""/>
                    </a></li>
                    <li><a className="thealing" href="#">
                        <img src={healing} alt=""/>
                    </a></li>
                    <li><a className="tbrush" href="#">
                        <img src={brush} alt=""/>
                    </a></li>
                    <li><a className="tstamp" href="#">
                        <img src={stamp} alt=""/>
                    </a></li>
                    <li><a className="thistory" href="#">
                        <img src={history} alt=""/>
                    </a></li>
                    <li><a className="teraser" href="#">
                        <img src={eraser} alt=""/>
                    </a></li>
                    <li><a className="tgradient" href="#">
                        <img src={gradient} alt=""/>
                    </a></li>
                    <li><a className="tblur" href="#">
                        <img src={blur} alt=""/>
                    </a></li>
                    <li><a className="tdodge" href="#">
                        <img src={dodge} alt=""/>
                    </a></li>
                    <li><a className="tpen" href="#">
                        <img src={pen} alt=""/>
                    </a></li>
                    <li><a className="ttext" href="#">
                        <img src={text} alt=""/>
                    </a></li>
                    <li><a className="tpath" href="#">
                        <img src={path} alt=""/>
                    </a></li>
                    <li><a className="trectangle" href="#">
                        <img src={rectangle} alt=""/>
                    </a></li>
                    <li><a className="thand" href="#">
                        <img src={hand} alt=""/>
                    </a></li>
                    <li><a className="tmag" href="#">
                        <img src={mag} alt=""/>
                    </a></li>
                    <li><a className="tgradient" href="#">
                        <img src={edit} alt=""/>
                    </a></li>
                </ul>
            </div>
        </div>
        </Draggable>
    );
  }
}

export default Toolbar;
