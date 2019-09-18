import React, { Component, Fragment } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  textField: {
  },
  submit: {
  }
};

export class Login extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Fragment>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item>
            <TextField
              required
              fullWidth
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
          </Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Login);
