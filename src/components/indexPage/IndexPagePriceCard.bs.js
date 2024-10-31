// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cn from "rescript-classnames/src/Cn.bs.js";
import * as Box from "../Box.bs.js";
import * as React from "react";
import * as Spacer from "../Spacer.bs.js";
import * as Core__Option from "@dzakh/rescript-core/src/Core__Option.bs.js";
import * as IconComponent from "../IconComponent.bs.js";
import * as TextComponent from "../TextComponent.bs.js";
import * as HeadingComponent from "../HeadingComponent.bs.js";
import * as IndexPagePriceCardModuleScss from "./IndexPagePriceCard.module.scss";
import * as SimpleReservationButtonComponent from "../SimpleReservationButtonComponent.bs.js";

var css = IndexPagePriceCardModuleScss;

function IndexPagePriceCard(props) {
  var cardData = props.cardData;
  var points = cardData.points;
  var match = cardData.isAccented;
  return React.createElement("li", {
              className: Cn.make([
                    css.container,
                    match !== undefined && match ? css.isAccented : ""
                  ]),
              style: Core__Option.map(cardData.gradeColor, (function (gradeColor) {
                      return {
                              borderColor: gradeColor
                            };
                    }))
            }, React.createElement(HeadingComponent.make, {
                  className: css.heading,
                  sub: true,
                  children: cardData.title
                }), points.length !== 0 ? React.createElement("ul", {
                    className: css.pointsList
                  }, points.map(function (point) {
                        return React.createElement("li", {
                                    key: point,
                                    className: css.point
                                  }, React.createElement(TextComponent.make, {
                                        content: point
                                      }));
                      })) : null, React.createElement(Box.make, {
                  children: null,
                  space: 2,
                  alignItems: "baseline"
                }, React.createElement("div", {
                      className: css.price
                    }, cardData.weekDayPrice, React.createElement(IconComponent.make, {
                          className: css.priceIcon,
                          name: "rouble"
                        })), "ПН-ЧТ"), React.createElement(Box.make, {
                  children: null,
                  space: 2,
                  alignItems: "baseline"
                }, React.createElement("div", {
                      className: css.price
                    }, cardData.price, React.createElement(IconComponent.make, {
                          className: css.priceIcon,
                          name: "rouble"
                        })), "ПТ-ВС\nи праздники"), React.createElement(Spacer.make, {
                  size: 2
                }), React.createElement(TextComponent.make, {
                  className: css.description,
                  content: cardData.description
                }), React.createElement(Spacer.make, {
                  size: 5
                }), React.createElement(SimpleReservationButtonComponent.make, {
                  className: css.reservationButton
                }));
}

var make = IndexPagePriceCard;

export {
  css ,
  make ,
}
/* css Not a pure module */
