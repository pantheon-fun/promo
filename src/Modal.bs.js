// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cx from "rescript-classnames/src/Cx.bs.js";
import * as React from "react";
import * as ReactPortal from "./bindings/ReactPortal.bs.js";
import ReactUseportal from "react-useportal";
import CloseSvg from "./assets/close.svg";
import * as ModalModuleScss from "./Modal.module.scss";
import * as LocalImageComponent from "./components/LocalImageComponent.bs.js";

var css = ModalModuleScss;

var closeIconParams = CloseSvg;

function use() {
  var match = ReactUseportal();
  var closeModal = match.closePortal;
  var openModal = match.openPortal;
  var Portal = ReactPortal.getPortalComponent(match.Portal);
  var Modal = function (props) {
    var __className = props.className;
    var className = __className !== undefined ? __className : "";
    return React.createElement(Portal.make, {
                children: null
              }, React.createElement("div", {
                    className: css.background,
                    onClick: openModal
                  }), React.createElement("div", {
                    className: Cx.cx([
                          css.modal,
                          className
                        ])
                  }, React.createElement("button", {
                        className: css.closeButton,
                        type: "button",
                        onClick: closeModal
                      }, React.createElement(LocalImageComponent.make, {
                            alt: "Иконка закрыть",
                            src: closeIconParams.src
                          })), props.children));
  };
  var Modal$1 = {
    make: Modal
  };
  return {
          component: Modal$1,
          openModal: openModal,
          closeModal: closeModal,
          isOpen: match.isOpen
        };
}

export {
  css ,
  closeIconParams ,
  use ,
}
/* css Not a pure module */
