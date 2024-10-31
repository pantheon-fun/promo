type css = {
  spinner: string,
  inverted: string,
  ring: string,
}
@module external css: css = "./SpinnerComponent.module.scss"

@react.component
let make = (~inverted=false: bool) => {
  <div className={Cx.cx([css.spinner, inverted ? css.inverted : ""])}>
    <div className={css.ring}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
}
