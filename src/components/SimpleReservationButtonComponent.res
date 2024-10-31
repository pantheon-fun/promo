type css = {container: string}
@module external css: css = "./SimpleReservationButtonComponent.module.scss"

@react.component
let make = (~className="") => {
  let children = `Забронировать`->React.string
  <PageInnerLinkComponent
    to="reservation-section" block={Center} className={Cx.cx([css.container, className])}>
    children
  </PageInnerLinkComponent>
}
