import React from "react";

//INTERNAL IMPORT
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "./ReactICON/index";

const Footer = () => {
  const social = [
    {
      link: "#",
      icon: <TiSocialTwitter />,
    },
    {
      link: "#",
      icon: <TiSocialFacebook />,
    },
    {
      link: "#",
      icon: <TiSocialLinkedin />,
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 order-1 order-lg-4 order-xl-1">
            <div className="footer__logo">
              <img src="img/logo.svg" alt="" />
            </div>

            <p className="footer__tagline">
              The Crypto Ascend team works hard <br />
              to deliver exceptional financial results <br />
              and increase our clients' revenue.
            </p>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-3 order-md-2 order-lg-2 order-xl-3 offset-md-2 offset-lg-0">
            <h6 className="footer__title">Company</h6>
            <div className="footer__nav">
              <a href="#">About Centure</a>
              <a href="#">Our news</a>
              <a href="#">License</a>
              <a href="#">Contacts</a>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6 col-xl-4 order-2 order-md-3 order-lg-1 order-xl-2">
            <div className="row">
              <div className="col-12">
                <h6 className="footer__title">Services &amp; Features</h6>
              </div>
              <div className="col-6">
                <div className="footer__nav">
                  <a href="#">Invest</a>
                  <a href="#">Token</a>
                  <a href="#">Affiliate</a>
                  <a href="#">Contest</a>
                </div>
              </div>
              <div className="col-6">
                <div className="footer__nav">
                  <a href="#">Safety</a>
                  <a href="#">Automatization</a>
                  <a href="#">Analytics</a>
                  <a href="#">Reports</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-4 order-md-4 order-lg-3 order-xl-4">
            <h6 className="footer__title">Support</h6>
            <div className="footer__nav">
              <a href="#">Help center</a>
              <a href="#">How it works</a>
              <a href="#">Privacy policy</a>
              <a href="#">Terms &amp; conditions</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <div className="footer__social">
                {social.map((social, index) => (
                  <a key={index} href={social.link} target="_blank">
                    <i className="ti ti-brand-facebook">{social.icon}</i>
                  </a>
                ))}
              </div>

              <small className="footer__copyright">
                © Crypto Ascend, 2025. Created with{" "}
                <span style={{ color: "red", fontSize: "1.2em" }}>❤️</span>
                {/* <a
                  href="https://www.linkedin.com/in/pranav-singh-solanki-294999219/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a> */}
                .
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
