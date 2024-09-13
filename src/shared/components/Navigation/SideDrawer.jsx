

import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";

function SideDrawer(props) {
  const nodeRef = useRef(null); // Create a ref for the element

  const content = (
    <CSSTransition
      in={props.show} // Control visibility
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef} // Pass the ref to CSSTransition
    >
      <aside ref={nodeRef} onClick={props.onClick} className="side-drawer">
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

export default SideDrawer;

