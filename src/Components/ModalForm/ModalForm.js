import Modal from 'react-bootstrap/Modal'
import React, { Component } from "react";
import AddItem from "../AddItem"

import Button from 'react-bootstrap/Button';

export default class ModalForm extends Component {
  state =
    {
      show: false,
      id:0,
      name: "",
      phone: "",
      image: "",
      facebook: "",
      instagram: "",
      telegram: ""

    }
  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  onPhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  onImageChange = (e) => {
    this.setState({
      image: e.target.value,
    });
  };
  onFacebookChange = (e) => {
    this.setState({
      facebook: e.target.value,
    });
  };
  onInstagramChange = (e) => {
    this.setState({
      instagram: e.target.value,
    });
  };
  onTelegramChange = (e) => {
    this.setState({
      telegram: e.target.value,
    });
  };
  
  Load=()=>{
    if (this.props.isEdit) {
      let i = this.props.onFindEdit();
      this.setState({
        id:i.id,
        name: i.name,
        phone: i.phone,
        facebook: i.social[0].url,
        instagram: i.social[1].url,
        telegram:i.social[2].url
      });
    }
  }

  onSubmitContact = (e) => {
    e.preventDefault();
    console.log()
    if (this.props.isEdit) {
      this.props.onEdit(this.state,this.state.id);
     
    } else {
      this.props.onAdd(this.state);
      this.setState({
        name: "",
        phone: "",
        facebook: "",
        instagram: "",
        telegram: ""
      });
    }
  };
  OnChangeGender = (e) => {
    this.setState({
      image: "https://potolcoviy.ru/wp-content/uploads/2021/03/" + e.target.value + ".png",
    });
  }

  render() {

    return (
      <>


        <Modal show={this.props.onShowModal} onEnter={this.Load} onHide={() => { this.props.onHide() }} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-group " onSubmit={this.onSubmitContact}>
              <input
                onChange={this.onNameChange}
                name="name"
                placeholder="Enter name"
                className="form-control mb-3"
                value={this.state.name}

                required
              />
              <input
                onChange={this.onPhoneChange}
                name="phone"
                placeholder="Enter phone"
                required
                className="form-control mb-3"
                value={this.state.phone}
              />

              <div onChange={this.OnChangeGender}  >
                <input type="radio" value="man" name="gender" required /> Male
              <input type="radio" value="woman" name="gender" className="ml-3" required /> Female
            </div>

              <input
                onChange={this.onFacebookChange}
                name="facebook"
                placeholder="Enter path facebook (No obligate)"
                value={this.state.facebook}

                className="form-control mb-3"
              />
              <input
                onChange={this.onInstagramChange}
                name="instagram"
                placeholder="Enter path instagram (No obligate)"
                value={this.state.instagram}
                className="form-control mb-3"
              />
              <input
                onChange={this.onTelegramChange}
                name="telegram"
                placeholder="Enter path telegram (No obligate)"
                value={this.state.telegram}
                className="form-control mb-3"
              />
              <Button variant="secondary" onClick={() => { this.props.onHide() }}>
                Close
              </Button>

              <Button variant="success" type="submit" className="ml-3" >
                Save Changes
                </Button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

