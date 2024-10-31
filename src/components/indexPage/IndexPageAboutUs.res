@module external css: {..} = "./IndexPageAboutUs.module.scss"

module GameCard = {
  @react.component
  let make = (~title, ~description) => {
    <li className={css["gameCard"]}>
      <HeadingComponent sub=true className={css["gameCardHeading"]}>
        {React.string(title)}
      </HeadingComponent>
      <TextComponent content={description} />
    </li>
  }
}

@react.component
let make = (~id) => {
  <section className={css["section"]} id>
    <ContainerComponent inner=true>
      <HeadingComponent> {"О нас"->React.string} </HeadingComponent>
      <TextComponent
        content={"PANTHEON — это крытая арена спортивно-тактических игр в Мытищах и отличное место активного отдыха как для детей, так и для взрослых.\n\nПлощадка 400кв.м, в 10 минутах ходьбы от станции Мытищи и ТЦ Красный Кит."}
      />
      <ul className={css["gamesList"]}>
        <GameCard
          title="Стандартные лазертаг режимы"
          description={`- Командный бой
- Захват контрольных точек
- Оборона
- Заражение

и другие...`}
        />
        <GameCard
          title="Специальные лазертаг режимы"
          description={`- Командные прятки в темноте
- Обезвреживание бомбы
- Снайперы
- Последний герой

и другие...`}
        />
        <GameCard
          title="Интерактивная комната отдыха"
          description={`- Аэрохоккей
- Игровые приставки
- Just Dance
- Аркадная ретро консоль`}
        />
        <GameCard
          title="Финальный Boss раунд"
          description={`(с элементами Экшн-Квеста)

Заключительное испытание для всей команды с необычным светозвуковым сопровождением и участием аниматора в роли противника.`}
        />
      </ul>
    </ContainerComponent>
  </section>
}
