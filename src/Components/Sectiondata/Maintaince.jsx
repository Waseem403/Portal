import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  
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
    <React.Fragment>
        <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<Typography variant="h4" component="h2" gutterBottom>
        No data is available currenlty
      </Typography>
    </Grid>

    </React.Fragment>
  );
}
