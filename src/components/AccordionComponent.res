@module external css: {..} = "./AccordionComponent.module.scss"

type item = {
  title: string,
  content: string,
}

@react.component
let make = (~className="", ~items) => {
  let (maybeOpenedPanelIdx, setMaybeOpenedPanelIdx) = React.useState(() => None)
  let (openedAnswerHeight, setOpenedAnswerHeight) = React.useState(() => 0)
  let accordionRef = React.useRef(Nullable.null)

  let handlePanelClick = (~panelIdx) => {
    let isOpened = Some(panelIdx) === maybeOpenedPanelIdx
    if isOpened {
      setMaybeOpenedPanelIdx(_ => None)
    } else {
      setOpenedAnswerHeight(_ => {
        accordionRef.current
        ->Nullable.toOption
        ->Option.flatMap(accordionEl => {
          accordionEl->Webapi.Dom.Element.children->Webapi.Dom.HtmlCollection.item(panelIdx)
        })
        ->Option.flatMap(panelEl => {
          panelEl->Webapi.Dom.Element.querySelector(`.${css["answer"]}`)
        })
        ->Option.mapOr(0, conenteEl => {
          conenteEl->Webapi.Dom.Element.scrollHeight + 20
        })
      })
      setMaybeOpenedPanelIdx(_ => Some(panelIdx))
    }
  }

  <ul className={Cx.cx([className, css["accodion"]])} ref={ReactDOM.Ref.domRef(accordionRef)}>
    {items
    ->Array.mapWithIndex((item, idx) => {
      let isOpened = Some(idx) === maybeOpenedPanelIdx

      <li
        key={item.title}
        className={Cx.cx([css["panel"], isOpened ? css["opened"] : ""])}
        onClick={_ => {
          handlePanelClick(~panelIdx=idx)
        }}>
        <h3 className={css["question"]}> {item.title->React.string} </h3>
        <div
          className={css["answer"]}
          style={ReactDOMStyle.make(
            ~height=`${(isOpened ? openedAnswerHeight : 0)->Int.toString}px`,
            (),
          )}>
          <TextComponent content={item.content} />
        </div>
      </li>
    })
    ->React.array}
  </ul>
}
