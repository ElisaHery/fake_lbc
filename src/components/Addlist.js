import React from "react";
import "./Addlist.css";
// const leboncoin = require("leboncoin-api");
import leboncoin from "leboncoin-api";
import Adcard from "./Adcard";

class Addlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    const search = new leboncoin.Search().setPage(1).setRegion("ile_de_france");

    search.run().then(
      data => {
        console.log(data.results); // the array of results
        this.setState({ products: data.results });
      },
      function(err) {
        console.error(err);
      }
    );
  }

  render() {
    if (this.state.products.length === 0) {
      return <p>pas d'annonces dispo</p>;
    }
    console.log("2e passage dans le render");

    return (
      <div>
        {this.state.products.map(ad => (
          <Adcard key={ad.id} ad={ad} />
        ))}
      </div>
    );
  }
}

export default Addlist;
