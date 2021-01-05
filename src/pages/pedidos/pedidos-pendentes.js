import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Card invoice
import CardInvoice from "./card-invoice"

//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import api from "../../services/api"

class PedidosPendentes extends Component {
    state = {
        pedidosPendentes: []
    }
     
    async componentDidMount(){
        const response = await api.get('/api/get/')
        this.setState({pedidosPendentes: response.data })
        console.log(response.data)
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Pedidos" breadcrumbItem="Pedidos Pendentes" />

                        <Row>
                            {
                                this.state.pedidosPendentes.map((invoice) =>
                                    <CardInvoice data={invoice} />
                                )
                            }
                        </Row>
                        <Row>
                            <Col xs="12">
                                <div className="text-center my-3">
                                    <Link to="#" className="text-success"><i className="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i> Buscando por registros</Link>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default PedidosPendentes;