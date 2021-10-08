import React, { useRef, useState } from "react";
import { btns, btn_actions } from "./btn";
const Calculator = () => {
  const [expression, setExpression] = useState("");
  const divRef = useRef();
  const btnsRef = useRef();
  const onClick = (item) => {
    if (item.action === btn_actions.ADD) {
      animateSpan(item.display);
      const oper = item.display !== "x" ? item.display : "*";
      setExpression(expression + oper);
    }
    if (item.action === btn_actions.DELETE) {
      const div = divRef.current;
      div.innerHTML = "";
      setExpression("");
    }
    if (item.action === btn_actions.CALC) {
      if (expression.trim().length <= 0) return;
      const div = divRef.current;
      const cloneNode = div.cloneNode(true);
      try {
        let res = eval(expression);
        setExpression(res.toString());
        setTimeout(() => {
          div.innerHTML = "";
          animateSpan(Math.floor(res * 1000000000) / 1000000000);
        }, 200);
      } catch {
        setTimeout(() => {
          cloneNode.innerHTML = "Syntax err";
        }, 200);
      } finally {
        console.log("calc Complete");
      }
    }
  };
  const animateSpan = (item) => {
    const div = divRef.current;
    const span = document.createElement("span");
    span.className = "overflow-hidden transition duration-100";
    span.innerHTML = item;
    div.appendChild(span);
    span.style.opacity = "0";
    const width = span.offsetWidth + "px";
    span.style.width = "0";
    span.style.width = "0";
    setTimeout(() => {
      span.style.opacity = "1";
      span.style.width = width;
    }, 100);
  };
  return (
    <div className="flex flex-col justify-end w-full min-h-full px-3 py-4 overflow-hidden text-black bg-gray-100 rounded-lg shadow-2xl calc-container">
      <div>
        <div
          ref={divRef}
          className="flex items-center justify-end px-3 py-6 text-xl font-semibold sm:text-3xl text-container"
        ></div>
        <div ref={btnsRef} className="grid grid-cols-4 gap-1 btn-container">
          {btns.map((item, i) => {
            return (
              <button
                onClick={() => onClick(item)}
                key={i}
                className={item.class}
              >
                {item.display}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
