import React, { useEffect } from 'react'

export default function SearchBoxAndAddButton(props) {
  useEffect(() => {
    document.getElementById('searchBox').setAttribute("placeholder", "Search by " + props.criteria)
  })
    return (
    <div>
        <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-xs-5 col sm-5 col md-5">
            <button className="btn btn-outline-primary" type="submit">
              {"Add " + props.object}
            </button>
          </div>
          <div className="col-xs-5 col sm-5 col md-5">
            <form className="d-flex">
              <input
                className="form-control me-1"
                id='searchBox'
                type="search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-primary" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
