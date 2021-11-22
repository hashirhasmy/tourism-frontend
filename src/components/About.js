function About() {
  return (
    <div>
      <div
        className="hero bg-image"
        style={{
          background: 'url("img/about_hero.png") center no-repeat',
          paddingTop: '10rem',
        }}
      >
        <div className="container">
          <div className="main-heading">
            <h1 className="title">go.lk for all your travel needs</h1>
          </div>
          <a href="#about" className="btn btn-bg-yellow">
            Learn more
          </a>
        </div>
      </div>

      <section className="about" id="about">
        <div className="container" style={{ paddingBottom: '10rem' }}>
          <div className="about-content">
            <h5 className="section-head">
              <span
                className="heading"
                style={{
                  paddingTop: '15rem',
                  textAlign: 'left',
                }}
              >
                About us
              </span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor,
              luctus volutpat magna tellus sed ac sed sapien, luctus. Diam
              montes, posuere scelerisque sit. Mollis est lacus morbi
              vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Tempor, luctus volutpat magna tellus sed ac sed sapien,
              luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tempor, luctus volutpat magna tellus sed ac sed sapien, luctus.
              Diam montes,
            </p>
          </div>
          <div>
            <img className="about-img" src="img/about2.png" />
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container" style={{ paddingBottom: '30rem' }}>
          <div>
            <div
              style={{
                width: '40%',
                paddingTop: '15rem',
                float: 'right',
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor,
                luctus volutpat magna tellus sed ac sed sapien, luctus. Diam
                montes, posuere scelerisque sit. Mollis est lacus morbi
                vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Tempor, luctus volutpat magna tellus sed ac sed sapien,
                luctus. Diam montes, posuere scelerisque sit. Mollis est lacus
                morbi vestibulum.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Tempor, luctus volutpat magna tellus sed ac sed
                sapien, luctus. Diam montes, posuere scelerisque sit. Mollis est
                lacus morbi vestibulum.
              </p>
            </div>
            <div>
              <img
                style={{
                  width: '50%',

                  float: 'left',
                }}
                src="img/about1.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
