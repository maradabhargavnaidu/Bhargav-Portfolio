const Contact = () => {
  return (
    <div className="contact-content flex-contact" id="contacts">
      <h1 class="center">Get In Touch</h1>
      <form action="https://formspree.io/f/xyyakylo" method="post">
        <div class="mb-3">
          <label htmlFor="name" className=" contact-item center">
            Name:
          </label>
          <br />
          <input type="text" id="name" />
        </div>
        <div class="mb-3">
          <label htmlFor="email" className="contact-item center">
            Email address:
          </label>
          <br />
          <input type="email" id="email" name="email" />
        </div>
        <div class="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="center contact-item"
          >
            Say:
          </label>
          <br />
          <textarea
            name="message"
            id="exampleFormControlTextarea1 center"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <button type="submit" className="btns">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
