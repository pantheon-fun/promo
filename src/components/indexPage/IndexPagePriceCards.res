@module external css: {..} = "./IndexPagePriceCards.module.scss"

@react.component
let make = (~priceCards, ~className) => {
  <div className={Cn.make([css["container"], className])}>
    <ul className={css["priceCards"]}>
      {priceCards
      ->Array.map((priceCard: IndexPagePriceCard.data) => {
        <div key={priceCard.title}>
          <IndexPagePriceCard cardData={priceCard} />
        </div>
      })
      ->React.array}
    </ul>
  </div>
}
