module type Portal = {
  @react.component
  let make: (~children: React.element) => React.element
}

type component
type t = {
  isOpen: bool,
  openPortal: ReactEvent.Mouse.t => unit,
  closePortal: ReactEvent.Mouse.t => unit,
  @as("Portal")
  component: component,
}

@module("react-useportal")
external use: unit => t = "default"

let getPortalComponent = (component: component): module(Portal) => {
  {"make": component}->Obj.magic
}
