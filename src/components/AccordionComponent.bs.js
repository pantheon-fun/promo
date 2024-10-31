// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cx from "rescript-classnames/src/Cx.bs.js";
import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Core__Option from "@dzakh/rescript-core/src/Core__Option.bs.js";
import * as TextComponent from "./TextComponent.bs.js";
import * as AccordionComponentModuleScss from "./AccordionComponent.module.scss";

var css = AccordionComponentModuleScss;

function AccordionComponent(props) {
  var __className = props.className;
  var className = __className !== undefined ? __className : "";
  var match = React.useState(function () {
        
      });
  var setMaybeOpenedPanelIdx = match[1];
  var maybeOpenedPanelIdx = match[0];
  var match$1 = React.useState(function () {
        return 0;
      });
  var setOpenedAnswerHeight = match$1[1];
  var openedAnswerHeight = match$1[0];
  var accordionRef = React.useRef(null);
  return React.createElement("ul", {
              ref: Caml_option.some(accordionRef),
              className: Cx.cx([
                    className,
                    css.accodion
                  ])
            }, props.items.map(function (item, idx) {
                  var isOpened = idx === maybeOpenedPanelIdx;
                  return React.createElement("li", {
                              key: item.title,
                              className: Cx.cx([
                                    css.panel,
                                    isOpened ? css.opened : ""
                                  ]),
                              onClick: (function (param) {
                                  var isOpened = idx === maybeOpenedPanelIdx;
                                  if (isOpened) {
                                    return setMaybeOpenedPanelIdx(function (param) {
                                                
                                              });
                                  } else {
                                    setOpenedAnswerHeight(function (param) {
                                          return Core__Option.mapOr(Core__Option.flatMap(Core__Option.flatMap(Caml_option.nullable_to_opt(accordionRef.current), (function (accordionEl) {
                                                                return Caml_option.nullable_to_opt(accordionEl.children.item(idx));
                                                              })), (function (panelEl) {
                                                            return Caml_option.nullable_to_opt(panelEl.querySelector("." + css.answer));
                                                          })), 0, (function (conenteEl) {
                                                        return conenteEl.scrollHeight + 20 | 0;
                                                      }));
                                        });
                                    return setMaybeOpenedPanelIdx(function (param) {
                                                return idx;
                                              });
                                  }
                                })
                            }, React.createElement("h3", {
                                  className: css.question
                                }, item.title), React.createElement("div", {
                                  className: css.answer,
                                  style: {
                                    height: (
                                        isOpened ? openedAnswerHeight : 0
                                      ).toString() + "px"
                                  }
                                }, React.createElement(TextComponent.make, {
                                      content: item.content
                                    })));
                }));
}

var make = AccordionComponent;

export {
  make ,
}
/* css Not a pure module */
