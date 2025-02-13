import React from 'react'

function Main() {
    return (
        <>
        <div className="hero border-1 pb-3">
          <div className="card bg-dark text-dark border-0 mx-3">
            <img className="card-img img-fluid"src="/assets/img2.jpeg"
              alt="Card"  style={{ height: '800px', objectFit: 'cover' }} />
            <div className="card-img-overlay d-flex  align-items-center">
              <div className="container">
                <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
                <p className="card-text fs-5 d-sm-block ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Main
