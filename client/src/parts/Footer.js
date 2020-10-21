import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Footer = () => {

  const style = { enableBackground: "new 0 0 512 512" };

  return (
    <div className="footer">
      <h1>Bulgatta</h1>

      <div className="footer-row">
        
        <Menu className="footer-nav footer__compact" />

        <ul className="footer-nav footer__compact">
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/shop">coffee</Link></li>
          <li><Link to="/shop">tea</Link></li>
          <li><Link to="/about">cold brew</Link></li>
          <li><Link to="/shop">subscriptions</Link></li>
          <li><Link to="/shop">goods</Link></li>
          <li><Link to="/shop">supplies</Link></li>
        </ul>

        {/* contact us */}
        <ul className="footer-nav">
          <li>Contact Us</li>
          <li>Address:<br /> 123 Street Name, City, United Kingdom</li>
          <li>Phone:<br /> (123) 456-789</li>
          <li>Email:<br /> mail@company.com</li>
          <li>Hours:<br /> Mon-Fri 9:00AM-8:00PM<br /> Sat 10:00AM-8:00PM<br /> Sun 10:00AM-6:00PM</li>
        </ul>
      </div>

      <div className="social">
          <ul>

            <li>
              <a href="https://www.youtube.com/">
                <svg className="social--icon" x="0px" y="0px"
                  viewBox="0 0 512 512" style={style}>
                  <path d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80
                      c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904
                      C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728
                      c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816
                      c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096
                      C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z"/>
                </svg>
              </a>
            </li>

            <li>
              <a href="https://www.twitter.com/">
                <svg className="social--icon" x="0px" y="0px"
                  viewBox="0 0 512 512" style={style}>
                  <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                    C480.224,136.96,497.728,118.496,512,97.248z"/>
                </svg>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/">
                <svg className="social--icon" x="0px" y="0px"
                  viewBox="0 0 512 512" style={style}>
                  <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160
                    C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48
                    h192c61.76,0,112,50.24,112,112V352z"/>
                  <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336
                    c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
                  <circle cx="393.6" cy="118.4" r="17.056"/>
                </svg>
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/">
                <svg className="social--icon" x="0px" y="0px"
                  viewBox="0 0 512 512" style={style}>
                  <path d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h192V336h-64v-80h64v-64c0-53.024,42.976-96,96-96h64v80
                        h-32c-17.664,0-32-1.664-32,16v64h80l-32,80h-48v176h96c35.296,0,64-28.704,64-64V64C512,28.704,483.296,0,448,0z"/>
                </svg>
              </a>
            </li>

            <li>
              <a href="https://www.google.com/">
                <svg className="social--icon" x="0px" y="0px"
                  viewBox="0 0 512 512" style={style}>
                  <polygon points="448,224 448,160 416,160 416,224 352,224 352,256 416,256 416,320 448,320 448,256 512,256 512,224 		"/>
                  <path d="M160,224v64h90.528c-13.216,37.248-48.8,64-90.528,64c-52.928,0-96-43.072-96-96c0-52.928,43.072-96,96-96
                    c22.944,0,45.024,8.224,62.176,23.168l42.048-48.256C235.424,109.824,198.432,96,160,96C71.776,96,0,167.776,0,256
                    s71.776,160,160,160s160-71.776,160-160v-32H160z"/>
                </svg>
              </a>
            </li>

            <li>
              <h2>
                FOLLOW US
              </h2>
            </li>

          </ul>
        </div>
      <div className="copyright">
        <span>
          © 2020 Coffee Company. All rights reserved.
        </span>
      </div>

    </div>
  );
};

export default Footer;
