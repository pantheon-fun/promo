type css = {
  innerContainer: string,
  container: string,
}
@module external css: css = "./ContainerComponent.module.scss"

@react.component
let make = (~className="", ~inner=false, ~children) => {
  <div className={Cx.cx([className, inner ? css.innerContainer : css.container])}> {children} </div>
}
