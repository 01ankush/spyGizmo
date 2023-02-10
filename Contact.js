import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 style={{backgroundColor:"#040166",marginTop:"-90px",padding:"1rem",justifyContent:"center",color:"white"}}>Contact Us </h2>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xayzejaw"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" className="btn" style={{backgroundColor:"rgb(237 2 214)"}}/>
          </form>
        </div>
      </div>
      <hr/>
      <h2 style={{backgroundColor:"#040166",padding:"1rem",justifyContent:"center",color:"white"}}>Find us on google map </h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.483118798068!2d77.63881451456766!3d28.97305167533923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c668fdea4d87f%3A0x8795def814a486e7!2sMIET%20College!5e0!3m2!1sen!2sin!4v1675749981091!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Wrapper>
  );
};

export default Contact;

