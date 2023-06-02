import React from "react";
import ReactDOM from "react-dom";

const ELEMENT = React.createElement;
//element 를 생성한다 (태그 ,스타일 ,텍스트)
let counter = 0;

function handlePlusClick() {
  counter = counter + 1;
  renderCounter();
  //카운트를 할때마다 렌더링
}

function handleMinusClick() {
  counter = counter - 1;
  renderCounter();
}

function Reset() {
  counter = 0;
  renderCounter();
}

function renderCounter() {
  const element = ELEMENT(
    "div",
    null,
    ELEMENT("h1", null, counter.toString()),
    ELEMENT("button", { onClick: handlePlusClick }, "+"),
    ELEMENT("button", { onClick: handleMinusClick }, "-"),
    ELEMENT("button", { onClick: Reset }, "Reset")
  );

  ReactDOM.render(element, document.getElementById("root"));
}

export default renderCounter;
