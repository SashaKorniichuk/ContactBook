
import "./ContactAlert.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Component } from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

export default class ContactAlert extends Component {
    render() {
        return (
            <Row>
                <Col className="text-center">
                    <Link to={"/Contacts/All"}>
                        <span >
                        All contacts:{this.props.all}
                        </span>
                    </Link>
                </Col>
                <Col >
                    <Link to={"/Contacts/Favourite"}>
                        <span>
                        Favourite contacts:{this.props.favourite}
                        </span>
                    </Link>
                </Col>
            </Row>
        )
    }
}

