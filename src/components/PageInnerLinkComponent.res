let defaultInlineOption: SmoothSmoothScroll.inlineOption = Nearest
let defaultBlockOption: SmoothSmoothScroll.blockOption = Start

@react.component
let make = (
  ~className=?,
  ~inline=defaultInlineOption,
  ~block=defaultBlockOption,
  ~to,
  ~children,
) => {
  <SpreadComponent
    props={
      "data-smooth-scroll-to": to,
      "data-smooth-scroll-inline": inline->SmoothSmoothScroll.inlineOptionToString,
      "data-smooth-scroll-block": block->SmoothSmoothScroll.blockOptionToString,
    }>
    <button type_="button" ?className> children </button>
  </SpreadComponent>
}
