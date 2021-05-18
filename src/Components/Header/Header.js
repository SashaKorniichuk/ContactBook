
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Header.css'
import Search from "../Search"
import {Component} from 'react'

export default class Header extends Component {
    render() {
        const img=this.props.favouriteList===false ? "far fa-star" : "far fa-address-book";
        const imgSort=this.props.sort===false ? "fa fa-sort-alpha-asc": "fa fa-sort-alpha-desc"
        return (

            <Row >
                <Col md={10}>
                    <Search onSearch={this.props.onSearch}/>
                </Col>
                <Col md={2}  >    
                    <i className={img+" mt-3"} onClick={this.props.onFavouriteList} ></i>
                    <i className={imgSort+" mt-3"} onClick={this.props.onSort} ></i>
                </Col>
            </Row>

        )
    }
}

