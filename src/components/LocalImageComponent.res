@react.component
let make = (~alt, ~src, ~className=?, ~width=?, ~height=?) => {
  <img alt src ?className ?width ?height />
}
