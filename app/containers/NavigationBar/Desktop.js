import React, { Component } from "react";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import { Icon } from "antd";
// Logo
import mboLogo from "!file-loader?name=[mboLogo].[ext]!./images/mboLogo.png";

// Inline styles
const styles = {
  icon: {
    fontSize: 17,
    color: "#343434"
  }
};

export class Desktop extends Component {
  render() {
    const { dispatchRoute } = this.props;
    return (
      <ul>
        <li className="nav-item-right nav-logo">
          <button onClick={() => dispatchRoute("/#")}>
            <img src={mboLogo} alt="" />
          </button>
        </li>

        <li className="nav-item-left">
          <button
            onClick={() => dispatchRoute("/signin")}
            className="btns-label"
          >
            Sign In
          </button>
        </li>
        <li className="nav-item-left">
          <button
            onClick={() => dispatchRoute("/checkout")}
            className="btns-label"
          >
            Checkout
          </button>
        </li>
        <li className="nav-item-left">
          <button onClick={() => dispatchRoute("/cart")} className="btns-icon">
            <Icon type="shopping-cart" style={styles.icon} />
          </button>
        </li>
        <li className="nav-item-left">
          <button
            onClick={() => dispatchRoute("/category")}
            className="btns-icon"
          >
            <Icon type="heart" style={styles.icon} />
          </button>
        </li>
        <li className="nav-item-left">
          <div className="wrapper-search">
            <h1>Search</h1>
          </div>
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchRoute: route => dispatch(push(route))
});

export default connect(null, mapDispatchToProps)(Desktop);