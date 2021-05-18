import React, { Component } from "react";
import ListSocialLinks from '../ListSocialLinks'
import InfoUser from "../InfoUser"
import './CardUser.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ModalForm from "../ModalForm";


export default class CardUser extends Component {

    state={
        showModal:false
    }

    onShow=()=>{
        this.setState({
            showModal:true,
        })
    }
    onHide=()=>{
       this.setState({
           showModal:false,
       })
    }

    render(){
        const favourite=this.props.favourite===true ? "fas fa-star" : "far fa-star";
        return (
            <>
            <Col md={4}>
            <Card>
                <Row>
                    <Col md={10}>
                        <InfoUser  name={this.props.name} phone={this.props.phone} image={this.props.image} />
                        <Row>                  
                                <ListSocialLinks socialLinks={this.props.social} key={this.props.id} />                
                        </Row>
                    </Col>

                    <Col md={2} className="text-center Buttons">
                        <span className="fa fa-trash ButtonSize pt-1 red"
                         onClick={this.props.onDelete}
                         aria-hidden="true"></span>  
                         <span className="far fa-edit yellow" onClick={this.onShow}></span>
                        <span className={favourite+" ButtonSize pb-1 green"} onClick={this.props.onFavouriteChange}  ></span>
                    </Col>

                </Row>
            </Card>
        </Col>

        <ModalForm isEdit={true} onShowModal={this.state.showModal} onHide={this.onHide} onEdit={this.props.onEdit} onFindEdit={this.props.onFindEdit}></ModalForm>
    </>)
 }
}