import React, {useState} from 'react';
import {CgClose} from "react-icons/cg";

const ModalWindow = () => {

    const [modal, setModal] = useState(false)

    return (
        <>
            <button
                onClick={() => setModal(true)}
                className="hero--items--btn">Get consultation</button>

            <div
                draggable={true}
                onDragEnd={(event) => {
                    console.log(event.pageX, event.pageY)
                }}
                style={{
                    // transition: "0.3s",
                    display: modal ? "block" : "none"
                }}
                className="modal" aria-modal="true" role="dialog">
                <div className="modal--container">
                    <div className="modal--container--icon"> <CgClose onClick={() => setModal(false)} className="cross"/> </div>
                    <h3 className="modal--container--title">Feel free to send us your message</h3>
                    <div className="modal--container--input-group">
                        <input placeholder="Your name" className="modal--container--input-group--1" type="text"/>
                        <input placeholder="Your email" className="modal--container--input-group--2" type="email"/>
                    </div>
                    <div className="modal--container--submit-group">
                        <textarea placeholder="Message" className="modal--container--submit-group--input" rows="7" cols="53" name="text"></textarea>
                        <button className="modal--container--submit-group--btn">Submit</button>
                    </div>
                </div>
            </div>

        </>
    );
};
export default ModalWindow;