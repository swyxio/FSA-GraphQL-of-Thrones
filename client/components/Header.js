import React from "react";
import styled from "styled-components";
class Header extends React.Component {
  render() {
    const StyledSection1 = StyledSection.extend`justify-content: flex-start;`;
    const StyledSection2 = StyledSection.extend`justify-content: center;`;
    const StyledSection3 = StyledSection.extend`justify-content: flex-end;`;

    // <div id="DIV_11">
    //   <span id="SPAN_14">Connected to Codecademy</span>
    // </div>
    // <div id="DIV_16">
    //   <div id="DIV_17">hi</div>
    // </div>
    // <div id="DIV_22">
    //   <div id="DIV_23">
    //     <button id="BUTTON_24" />
    //     <div id="DIV_25">potato</div>
    //     hi3
    //   </div>
    // </div>
    return (
      <StyledHeader>
        <StyledNav>
          <StyledSection1>
            <div id="DIV_4">GraphQL of Thrones</div>
          </StyledSection1>
          <StyledSection2>
            <a href="/learn/learn-html" id="A_8">
              <i id="I_9" />
            </a>
            Learn HTML: Elements and Structure
          </StyledSection2>
          <StyledSection3>hi</StyledSection3>
        </StyledNav>
      </StyledHeader>
    );
  }
}

const StyledNav = styled.nav`
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: flex;
  height: 50px;
  text-decoration: none solid rgb(255, 255, 255);
  width: 100%;
  word-break: break-word;
  column-rule-color: rgb(255, 255, 255);
  align-items: center;
  perspective-origin: 720px 25px;
  transform-origin: 720px 25px;
  caret-color: rgb(255, 255, 255);
  background: rgb(21, 43, 57) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 0px none rgb(255, 255, 255);
  font: normal normal 300 normal 16px / normal Oxygen, Oxygen, "Segoe UI",
    "Helvetica Neue", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  padding: 0px 8px;
`;

const StyledHeader = styled.header`
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(32, 64, 86);
  height: 50px;
  left: 0px;
  min-height: auto;
  min-width: auto;
  position: relative;
  right: 0px;
  text-decoration: none solid rgb(32, 64, 86);
  top: 0px;
  width: 100%;
  word-break: break-word;
  column-rule-color: rgb(32, 64, 86);
  perspective-origin: 720px 25px;
  transform-origin: 720px 25px;
  caret-color: rgb(32, 64, 86);
  border: 0px none rgb(32, 64, 86);
  font: normal normal 300 normal 16px / normal Oxygen, Oxygen, "Segoe UI",
    "Helvetica Neue", sans-serif;
  outline: rgb(32, 64, 86) none 0px;
`;

const StyledSection = styled.section`
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: flex;
  height: 50px;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(255, 255, 255);
  // width: 356px;
  word-break: break-word;
  z-index: 1;
  column-rule-color: rgb(255, 255, 255);
  align-items: center;
  perspective-origin: 178px 25px;
  transform-origin: 178px 25px;
  caret-color: rgb(255, 255, 255);
  border: 0px none rgb(255, 255, 255);
  flex: 1 1 0%;
  font: normal normal 300 normal 16px / normal Oxygen, Oxygen, "Segoe UI",
    "Helvetica Neue", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
`;

export default Header;
