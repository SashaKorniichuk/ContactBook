import React, { Component } from "react";
import ModalForm from "../ModalForm";
import { Link,Route, BrowserRouter as Router } from "react-router-dom";

import "./AddItem.css";

export default class AddItem extends Component {

    state = {
        showModal: false
    }

    onShow = () => {
        this.setState({
            showModal: true,
        })
    }
    onHide = () => {
        this.setState({
            showModal: false,
        })
    }

    render() {
        return (
            <>
                <div className="bottom-right">
                <Link to="/add/" >
                    <button type="button" className="btn btn-success" onClick={this.onShow}>
                        <i className="fas fa-plus-circle"></i>
                    </button>
                </Link>
                </div>
                <Route path="/add/" exact
                    render={() => {
                        return (
                            <>
                            
                            <Link to="/">
                            <button type="button" class="btn btn-success">Home</button>
                            </Link>                            
                            <ModalForm onShowModal={this.state.showModal} onHide={this.onHide} onAdd={this.props.onAdd}></ModalForm>
                        </>
                        )
                    }}>
                </Route>
            </>
        );
    }
}