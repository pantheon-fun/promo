@module external css: {..} = "./IndexPagePackPricesSection.module.scss"

let priceCards: array<IndexPagePriceCard.data> = [
  {
    title: "GAME",
    description: "Цена за 1 игрока\nИменинник бесплатно\nМинимальная группа 6 человек",
    points: [
      "**2 часа** игры лазертаг",
      "Финальный Boss раунд с элементами экшн-квеста",
    ],
    price: 1900,
    weekDayPrice: 1700,
    gradeColor: "#00c2ff",
  },
  {
    title: "SUPER",
    description: "Цена за 1 игрока\nИменинник бесплатно\nМинимальная группа 6 человек",
    points: [
      "**1.5 часа** игры лазертаг",
      "**1 час** интерактивной комнаты отдыха для проведения торжества",
      "Финальный Boss раунд с элементами экшн-квеста",
    ],
    price: 1900,
    weekDayPrice: 1700,
    isAccented: true,
    gradeColor: "#b000f1",
  },
  {
    title: "ULTRA",
    description: "Цена за 1 игрока\nИменинник бесплатно\nМинимальная группа 10 человек",
    points: [
      "**2.5 часа** игры лазертаг",
      "**1 час** интерактивной комнаты отдыха для проведения торжества",
      "Финальный Boss раунд с элементами экшн-квеста",
    ],
    price: 2600,
    weekDayPrice: 2400,
    gradeColor: "#ffbf20",
  },
]

let make = () => {
  <section className={css["section"]} id="pack-prices-section">
    <ContainerComponent>
      <HeadingComponent className={css["heading"]}>
        {React.string("Наши тарифы")}
      </HeadingComponent>
      <IndexPagePriceCards priceCards={priceCards} className={css["priceCards"]} />
    </ContainerComponent>
  </section>
}
