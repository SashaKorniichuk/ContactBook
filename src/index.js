import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Components/Header"
import Container from 'react-bootstrap/Container'
import ContactAlert from "./Components/ContactAlert"
import CardUser from './Components/CardUser';

import Row from 'react-bootstrap/Row'
import AddItem from './Components/AddItem';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";




export default class App extends Component {
  favouriteLength = 0;
  state = {
    showModal: false,
    favouriteList: false,
    sort: false,
    query: "",
    data: [
      {
        id: 1,
        favourite: false,
        name: "Oksana",
        phone: "+38096896584",
        image: "https://potolcoviy.ru/wp-content/uploads/2021/03/woman.png",
        social: [
          {
            name: "facebook",
            url: "https://uk-ua.facebook.com"
          },
          {
            name: "instagram",
            url: "https://www.instagram.com/"
          },
          {
            name: "telegram",
            url: "https://www.telegram.com/"
          }
        ]
      },
      {
        id: 2,
        favourite: false,
        name: "Ivan",
        phone: "+38097806584",
        image: "https://potolcoviy.ru/wp-content/uploads/2021/03/man.png",
        social: [
          {
            name: "facebook",
            url: "https://uk-ua.facebook.com"
          },
          {
            name: "instagram",
            url: "https://www.instagram.com/"
          },
          {
            name: "telegram",
            url: "https://www.telegram.com/"
          }
        ]
      },
      {
        id: 3,
        favourite: false,
        name: "Sasha",
        phone: "+38097896584",
        image: "https://potolcoviy.ru/wp-content/uploads/2021/03/man.png",
        social: [
          {
            name: "facebook",
            url: "https://uk-ua.facebook.com"
          },
          {
            name: "instagram",
            url: "https://www.instagram.com/"
          },
          {
            name: "telegram",
            url: ""
          }

        ]
      }
    ]
  }
  getUsers = (data) => {
    let list = data.map((el) => {
      return (
        <CardUser
          key={el.id}
          name={el.name}
          phone={el.phone}
          social={el.social}
          image={el.image}
          onDelete={() => this.onDelete(el.id)}
          onFavouriteChange={() => this.onFavouriteChange(el.id)}
          favourite={el.favourite}
          onFindEdit={() => this.onFindEdit(el.id)}
          onEdit={this.onEdit}>
        </CardUser>
      );
    });
    list = list.sort(function (a, b) { return a[0] > b[0] });
    if (!this.state.sort) {
      return list.reverse();
    }

    return list.sort();

  };
  onEdit = (item, id) => {

    var index = this.findElementByIndex(id);
    this.setState(({ data }) => {
      let newEl = data[index];
      newEl.name = item.name;
      newEl.phone = item.phone;
      newEl.image = item.image;
      newEl.social[0].url = item.facebook;
      newEl.social[1].url = item.instagram;
      newEl.social[2].url = item.telegram;
      let before = data.slice(0, index);
      let after = data.slice(index + 1);
      return {
        data: [...before, newEl, ...after],
      };
    });


  };
  onFindEdit = (id) => {
    this.setState({
      showModal: true
    });

    console.log(this.state.showModal);
    let index = this.findElementByIndex(id);
    return this.state.data[index];

  }
  onFavouriteChange = (id) => {
    var index = this.findElementByIndex(id);
    this.setState(({ data }) => {
      let newEl = data[index];
      newEl.favourite = !newEl.favourite;
      let before = data.slice(0, index);
      let after = data.slice(index + 1);
      this.favouriteLength += newEl.favourite === true ? 1 : -1;
      return {
        data: [...before, newEl, ...after],
      };
    });
  };

  findElementByIndex = (id) => {
    return this.state.data.findIndex((x) => x.id === id);
  };
  onDelete = (id) => {
    let index = this.findElementByIndex(id);
    if (this.favouriteLength !== 0) {
      this.favouriteLength--;
    }
    this.setState(({ data }) => {
      return {
        data: [...data.slice(0, index), ...data.slice(index + 1)],
      };
    });
  };

  onFilter = () => {
    let users = this.state.data;


    if (this.state.favouriteList) {
      users = users.filter((x) => x.favourite === this.state.favouriteList);
      if (this.state.query !== "") {
        users = users.filter((x) => {
          return x.name.toLowerCase().includes(this.state.query.toLowerCase());
        })
      }
    }
    if (this.state.query !== "") {
      users = users.filter((x) => {
        return x.name.toLowerCase().includes(this.state.query.toLowerCase());
      })
    }

    return this.getUsers(users);
  }
  onFavouriteList = () => {

    this.setState({
      favouriteList: !this.state.favouriteList,
    });

  }
  onSort = () => {

    this.setState({
      sort: !this.state.sort,
    });

  }
  onAdd = (item) => {

    let ID = this.state.data[this.state.data.length - 1].id;

    let newEl = {
      id: ID + 1,
      name: item.name,
      phone: item.phone,
      image: item.image,
      favourite: false,
      social: [
        {
          name: "facebook",
          url: item.facebook
        },
        {
          name: "instagram",
          url: item.instagram
        },
        {
          name: "telegram",
          url: item.telegram
        }
      ]
    };
    this.setState(({ data }) => {
      return {
        data: [...data, newEl],
      };
    });

  }

  onQueryChanged = (newQuery) => {
    this.setState({
      query: newQuery,
    });
  };

  onShow = (filter) => {
    if (filter == "All") {
      return this.getUsers(this.state.data);
    }
    let users = this.state.data;

    users = users.filter((x) => x.favourite === true)
    return this.getUsers(users)
  }
  render() {
    return (
      <Router>
        <Route path="/" exact
          render={() => {
            return (
              <Container>
                <Header favouriteList={this.state.favouriteList} sort={this.state.sort} onSort={() => this.onSort()} onFavouriteList={() => this.onFavouriteList()} onSearch={this.onQueryChanged} />
                <ContactAlert all={this.state.data.length} favourite={this.favouriteLength} />
                <Row >
                  {this.onFilter()}
                </Row>
              </Container>
            )
          }}>
        </Route>

        <Route path="/Contacts/:category" exact
          render={({ match }) => {
            return (
              <Container>
                <Row >
                  {this.onShow(match.params.category)}
                </Row>
              </Container>
            )
          }}>

        </Route>

       
          <AddItem variant="primary" onAdd={this.onAdd}>
            Launch demo modal
            </AddItem>
      </Router>

    );
  };

}
ReactDOM.render(<App />, document.getElementById("root"));