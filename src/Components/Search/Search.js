
import './Search.css'

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { Component } from 'react'

export default class Search extends Component {

    state = {
        query: "",
    };

    onSearchChanged = (e) => {
        e.preventDefault();
        const { onSearch } = this.props;
        onSearch(e.target.value);
        this.setState({
            query: e.target.value,
        });
        console.log(this.state.query);

    };
    render() {
        return (

            <InputGroup className="mb-3 mt-3 ">
                <FormControl onChange={this.onSearchChanged}
                    placeholder="Search"
                />

            </InputGroup>

        )
    }
}