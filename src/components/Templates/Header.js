import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export class Header extends Component {
    render() {
        const title = this.props.title;
        return (
          <Fragment>
            <Typography variant="h2" style={{marginTop:30}}>{title}</Typography>
            <Divider style={{ padding: 3, marginBottom: 10 }} />
          </Fragment>
        );
    }
}

export default Header
