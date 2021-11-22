import './Contact.css';

function Contact() {
  return (
    <div>
      <div
        className="container"
        style={{
          marginTop: '15rem',
        }}
      ></div>

      <section class="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">
                We are ever appreciated to accept to all your inquiries in order
                to give a valuable service and make your experience a smooth one
                from starting to end. Feel free to contact us via the
                information section to clarify any concerns and leave your
                feedback regarding your stay at our Reserve Air!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i
                className="fa fa-phone-square"
                aria-hidden="true"
                style={{ fontSize: '50px' }}
              ></i>
              <div>077-6808389</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i
                className="fa fa-envelope"
                aria-hidden="true"
                style={{ fontSize: '50px' }}
              ></i>
              <a className="d-block" href="mailto:hashirhasmy111@gmail.com">
                hashirhasmy111@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Visit us!</h2>
            <hr className="divider my-4" />
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <p1>No-12/8,</p1> <br />
                <p1> Hill Street, </p1>
                <br />
                <p1>Dehiwala </p1>
                <br />
                <p1>Tel No - 0112244552</p1>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <p1>No-46,</p1> <br />
                <p1> Katubedda, </p1>
                <br />
                <p1>Moratuwa </p1>
                <br />
                <p1>Tel No - 0113421900</p1>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <p1>No-128,</p1> <br />
                <p1> Katugastota road, </p1>
                <br />
                <p1>Kandy </p1>
                <br />
                <p1>Tel No - 0383411904</p1>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <p1>No-20,</p1> <br />
                <p1> Aluthgama Road, </p1>
                <br />
                <p1>Mathugama </p1>
                <br />
                <p1>Tel No - 0342234560</p1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h5 className="section-head">
            <span className="heading">Contact</span>
            <span className="sub-heading">Get in touch with us</span>
          </h5>

          <form
            action="#"
            className="form contact-form"
            style={{
              backgroundColor: '#1e1c34',
            }}
          >
            <div className="input-group-wrap">
              <div className="input-group">
                <input
                  name="name2"
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                />
                <span className="bar" />
              </div>
              <div className="input-group">
                <input
                  name="email2"
                  type="email"
                  className="input"
                  placeholder="E-mail"
                  required
                />
                <span className="bar" />
              </div>
            </div>
            <div className="input-group">
              <input
                name="subject2"
                type="text"
                className="input"
                placeholder="Subject"
                required
              />
              <span className="bar" />
            </div>
            <div className="input-group">
              <textarea
                name="message2"
                className="input"
                cols={30}
                rows={8}
                placeholder="Message"
                required
                defaultValue={''}
              />
              <span className="bar" />
            </div>
            <button
              name="submit2"
              type="submit"
              className="btn form-btn btn-bg-yellow"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
