
function Sidebar(props){
    return(
      <div className="sidebar">
            <div className="sidebar__logo">
                <img src={props.img} alt='' className="sidebar__logo__img"/>
                <div className="sidebar__logo__half"></div>
            </div>
            <div className="sidebar__footer">
                <div className="sidebar__footer__theme"></div>
                <div className="sidebar__footer__line"></div>
                <div className="sidevar__footer__profileimg"></div>
            </div>
        </div>);
  }
  export default Sidebar;