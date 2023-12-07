// Write your code here

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', arrayList: []}
  titleText = event => {
    this.setState({title: event.target.value})
  }
  dateText = event => {
    this.setState({date: event.target.value})
  }
  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const dates = format(new Date(date), 'dd MMMM yyyy, EEEE')
    const object = {
      id: uuidv4(),
      title,
      dates,
      isFav: false,
    }
    this.setState(prevState => ({
      arrayList: [...prevState.arrayList, object],
      title: '',
      date: '',
    }))
  }

  toggleItem = id => {
    this.setState(prevState => ({
      arrayList: prevState.arrayList.map(every => {
        if (every.id === id) {
          return {...every, isFav: !prevState.isFav}
        }
        return every
      }),
    }))
  }

  render() {
    const {arrayList, title, date} = this.state
    return (
      <div>
        <div>
          <h1>Add Appointment</h1>
          <form onSubmit={this.addAppointment}>
            <label>TITLE</label>
            <input
              type="text"
              placeholder="Title"
              onChange={this.titleText}
              value={title}
            />
            <label>DATE</label>
            <input type="date" onChange={this.dateText} value={date} />
            <button type="submit">Add</button>
          </form>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
          alt="appointments"
        />
        <hr />
        <div>
          <h1>Appointments</h1>
          <button type="button">Starred</button>
        </div>
        <ul>
          {arrayList.map(each => (
            <AppointmentItem
              key={each.id}
              arrayList={each}
              toggleItem={this.toggleItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Appointments
