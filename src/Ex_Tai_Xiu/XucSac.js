import React, { Component } from "react";
import { connect } from "react-redux";
let btnStyle = {
  width: 120,
  height: 120,
  fontSize: 45,
};
export class xucsac extends Component {
  render() {
    console.log(this.props.state);
    let { state } = this.props;
    return (
      <div className="container pt-5">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button style={btnStyle} className="btn btn-danger">
            Tài
          </button>
          <div>
            {state.map((item) => {
              return <img style={{ width: 100 }} src={item.img} alt="" />;
            })}
          </div>
          <button style={btnStyle} className="btn btn-secondary">
            Xỉu
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state.xucSacReducer.mangXucSac,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps)(xucsac);
