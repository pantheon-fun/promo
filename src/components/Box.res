@module external css: {..} = "./Box.module.scss"

@react.component
let make = (~children, ~space=?, ~className="", ~alignItems=?) => {
  <div
    style={gap: ?space->Option.map(size => (size * 4)->Int.toString ++ "rem")}
    className={Cx.cx([
      css["default"],
      switch alignItems {
      | Some(#baseline) => css["alignItems_baseline"]
      | None => ""
      },
      className,
    ])}>
    {children}
  </div>
}
