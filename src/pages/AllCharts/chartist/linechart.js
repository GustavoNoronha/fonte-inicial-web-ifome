import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import api from "../../../services/api";


var storageLogado = localStorage.getItem('usuarioLogado')

class linechart extends Component {
 
  render() {

    var lineChartData = {
      labels: ["Total de Vendas", "Média Mensal", "Ao Todo", ],
      series: [
      
      ]
    };
    var lineChartOptions = {
      fullWidth: true,
      chartPadding: {
        right: 40
      }
    };
    return (
      <React.Fragment>
        <ChartistGraph
          data={lineChartData}
          options={lineChartOptions}
          type={"Line"}
          style={{ height: "300px" }}
        />
      </React.Fragment>
    );
  }
}

export default linechart;
