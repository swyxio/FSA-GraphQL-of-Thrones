import React from "react";
import TweetButton from "./TweetButton";
import { withRouter, Link } from "react-router-dom";

const WinScreenStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};
const WinMsgStyle = {
  height: "100px",
  margin: "0 auto"
};
class LandingPage extends React.Component {
  render() {
    return (
      <div className="bg-dark-gradient">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style-10 font-title">
          <div className="container">
            <div className="row flex-1">
              <div className="col-12 col-lg-4" />
              <div className="col-12 col-lg-4 text-center">
                <a className="navbar-brand" href="#">
                  {/*<img src="./assets/img/logos/logo.png" width="30px" className="mr-2" />*/}
                  <b>GraphQL of Thrones</b>
                </a>
                <button
                  className="navbar-toggler pull-right"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent10"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
              <div className="col-12 col-lg-4">
                <div
                  className="collapse navbar-collapse flex-1"
                  id="navbarSupportedContent10"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active mx-2">
                      <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <Link className="nav-link" to="/learn">
                        Learn
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          <br /> <br />
          <section className="py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto text-center">
                  <h1 className="my-3 font-title">
                    Learn GraphQL by helping Game of Thrones characters!
                  </h1>
                  <p className="paragraph font-title p-3">
                    GraphQL is simply a specification, which means{" "}
                    <b>
                      you don't need to know React, or Javascript, or even how
                      to code
                    </b>{" "}
                    to be a user of it. In fact, it is so simple that even
                    people in the Game of Thrones world could use it!
                    <br />
                    <br />
                    Interested? Let's begin. Click the button below to get
                    started.
                  </p>
                  <Link
                    to="/learn"
                    className="my-4 btn btn-warning btn-rounded"
                  >
                    {/*<i className="m-2 fa fa-download" />*/}GraphQL is Coming
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <br /> <br />
          <section className="feature-style-2 bg-hue-yellow py-4">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 p-3">
                  <div className="text-left">
                    <h4 className="font-title font-b-line py-3 title">
                      Efficient
                    </h4>
                    <p>
                      GraphQL minimizes the amount of data that needs to be
                      transferred over the network and thus majorly improves
                      applications operating under these conditions.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 p-3">
                  <div className="text-left">
                    <h4 className="font-title font-b-line py-3 title">
                      Polyglot
                    </h4>
                    <p>
                      With GraphQL, each client can access precisely the data it
                      needs, regardless of backend or frontend language.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 p-3">
                  <div className="text-left">
                    <h4 className="font-title font-b-line py-3 title">
                      Free and Open Source
                    </h4>
                    <p>
                      GraphQL and GraphQL of Thrones are all FOSS, so feel free
                      to fork and contribute!
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 p-3">
                  <div className="text-left">
                    <h4 className="font-title font-b-line py-3 title">
                      Rapid Prototyping
                    </h4>
                    <p>
                      GraphQL promotes fast development & expectation for rapid
                      feature development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br /> <br />
          <section className="py-5 bg-dark cwhite">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8 text-center align-center justify-center">
                  <h4 className="font-title">
                    Want to learn more? Check out HowToGraphQL!
                  </h4>
                </div>
                <div className="col-12 col-md-4 text-center align-center justify-center">
                  <a className="btn btn-danger flat">
                    <span className="cwhite">
                      {/*<i className="m-2 fa fa-download" />*/}
                      <a href="https://www.howtographql.com/" target="_blank">
                        Let's get serious
                      </a>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <br /> <br />
          <section
            className="py-5 cwhite background-fixed p-relative"
            style={{ backgroundImage: "url('./underexpress/red_clouds.jpeg')" }}
          >
            <div className="overlay op-5" />
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8 mx-auto text-center">
                  <h1 className="font-title">Tell your friends!!!</h1>
                  <p className="paragraph p-3 font-title">
                    Friends don't let friends not know about GraphQL. Tell your
                    Tweeple!
                  </p>
                  <div className="w-100 my-3">
                    <div className="m-4 btn btn-outline-primary btn-rounded">
                      {/*<i className="m-4 fa fa-facebook" />*/}
                      <TweetButton text="TweetThis" />
                    </div>
                    <div className="m-4 btn btn-outline-info btn-rounded">
                      {/*<i className="m-4 fa fa-twitter" />*/}
                      <TweetButton text="TweetThat" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="footer-style-4 p-3 bg-hue-dark cwhite">
          <div className="row">
            <div className="col-12 text-center">
              {/*<img src="./assets/img/logos/logo.png" width="30px" className="mb-3" />*/}
              <ul className="mb-3 font-title p-0">
                <li className="inline">
                  <Link to="/" className="uppercase m-1 inline">
                    <span>Home | </span>
                  </Link>
                </li>
                <li className="inline">
                  <Link to="/learn" className="uppercase m-1 inline">
                    Learn
                  </Link>
                </li>
              </ul>
              <ul className="mb-3 p-0">
                <li className="inline">
                  <a href="#notimplementedyet" className=" p-2 m-1 inline h5">
                    Facebook{/*<i className="fa fa-facebook" />*/}
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://twitter.com/swyx"
                    className="p-2 m-1 inline h5"
                  >
                    Twitter{/*<i className="fa fa-twitter" />*/}
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://github.com/sw-yx/FSA-GraphQL-of-Thrones"
                    className="p-2  m-1 inline h5"
                  >
                    Github{/*<i className="fa fa-instagram" />*/}
                  </a>
                </li>
              </ul>
              <small className="lighter mb-3 op-8">
                Landing Page Design ©️ 2017 UnderExpress
              </small>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(LandingPage);
