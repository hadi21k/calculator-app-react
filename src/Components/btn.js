export const btn_actions = {
  ADD: "ADD",
  THEME: "THEME",
  CALC: "CALC",
  DELETE: "DELETE",
};
const btnStyles =
  "font-bold text-gray-900 transition duration-500 bg-gray-100 border border-black rounded-lg py-5 md:py-4 hover:bg-gray-300";
export const btns = [
  { display: "C", action: btn_actions.DELETE, class: btnStyles },
  { display: "(", action: btn_actions.ADD, class: btnStyles },
  { display: ")", action: btn_actions.ADD, class: btnStyles },
  { display: "/", action: btn_actions.ADD, class: btnStyles },
  { display: "7", action: btn_actions.ADD, class: btnStyles },
  { display: "8", action: btn_actions.ADD, class: btnStyles },
  { display: "9", action: btn_actions.ADD, class: btnStyles },
  { display: "x", action: btn_actions.ADD, class: btnStyles },
  { display: "4", action: btn_actions.ADD, class: btnStyles },
  { display: "5", action: btn_actions.ADD, class: btnStyles },
  { display: "6", action: btn_actions.ADD, class: btnStyles },
  { display: "-", action: btn_actions.ADD, class: btnStyles },
  { display: "1", action: btn_actions.ADD, class: btnStyles },
  { display: "2", action: btn_actions.ADD, class: btnStyles },
  { display: "3", action: btn_actions.ADD, class: btnStyles },
  { display: "+", action: btn_actions.ADD, class: btnStyles },
  { display: "Theme", action: btn_actions.THEME, class: btnStyles },
  { display: "0", action: btn_actions.ADD, class: btnStyles },
  { display: ".", action: btn_actions.ADD, class: btnStyles },
  { display: "=", action: btn_actions.CALC, class: btnStyles },
];
