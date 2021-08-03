
const Contact = () => {
  return (
    <div>
      <div className="mx-5 mt-5">
        <h1 className="card-header">Contact Information</h1>
        <div className="card-body">
          <p className="card-text">
            Feel free to send me an
            <a
              className="alert-link text-primary"
              href="mailto:jeffreysebastian@pursuit.org"
            >
              {" "}
              email!
            </a>
          </p>
          <p className="card-text">
            You can also check my
            <a
              className="alert-link text-primary"
              href="https://github.com/JeffreySebastian-Pursuit?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub.
            </a>
          </p>
          <p className="card-text">
            I also invite you to connect with me on
            <a
              className="alert-link text-primary"
              href="https://www.linkedin.com/in/jeffrey-sebastian/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
