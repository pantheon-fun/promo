@module external css: {..} = "./Modal.module.scss"
@module("./assets/close.svg")
external closeIconParams: {"src": string} = "default"

module type Modal = {
  @react.component
  let make: (~children: React.element, ~className: string=?) => React.element
}

type t = {
  component: module(Modal),
  openModal: ReactEvent.Mouse.t => unit,
  closeModal: ReactEvent.Mouse.t => unit,
  isOpen: bool,
}

let use = () => {
  let {component, closePortal: closeModal, openPortal: openModal, isOpen} = ReactPortal.use()
  let module(Portal) = component->ReactPortal.getPortalComponent

  module Modal = {
    @react.component
    let make = (~children, ~className="") => {
      <Portal>
        <div className={css["background"]} onClick={openModal} />
        <div className={Cx.cx([css["modal"], className])}>
          <button type_="button" onClick={closeModal} className={css["closeButton"]}>
            <LocalImageComponent src={closeIconParams["src"]} alt="Иконка закрыть" />
          </button>
          {children}
        </div>
      </Portal>
    }
  }

  {
    component: module(Modal),
    openModal,
    closeModal,
    isOpen,
  }
}
