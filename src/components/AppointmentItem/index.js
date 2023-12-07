// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {arrayList, toggleItem} = props
  const {id, dates, title, isFav} = arrayList
  const toggleBtn = () => {
    toggleItem(id)
  }
  const imgUrl = isFav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  return (
    <li key={id}>
      <div>
        <p>{title}</p>
        <button type="button" data-testid="star" onClick={toggleBtn}>
          <img src={imgUrl} alt="star" />
        </button>
      </div>
      <p>{dates}</p>
    </li>
  )
}

export default AppointmentItem
