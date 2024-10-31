type t

let context: React.Context.t<t> = React.createContext(%raw("null"))

module Provider = {
  @react.component
  let make = (~children, ~pageContent) => {
    React.createElement(React.Context.provider(context), {value: pageContent, children})
  }
}

let use = () => {
  React.useContext(context)
}
