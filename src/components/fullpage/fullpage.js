import React, { Component } from 'react';
import Menu from '../menu/menu'
import PageTab from '../pagetab/pagetab'
import Toolbar from '../toolbar/toolbar'
import Sidepanel from '../sidepanel/sidepanel'

import {$, jQuery} from '../../../node_modules/jquery/dist/jquery.min.js';
import ReactFullpage from '@fullpage/react-fullpage';
import './fullpage.css'






const Fullpage = () => (
  
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
          <Menu></Menu>
          <PageTab></PageTab>
          <Toolbar></Toolbar>
          <Sidepanel></Sidepanel>
          </div>
          
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
