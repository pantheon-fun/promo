@module external css: {..} = "./IndexPagePricesInfo.module.scss"

module SpecialInfo = {
  type t = {
    title: string,
    content: string,
  }

  let items = [
    {
      title: `Важная информация!`,
      content: `
Осмотр арены только по записи
      
Игра проводится по предварительной брони с предоплатой
      
Рекомендуем бронировать за 2-3 недели
    `,
    },
    {
      title: `Скидка`,
      content: `
От **10** игроков - *2000р*  
От **14** игроков - *4000р*  
От **18** игроков - *8000р*  
От **22** игроков - *12000р*  
От **26** игроков - *16000р*  
От **30** игроков - *20000р*
    `,
    },
  ]

  @react.component
  let make = (~className) => {
    <div className={Cx.cx([className, css["specialInfoWrapper"]])}>
      {items
      ->Array.mapWithIndex(({title, content}, idx) => {
        let isFirst = idx === 0
        <React.Fragment key={title}>
          <HeadingComponent
            sub=true className={Cx.cx(isFirst ? [css["specialInfoFirstHeading"]] : [])}>
            {title->React.string}
          </HeadingComponent>
          <TextComponent className={css["specialInfoOfferContent"]} content />
        </React.Fragment>
      })
      ->React.array}
    </div>
  }
}

@react.component
let make = (~id) => {
  <section className={css["priceInfoSection"]} id>
    <ContainerComponent className={css["content"]}>
      <div className={css["attentionArrow"]}> {"Цены"->React.string} </div>
      <SpecialInfo className={css["specialOffers"]} />
    </ContainerComponent>
  </section>
}
