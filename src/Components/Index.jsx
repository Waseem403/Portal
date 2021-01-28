import React from 'react';
import Container from '@material-ui/core/Container';

import  AppBarMenu  from "./AppBarMenu";
import  Sidebar from "./Sidebar"

export default function Index() {
    return (
      <React.Fragment>
        <AppBarMenu/>
         <Sidebar/>
      </React.Fragment> 
       
     
    );
  }
  
