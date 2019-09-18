import React, { Component, Fragment } from 'react'
import { Grid, Paper } from '@material-ui/core'
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    paper: {
        padding: 2,
        textAlign: 'center',
        height: 100
    }
}

export class Simple extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Full size width</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>Half width</Paper>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default (withStyles(styles)(Simple));
