import React from "react";
import styled from "styled-components";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <Wrapper>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <img src="./images/logo.png" style={{ marginLeft: "-50px", marginTop: "-7px" }} />
              <hr />
              <p>SpyGimzo Security is a premier supplier of security and surveillance solutions to consumers and businesses of all sizes. We provide solutions and consulting services to more than 400 of the Fortune 500 companies, as well as more than 2,500 local and national government agencies, including the NYPD, the L.A. County Sheriff's Department, and the FBI. In addition, our clients proudly include over 40,000 small businesses from around the world.</p>
            </div>
            <div className="footer-about">
              <h3>Quick links
              </h3>
              <ul>
                <p><li><NavLink to="/" >Home</NavLink></li><br /></p>
                <p><li><NavLink to="/about" >About us</NavLink></li><br /></p>
                <p><li><NavLink to="/products">Products</NavLink></li><br /></p>
                <p><li><NavLink to="/contact">Contact</NavLink></li><br /></p>
              </ul>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                <NavLink
                    to="https://discordapp.com/users/kothiyal01#1778/"
                    target="_blank" rel="noreferrer">
                      <FaDiscord className="icons"/>
                  </NavLink>
                </div>
                <div>
                <NavLink
                    to="https://www.instagram.com/ankush_kothiyal/"
                    target="_blank" rel="noreferrer">
                      <FaInstagram className="icons"/>
                    
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="https://www.linkedin.com/in/ankush-kumar-kothiyal-668b4020b"
                    target="_blank" rel="noreferrer">
                    <AiFillLinkedin className="icons" />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="footer-subscribe">
              <h3>Newsletter <div className="underline"><span></span></div></h3>
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />
                <input type="submit" value="subscribe" className="btn" style={{ backgroundColor: "rgb(237 2 214)" }} />
              </form>
              <br />
              <h3> Call Us</h3>
              <h3>+91 9690559904</h3>
            </div>


          </div>

          <div className="footer-bottom--section">
            <hr />
            <div style={{ textAlign: "center" }}>
              <p>
                @{new Date().getFullYear()} SpyGizmo. All Rights Reserved
              </p>
            </div>
          </div>
        </footer>

      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 3rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
    .btn{
      margin:20px;
    }
  }
`;

export default Footer;