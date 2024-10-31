@react.component
let make = (~className="", ~name) => {
  <i className={Cx.cx([className, `icon-${name}`])} />
}
