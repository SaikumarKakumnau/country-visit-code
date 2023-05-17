import './index.css'

const CountriesList = props => {
  const {countryDetails, onClickVisit} = props
  const {id, name, isVisited} = countryDetails

  const visitCountry = () => {
    onClickVisit(id)
  }

  return (
    <li className="countries-list-item">
      <div className="country-item">
        <p className="country-name">{name}</p>
        {isVisited ? (
          <p className="visit-heading">Visited</p>
        ) : (
          <button type="button" className="visit-button" onClick={visitCountry}>
            Visit
          </button>
        )}
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default CountriesList
