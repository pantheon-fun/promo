@react.component
let make: (
  ~className: string=?,
  ~sub: bool=?,
  ~pure: bool=?,
  ~children: React.element,
) => React.element
