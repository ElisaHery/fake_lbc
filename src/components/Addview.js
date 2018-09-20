import React from "react";

class Addview extends React.Component {
  render() {
    const data = this.props.location.state.adData;
    console.log(data);
    return <p>{data.title}</p>;
  }
}

export default Addview;
