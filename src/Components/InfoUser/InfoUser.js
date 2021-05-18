
import './InfoUser.css'
import React, { Component } from "react";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class InfoUser extends Component {
    render() {
        return (
            <Row>
                <Col md={6} className="text-center">
                    <img src={this.props.image} alt="" className="img" />
                </Col>
                <Col md={6} className="mt-3" >
                    <div className="info ">
                        <h3>{this.props.name}</h3>
                        <span className="size">{this.props.phone}</span>
                    </div>
                </Col>
            </Row>)
    }
}

