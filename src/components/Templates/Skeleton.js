import React, { Component, Fragment } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    paper: {
        padding: 2,
        textAlign: 'center',
        height: 100
    }
}

export class Skeleton extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <Fragment>
            </Fragment>
        )
    }
}

export default (withStyles(styles)(Skeleton));
