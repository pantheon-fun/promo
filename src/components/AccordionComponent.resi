type item = {
  title: string,
  content: string,
}

@react.component
let make: (~className: string=?, ~items: array<item>) => React.element
