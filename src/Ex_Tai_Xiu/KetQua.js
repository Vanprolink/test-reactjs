import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { PLAY_GAME } from "./constants/xucSacContants";

class KetQua extends Component {
  render() {
    return (
      <div className="text-center pt-4">
        <button onClick={this.props.handlePlayGame} className="btn btn-success">
          <span className="display-4">Play Game</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlayGame: () => {
      dispatch({
        type: PLAY_GAME,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KetQua);
