import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth:360,
    alignItems:'center',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  links:{
      fontWeight:'bold',
      textDecoration:'none'
  }
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      dense
      className={classes.root}
    >
      <ListItem button>

        <ListItemText primary={
        <a rel="noopener noreferrer" href="http://google.com" target="_blank" className={classes.links}>APCX Repository</a>
        }/>
      </ListItem>
  
      <ListItem button>

<ListItemText primary={
<a rel="noopener noreferrer" href="http://google.com" target="_blank" className={classes.links}>APCX Repository</a>
}/>
</ListItem>

<ListItem button>

<ListItemText primary={
<a rel="noopener noreferrer" href="http://google.com" target="_blank" className={classes.links}>APCX Repository</a>
}/>
</ListItem>
<ListItem button>

<ListItemText primary={
<a rel="noopener noreferrer" href="http://google.com" target="_blank" className={classes.links}>APCX Repository</a>
}/>
</ListItem>
<ListItem button>

<ListItemText primary={
<a rel="noopener noreferrer" href="http://google.com" target="_blank" className={classes.links}>APCX Repository</a>
}/>
</ListItem>
<ListItem button>

<ListItemText primary={
<a rel="noopener noreferrer" href="http://google.com" target="_blank" className={classes.links}>APCX Repository</a>
}/>
</ListItem>
<ListItem button>

<ListItemText primary={
<a rel="noopener noreferrer" href="http://google.com" target="_blank" className={classes.links}>APCX Repository</a>
}/>
</ListItem>
<ListItem button>

<ListItemText primary={
<a rel="noopener noreferrer" href="http://google.com" target="_blank" className={classes.links}>JIRA</a>
}/>
</ListItem>

<ListItem button>

<ListItemText primary={
<a rel="noopener noreferrer" href="http://google.com" target="_blank" className={classes.links}>Stathub</a>
}/>
</ListItem>

<ListItem button>

<ListItemText primary={
<a rel="noopener noreferrer" href="http://google.com" target="_blank" className={classes.links}>TIME CARDS</a>
}/>
</ListItem>

    </List>
  );
}
