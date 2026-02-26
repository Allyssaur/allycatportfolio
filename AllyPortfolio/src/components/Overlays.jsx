import { createPortal } from "react-dom"
import Modal from "./Modal"

const mountElement = document.getElementById("overlays");

const Overlays = ({isOpen}) => {

    return createPortal(
        <>
       {isOpen && <Modal />}</>, mountElement);
};

export default Overlays