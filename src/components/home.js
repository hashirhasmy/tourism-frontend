function Home() {
  return (
    <div>
      <div
        className="hero bg-image"
        style={{
          background: 'url("img/home_hero.png") center no-repeat',
          paddingTop: '10rem',
        }}
      >
        <div className="container">
          <div className="main-heading">
            <h1 className="title">Find New Possibilities</h1>
            <h2 className="subtitle">Your everyday travel buddy</h2>
          </div>
          <a href="#about" className="btn btn-bg-yellow">
            Check it out!
          </a>

          <section className="booking" style={{ paddingTop: '10rem' }}>
            <div className="container">
              <form action="#" className="book-form">
                <div className="input-group">
                  <label htmlFor="name" className="input-label">
                    Name
                  </label>
                  <input
                    name="name1"
                    type="text"
                    className="input"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email" className="input-label">
                    Email Address
                  </label>
                  <input
                    name="email1"
                    type="email"
                    className="input"
                    id="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="check-in" className="input-label">
                    Check in
                  </label>
                  <input
                    name="check-in1"
                    type="date"
                    className="input"
                    id="check-in"
                    placeholder="DD/MM/YYYY"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="check-out" className="input-label">
                    Check out
                  </label>
                  <input
                    name="check-out1"
                    type="date"
                    className="input"
                    id="check-out"
                    placeholder="DD/MM/YYYY"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="guestno" className="input-label">
                    No. of Guests
                  </label>
                  <select
                    name="guestno1"
                    className="options"
                    id="guest"
                    required
                  >
                    <option value={0}>No. of Guests</option>
                    <option value={0}>1</option>
                    <option value={0}>2</option>
                    <option value={0}>3</option>
                    <option value={0}>4</option>
                    <option value={0}>5</option>
                    <option value={0}>6</option>
                    <option value={0}>7</option>
                    <option value={0}>8</option>
                    <option value={0}>9</option>
                    <option value={0}>10</option>
                  </select>
                </div>
                <button
                  name="submit1"
                  type="submit"
                  className="btn form-btn btn-bg-yellow"
                >
                  Book Now!
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      <section
        className="about"
        id="about"
        style={{
          paddingBottom: '55rem',
        }}
      >
        <div className="container">
          <h5 className="section-head">
            <span className="heading">About us</span>
            <span className="sub-heading">Your everyday travel buddy</span>
          </h5>
          <div
            className="about-content"
            style={{
              paddingTop: '25rem',
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor,
              luctus volutpat magna tellus sed ac sed sapien, luctus. Diam
              montes, posuere scelerisque sit. Mollis est lacus morbi
              vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Tempor, luctus volutpat magna tellus sed ac sed sapien,
              luctus.
            </p>
            <a href="/about" className="btn-dark btn-bg-black">
              Learn More
            </a>
          </div>
          <div>
            <img className="about-img" src="img/home_about.png" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h5 className="section-head">
            <span className="heading"> WHY ARE WE THE BEST?</span>
            {/* <span className="sub-heading">Your everyday travel buddy</span> */}
          </h5>
          <div className="why-img">
            <div className="why-content">
              <img src="img/quality.png" />
              <p>Quality Service</p>
            </div>
            <div className="why-content">
              <img src="img/booking.png" />
              <p>Easy booking</p>
            </div>
            <div className="why-content">
              <img src="img/review.png" />
              <p>Great reviews</p>
            </div>
            <div className="why-content">
              <img src="img/service.png" />
              <p>Best packages</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="hotels"
        style={{
          paddingTop: '15rem',
          paddingBottom: '15rem',
        }}
      >
        <div className="container">
          <h5 className="section-head">
            <span className="heading">PACKAGES</span>
            <span className="sub-heading">
              Affordable packages with the best experience
            </span>
          </h5>
          <div className="grid">
            <div
              className="grid-item featured-hotel"
              style={{ height: '260px', width: '390px' }}
            >
              <img
                src="img/img_2.jpg"
                alt="image not found"
                className="hotel-image"
                style={{ height: '256px', width: '384px', opacity: '10%' }}
              />
              <h5 className="hotel-name">Super Travel</h5>
              {/* <span className="hotel-price">From Rs.15,000/Night</span> */}
              <div className="hotel-rating">
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
              </div>
              <a href="/Booking" className="btn btn-bg-yellow">
                {' '}
                Book now
              </a>
            </div>
            <div
              className="grid-item featured-hotel"
              style={{ height: '260px', width: '390px' }}
            >
              <img
                src="img/img_3.jpg"
                alt="image not found"
                className="hotel-image"
                style={{ height: '256px', width: '384px', opacity: '10%' }}
              />
              <h5 className="hotel-name">Sightseeing</h5>
              {/* <span className="hotel-price">From Rs.15,000/Night</span> */}
              <div className="hotel-rating">
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
              </div>
              <a href="/Booking" className="btn btn-bg-yellow">
                {' '}
                Book now
              </a>
            </div>
            <div
              className="grid-item featured-hotel"
              style={{ height: '260px', width: '390px' }}
            >
              <img
                src="img/img_4.jpg"
                alt="image not found"
                className="hotel-image"
                style={{ height: '256px', width: '384px', opacity: '10%' }}
              />
              <h5 className="hotel-name">Everyday Travel</h5>
              {/* <span className="hotel-price">From Rs.15,000/Night</span> */}
              <div className="hotel-rating">
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star rating" />
                <i className="fa fa-star-half rating" />
              </div>
              <a href="/Booking" className="btn btn-bg-yellow">
                {' '}
                Book now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="offer"
        style={{
          marginBottom: '15rem',
        }}
      >
        <div className="container">
          <div className="offer-content">
            <div className="discount">Current Offer!</div>
            <h5 className="hotel-name">CAN’T FIND THE PACKAGE YOU NEED?</h5>

            <p className="paragraph">
              <b>
                You can create your own package by adding the activities you
                need. Get started now!
              </b>
            </p>
            <p />
            <a href="/Booking" className="btn btn-bg-yellow">
              Create package
            </a>
          </div>
        </div>
      </section>

      <section className="hotels">
        <div className="container">
          <h5 className="section-head">
            <span className="heading">POPULAR DESTINATIONS</span>
            <span className="sub-heading">
              Affordable packages with the best experience
            </span>
          </h5>
          <div className="grid">
            <div
              className="grid-item featured-hotel"
              style={{ height: '260px', width: '390px' }}
            >
              <img
                src="img/destination1.png"
                alt="image not found"
                className="hotel-image"
                style={{ height: '256px', width: '384px' }}
              />
            </div>
            <div
              className="grid-item featured-hotel"
              style={{ height: '260px', width: '390px' }}
            >
              <img
                src="img/destination2.png"
                alt="image not found"
                className="hotel-image"
                style={{ height: '256px', width: '384px' }}
              />
            </div>
            <div
              className="grid-item featured-hotel"
              style={{ height: '260px', width: '390px' }}
            >
              <img
                src="img/destination3.png"
                alt="image not found"
                className="hotel-image"
                style={{ height: '256px', width: '384px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
