module FaviconMetaComponent = {
  @module("./FaviconMetaComponent.jsx") @react.component
  external make: unit => React.element = "FaviconMetaComponent"
}

@react.component
let make = (~title, ~description=?, ~siteName=?) => {
  <React.Fragment>
    <Next.Head>
      <title> {title->React.string} </title>
      {switch description {
      | Some(value) => <meta name="description" content={value} />
      | None => React.null
      }}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {switch description {
      | Some(value) => <meta property="og:description" content={value} />
      | None => React.null
      }}
      {switch siteName {
      | Some(value) => <meta property="og:site_name" content={value} />
      | None => React.null
      }}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      {switch description {
      | Some(value) => <meta property="twitter:description" content={value} />
      | None => React.null
      }}
    </Next.Head>
    <FaviconMetaComponent />
  </React.Fragment>
}
