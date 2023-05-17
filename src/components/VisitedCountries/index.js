import './index.css'

const VisitedCountries = props => {
  const {visitedDetails, onClickRemove} = props
  const {id, imageUrl, name} = visitedDetails

  const removeCountry = () => {
    onClickRemove(id)
  }

  return (
    <li className="visited-list-item">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <div className="visited-country-details">
        <p className="name">{name}</p>
        <button type="button" className="remove-button" onClick={removeCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
