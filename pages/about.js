import React from "react";

import packageJson from "../package.json";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "sergiopgomes92@gmail.com",
      subject: "NextHub",
      message:
        "Hello!%0D%0A%0D%0ASaw%20your%20web%20app%20NextHub,%20and%20wanted%20to%20talk%20to%20you.%0D%0A%0D%0AThanks.",
      tags: ["nextjs", "react", "bootstrap", "github", "axios", "vercel"],
      emailLink: "",
      version: "",
    };
  }

  componentDidMount() {
    this.setState({
      emailLink: `mailto:${this.state.email}?subject=${this.state.subject}&body=${this.state.message}`,
    });
    if (packageJson && packageJson.version) {
      this.setState({
        version: packageJson.version,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">NextHub</h1>
          <section>
            <h4>Version: {this.state.version || "1.0.0"}</h4>
            <div className="list-group-horizontal-sm mb-4">
              {this.state.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-pill badge-dark mr-1 mt-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
          <p className="lead c-dark">
            An web app that re-implements a portion of GitHub's Search feature,
            the user search, using their public API.
          </p>
          <hr className="my-4" />
          <p className="font-weight-light">Developed by SergioPow</p>
          <img
            src="https://wakatime.com/badge/github/sergiogomes/react-next-hub-search.svg"
            className="mt-1 mb-3"
          />
          <address>
            <p className="font-italic">
              Reach me on:
              <a
                className="badge badge-pill badge-dark ml-1"
                href={this.state.emailLink}
              >
                {this.state.email}
              </a>
            </p>
          </address>
        </div>
      </div>
    );
  }
}

export default About;
