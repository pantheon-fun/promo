@react.component
let make: (
  ~className: string=?,
  ~inline: SmoothSmoothScroll.inlineOption=?,
  ~block: SmoothSmoothScroll.blockOption=?,
  ~to: string,
  ~children: React.element,
) => React.element
