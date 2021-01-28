import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from '@material-ui/icons/Home';

import HomeData from "./Sectiondata/HomeData"
import Envmanager from "./Sectiondata/Envmanager"
import Report from "./Sectiondata/Report";
import Maintaince from "./Sectiondata/Maintaince"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
},
avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
},
}));

export default function Sidebar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Environment Manager" {...a11yProps(1)} />
          <Tab label="Reports" {...a11yProps(2)} />
          <Tab label="Maintaince" {...a11yProps(3)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
   
            
                                <HomeData/>
                   
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Envmanager/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Report/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Maintaince/>
      </TabPanel>
    </div>
  );
}
