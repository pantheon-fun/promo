@react.component
let make = (~size) => {
  let value = (size * 4)->Int.toString ++ "rem"
  <div style={width: value, height: value} />
}
