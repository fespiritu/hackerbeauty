import React, { Component } from "react";

import { Tabs, Tab } from "material-ui";
import { withRouter } from "react-router-dom";

/* component styles */
import { styles } from "./styles.scss";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: "/record"
    };
  }
  handleChange = (route, updateUrl) => {
    this.setState({
      currentRoute: route
    });
    if (updateUrl !== false) {
      this.pushRoute(route);
    }

    console.log("handle", route);
  };
  componentDidMount() {
    const { pathname } = this.props.location;
    this.handleChange(pathname, false);
  }
  pushRoute(route) {
    const { history } = this.props;
    switch (route) {
      case "/record":
        history.push("/record");
        break;

      case "/recordings":
        history.push("/recordings");
        break;

      default:
        break;
    }

    console.log("In switch", route);
  }

  render() {
    return (
      <div className={styles}>
        <Tabs
          className="tabs"
          value={this.state.currentRoute}
          onChange={this.handleChange}
        >
          <Tab label="Record" value={"/record"} />
          <Tab label="Listen" value={"/recordings"} />
        </Tabs>
      </div>
    );
  }
}

export default withRouter(Navigation);
