type css = {
  pure: string,
  heading: string,
  subHeading: string,
}
@module external css: css = "./HeadingComponent.module.scss"

@react.component
let make = (~className="", ~sub=false, ~pure=false, ~children) => {
  switch sub {
  | true =>
    <h3
      className={Cx.cx([
        className,
        switch pure {
        | true => css.pure
        | false => css.subHeading
        },
      ])}>
      children
    </h3>
  | false =>
    <h2
      className={Cx.cx([
        className,
        switch pure {
        | true => css.pure
        | false => css.heading
        },
      ])}>
      children
    </h2>
  }
}
