import React from 'react';
import './currently.css';
import * as Api from 'typescript-fetch-api'
import { withRouter } from "react-router";
import moment from 'moment'
import Moment from 'react-moment';


const api = new Api.DefaultApi()

class CurrentEventsProgress extends React.Component {

    constructor(props) {
        super(props);
        const id =  this.props.match?.params.id || moment().format('YYYY-MM-DD');
        console.log(id);

        

        this.state = { 
            events: [{id:'xyz1', date: "2021-04-21", from: "Minsk", time: "19:00", to:"Peking"},
            {id:'pop', date: "2021-04-21", from: "Moscow", time: "21:00", to: "Canberra"}
        ],
            date: id 
        };

        this.handleReload = this.handleReload.bind(this);
        this.handleReload();
    }


    async handleReload(event) {
        //const response = await api.events({ date: '2021-03-25'/*this.state.targetDate*/ });
        //this.setState({ events: response });
    }


    render() {
        return <div>
            {/*<button onClick={this.handleReload}>Reload</button> */}
            <section>
            <h1>Flights on <Moment format="YYYY/MM/DD">{this.state.date}</Moment> </h1>
            <ul>
               {this.state.events.map(
                   (event) => 
                        <li key={event.id}>{event.time}:  The plane is arriving from {event.from} to {event.to}</li>)}
            </ul>
            </section>
            <h2 className="GL">Good luck in your flight!</h2>
        </div>
    }
}

export default withRouter(CurrentEventsProgress);