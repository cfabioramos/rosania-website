/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/rosania-capa.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center">
            <img
              alt="..." width="60%"
              className="n-logo"
              src={require("assets/img/logo_s.png")}
            ></img>
            <h2>Por um Mundo Mais Harmonioso</h2>
            <h3>Em busca de uma melhor qualidade de vida para os baianos</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
