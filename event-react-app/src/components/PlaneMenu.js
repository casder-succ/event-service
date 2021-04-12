import React from 'react';
import './currently.css';
import * as Api from 'typescript-fetch-api'
import { withRouter } from "react-router";
import moment from 'moment'
import Moment from 'react-moment';

const api = new Api.DefaultApi()


class PlaneMenu extends React.Component {
  constructor(props) {
    super(props);
    const id =  this.props.match?.params.id || moment().format('YYYY-MM-DD');



    this.state = {
      menu: [
        {id: "xyz1", date: "2021-04-29", food: ["mango", "fish", "juice"]},
        {id: "xyz2", date: "2021-04-21", food: ["apple", "chicken", "sprite"]},
        {id: "xyz3", date: "2021-04-15", food: ["banana", "beef", "pepsi"]},
        {id: "xyz4", date: "2021-04-12", food: ["lime", "pork", "cols"]}
      ],
      date: id
    };

    const list = this

    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {

  }

  render() {
    return <div>
      {/*<button onClick={this.handleReload}>Reload</button> */}
      <section>
        <ul>
          {this.state.menu.map(
            (menu) => <li key={menu.id}>{menu.date}: Today we can confirm you such dishes as 
            <ul className="secmen">
              {menu.food.map(
                (food) => <li>{food}</li>
              )}
             
            </ul>
            </li>
          )}
        </ul>
      </section>
    </div>
  }
}

export default withRouter(PlaneMenu);