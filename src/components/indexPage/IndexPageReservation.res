@module external css: {..} = "./IndexPageReservation.module.scss"

@react.component
let make = (~id) => {
  <section className={css["reservationSection"]} id>
    <ContainerComponent className={css["inner"]}>
      <HeadingComponent className={css["heading"]}>
        {`Забронировать время`->React.string}
      </HeadingComponent>
      <ul className={css["sources"]}>
        <li>
          <a className={css["source"]} href={`tel:${Reference.telNumber}`}>
            <IconComponent className={css["sourceIcon"]} name="phone" />
            <div className={css["sourceLink"]}>
              {`По телефону: `->React.string}
              <span className={css["sourceLinkPhone"]}> {Reference.telNumber->React.string} </span>
            </div>
          </a>
        </li>
        <li>
          <a
            className={css["source"]}
            href={Reference.vkLink}
            target="_blank"
            rel="noopener noreferrer">
            <IconComponent className={css["sourceIcon"]} name="vk" />
            <div className={css["sourceLink"]}>
              {`Через ВКонтакте`->React.string}
            </div>
          </a>
        </li>
        <li>
          <a
            className={css["source"]}
            href=Reference.whatsappLink
            target="_blank"
            rel="noopener noreferrer">
            <IconComponent className={css["sourceIcon"]} name="whatsapp" />
            <div className={css["sourceLink"]}> {`По WhatsApp`->React.string} </div>
          </a>
        </li>
        <li>
          <a
            className={css["source"]}
            href={Reference.instLink}
            target="_blank"
            rel="noopener noreferrer">
            <IconComponent className={css["sourceIcon"]} name="instagram" />
            <div className={css["sourceLink"]}> {`Через Instagram`->React.string} </div>
          </a>
        </li>
      </ul>
    </ContainerComponent>
  </section>
}
