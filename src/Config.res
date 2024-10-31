type siteMetadataConfig = {
  name: string,
  title: string,
  description: string,
}
type sanityConfig = {
  projectId: string,
  dataset: string,
  useCdn: bool,
}
type ymConfig = {trackingId: int}
type googleFontsConfig = {
  families: array<string>,
  display: string,
}

type config = {
  siteMetadata: siteMetadataConfig,
  sanity: sanityConfig,
  ym: ymConfig,
  googleFonts: googleFontsConfig,
}

let config = {
  siteMetadata: {
    name: `Лазертаг Pantheon`,
    title: `Праздник с Лазертаг в Мытищах «Pantheon»`,
    description: `Отметьте праздник на крытой лазертаг-арене в 10-ти минутах от станции Мытищи. Вы выбираете во что играть, а с нас остальное.`,
  },
  sanity: {
    projectId: "nk6o1twh",
    dataset: "promo",
    useCdn: false,
    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // Set this to false if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
  },
  ym: {
    trackingId: 55340875,
  },
  googleFonts: {
    families: ["Open+Sans:wght@300;400;700"],
    display: "swap",
  },
}
