type css = {heading: string}
@module external css: css = "./PriceSectionPlusComponent.module.scss"

@react.component
let make = (~title, ~description) => {
  <li>
    <HeadingComponent sub=true className={css.heading}> {title->React.string} </HeadingComponent>
    <p> {description->React.string} </p>
  </li>
}
