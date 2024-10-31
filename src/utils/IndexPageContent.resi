type t

module Provider: {
  @react.component
  let make: (~children: React.element, ~pageContent: t) => React.element
}

let use: unit => t
