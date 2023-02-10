import styled from "styled-components";
const About = () => {

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h1 style={{backgroundColor:"#040166",marginTop:"-50px",padding:"1rem",textAlign:"center",textDecoration:"underline",color:"white"}}> About Us </h1>
            <p>
            SpyGimzo Security is a premier supplier of security and surveillance solutions to consumers and businesses of all sizes. We provide solutions and consulting services to more than 400 of the Fortune 500 companies, as well as more than 2,500 local and national government agencies, including the NYPD, the L.A. County Sheriff's Department, and the FBI. In addition, our clients proudly include over 40,000 small businesses from around the world.
            </p>
           
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.png"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgb(237 2 214);
      position: absolute;
      left: 50%;
      top: -4rem;
      z-index: -1;
    }
    &::before{
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgb(237 2 214);
      position: absolute;
      left: -11%;
      top: 9rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 80%;
      left: -42px;
      top: 35%;
      background-color: rgb(237 2 214);
      z-index: -1;
    }
    figure::before {
      content: "";
      width: 50%;
      height: 80%;
      left: 60%;
      top: -15%;
      background-color: rgb(237 2 214);
    }
  }
`;
export default About;