@module external css: {..} = "./IndexPagePriceCard.module.scss"

type data = {
  title: string,
  description: string,
  points: array<string>,
  weekDayPrice: int,
  price: int,
  isAccented?: bool,
  gradeColor?: string,
}

@react.component
let make = (~cardData) => {
  let {price, title, weekDayPrice, description, points} = cardData

  <li
    className={Cn.make([
      css["container"],
      switch cardData.isAccented {
      | Some(true) => css["isAccented"]
      | _ => ""
      },
    ])}
    style=?{cardData.gradeColor->Option.map((gradeColor): ReactDOM.style => {
      borderColor: gradeColor,
    })}>
    <HeadingComponent sub=true className={css["heading"]}> {title->React.string} </HeadingComponent>
    {switch points {
    | [] => React.null
    | _ =>
      <ul className={css["pointsList"]}>
        {points
        ->Array.map(point => {
          <li key={point} className={css["point"]}>
            <TextComponent content={point} />
          </li>
        })
        ->React.array}
      </ul>
    }}
    <Box space=2 alignItems=#baseline>
      <div className={css["price"]}>
        {weekDayPrice->React.int}
        <IconComponent className={css["priceIcon"]} name="rouble" />
      </div>
      {React.string("ПН-ЧТ")}
    </Box>
    <Box space=2 alignItems=#baseline>
      <div className={css["price"]}>
        {price->React.int}
        <IconComponent className={css["priceIcon"]} name="rouble" />
      </div>
      {React.string("ПТ-ВС\nи праздники")}
    </Box>
    <Spacer size=2 />
    <TextComponent className={css["description"]} content={description} />
    <Spacer size=5 />
    <SimpleReservationButtonComponent className={css["reservationButton"]} />
  </li>
}
