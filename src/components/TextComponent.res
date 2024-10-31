type css = {text: string}
@module external css: css = "./TextComponent.module.scss"

@react.component
let make = (~className="", ~content) => {
  <ReactMarkdownComponent className={Cx.cx([css.text, className])}>
    {content}
  </ReactMarkdownComponent>
}
