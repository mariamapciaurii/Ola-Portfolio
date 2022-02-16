import "./Contact.css";

const About = () => {
  return (
    <div className="contact__container">
      <form className="form contact__container">
        <div className="name">
          <label for="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            className="firstName"
            tabIndex="1"
          />
          <label for="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            className="lastName"
            tabIndex="2"
          />
        </div>
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="email"
          placeholder="example@corp.com"
          tabIndex="3"
        />
        <label for="message">Message</label>

        <textarea
          placeholder="Start typing..."
          className="message"
          name="message"
        />
        <button className="contact__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default About;
