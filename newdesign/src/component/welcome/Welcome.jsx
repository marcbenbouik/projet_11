import "../welcome/welcome.scss"
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../modal/modal";

function Welcome() {
    const user = useSelector((state) => state.user);
    const [isOpen, setIsOpen] = useState(false);
    const firstName = user && user.firstName;
    const lastName = user && user.lastName;
    const name = firstName + " " + lastName;

    const handleOpenModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="welcomeDiv">
                <h1 className="welcomeTitle">Welcome back <br /> {name}!</h1>
                <button className="welcomeButton" onClick={handleOpenModal}>Edit Name</button>
                {isOpen && <Modal setOpenClose={setIsOpen} openClose={isOpen} />}
            </div>
        </div>
    );
}

export default Welcome;