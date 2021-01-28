import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import Container from '@material-ui/core/Container';


import ReportTable from "./ReportTable"
import Loader from "./Loader"
import Dropdowndata from "./Dropdowndata"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#03a9f4 ',
    color:'white'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Report() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
   const [OutputData,SetOutputData]=useState([])
   const [Errors,SetErrors]=useState()
const[Loading,SetLoading]=useState(false)
  const handleClick = () => {
    setOpen(!open);
  };

   useEffect(()=>{
    SetLoading(true)
     axios.get('https://jsonplaceholder.typicode.com/users').
     then(Response=>{
         SetOutputData(Response.data)
      
     }).catch(err=>{
         SetErrors('Error!. unable to fetch data')
     })
     SetLoading(false)
  
   },[])




  return (
    <Container>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={12} md={3} lg={3} style={{marginLeft:'-4.5%'}}>
    <List
      component="nav"
      dense
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button>
   
        <ListItemText primary="Databases" />
      </ListItem>
      <ListItem button>
     
        <ListItemText primary="machines" />
      </ListItem>
      <ListItem button onClick={handleClick}>
    
        <ListItemText primary="Products" />
        {open ? <RemoveIcon/>:<AddIcon/>}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding dense>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Products by environment" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Envionments by product" />
          </ListItem>
          

        </List>
      </Collapse>
      
    </List>
    </Grid>
    <Grid item xs={12} sm={12} md={8} lg={8} alignItems="center">
        <Dropdowndata/>
    <ReportTable UserData={OutputData}/>
    </Grid>
    </Grid>
    </Container>
  );
}
