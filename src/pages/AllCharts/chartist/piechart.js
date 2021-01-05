import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import api from "../../../services/api";

var storageLogado = localStorage.getItem('usuarioLogado')
class piechart extends Component {
 
  render() {

    var pieChartData = {
      
      series: [],
      labels: ["Pen", "And", 'Ent']
    };
    var pieChartOptions = {
      showLabel: true,
      
    };
    return (
      <React.Fragment>
        <ChartistGraph
          data={pieChartData}
          options={pieChartOptions}
          style={{ height: "300px" }}
          type={"Pie"}
        />
      </React.Fragment>
    );
  }
}

export default piechart;
