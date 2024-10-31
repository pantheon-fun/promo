// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cx from "rescript-classnames/src/Cx.bs.js";
import * as React from "react";
import * as ContainerComponentModuleScss from "./ContainerComponent.module.scss";

var css = ContainerComponentModuleScss;

function ContainerComponent(props) {
  var __inner = props.inner;
  var __className = props.className;
  var className = __className !== undefined ? __className : "";
  var inner = __inner !== undefined ? __inner : false;
  return React.createElement("div", {
              className: Cx.cx([
                    className,
                    inner ? css.innerContainer : css.container
                  ])
            }, props.children);
}

var make = ContainerComponent;

export {
  make ,
}
/* css Not a pure module */
