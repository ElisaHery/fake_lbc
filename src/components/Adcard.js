import React from "react";
import "./Adcard.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Adcard extends React.Component {
  render() {
    console.log(this.props.ad);
    return (
      <Link
        to={{
          pathname: `/addview/${this.props.ad.id}`,
          state: {
            adData: this.props.ad
          }
        }}
      >
        <div className="adcard">
          <img
            src={
              this.props.ad.images &&
              this.props.ad.images.length > 0 &&
              this.props.ad.images[0]
            }
          />
          <div className="adcard_content">
            <span style={{ color: "blue", fontWeight: "bold" }}>
              {this.props.ad.title}
            </span>
            <span>{this.props.ad.category}</span>
            <span>{this.props.ad.location.city_label}</span>

            <div className="adcard_row">
              <span style={{ color: "orange", fontWeight: "bold" }}>
                {this.props.ad.price} €
              </span>
              <span>{this.props.ad.date.toString()}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Adcard;
