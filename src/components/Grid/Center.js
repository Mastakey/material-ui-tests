import React, { Component, Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  paper: {
    padding: 2,
    textAlign: "center",
    height: 100,
    background: '#F0F0F0'
  }
};

export class Center extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Fragment>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Typography variant="h5">Center</Typography></Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Center);
