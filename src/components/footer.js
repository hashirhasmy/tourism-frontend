function Footer() {
  return (
    <footer className="footer" style={{ marginBottom: '100rem' }}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-brand">
            <a href="index.html" className="logo">
              <img
                className="logo-image"
                src="img/footer-logo.png"
                alt="image not found"
              />
            </a>
            <br />
            <br />
            <div className="paragraph"></div>
          </div>
          <div className="social-media-wrap">
            <h4 className="footer-heading">
              <b> Contact us:</b>
            </h4>
            <span>
              <img src="img/phone.png" alt="phone number" />
              <a
                href="tel:0777487720 "
                style={{ marginLeft: '20px', fontWeight: 'bold' }}
                className="footer-link2"
              >
                077 748 7720{' '}
              </a>
              <a
                href="tel:0765807720 "
                style={{ marginLeft: '10px', fontWeight: 'bold' }}
                className="footer-link2"
              >
                076 680 8389{' '}
              </a>
            </span>{' '}
            <br />
            <span className="email-add">
              <img src="img/email.png" alt="email address" />
              <a
                href="mailto:hashirhasmy111@gmail.com "
                style={{ marginLeft: '20px', fontWeight: 'bold' }}
                className="footer-link2"
              >
                go.lk@gmail.com{' '}
              </a>
            </span>
            <br />
            <span className="email-add">
              <img src="img/address.png" alt="address" />
              <a
                href="#"
                style={{ marginLeft: '20px', fontWeight: 'bold' }}
                className="footer-link2"
              >
                Address
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bot-wrapper">
        © 2021 <b> GO.LK (PVT) Ltd. </b> All Rights Reserved
        <br />
        Website Designed and Developed by{' '}
        <a
          href="mailto:hashirhasmy111@gmail.com"
          target="_blank"
          className="footer-link2"
        >
          <b>GO.LK (PVT) Ltd </b>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
