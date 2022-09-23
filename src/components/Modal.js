import React from 'react';
import './modal.css';


const Modal = ({ showHide, assingP1, assingP2, hideModal1, hideModal2 }) => {

    const hide = { display: "none" };
    const show = { display: "inherit" };

    return (
        <div className="container" style={showHide ? show : hide}>

            <h3 style={showHide ? show : hide} className="side"> Choose your weapon</h3>


            <div className="inputdiv">
                <input type="text" className="inputs" placeholder="Player 1 username" id="player1" name="player1" onChange={assingP1} autoComplete="off" /><input type="text"
                    className="inputs"
                    placeholder="Player 2 username"
                    id="player2"
                    name="player2"
                    onChange={assingP2}
                    autoComplete="off"
                />
            </div>
            <div className="weapons">
                <div className="Xbutton">
                    <button
                        type="button"
                        className="btn"
                        name="X"
                        value="X"
                        id="x"
                        onClick={hideModal1}
                    >
                        X
                    </button>
                </div>
                <div className="Obutton">
                    <button
                        type="button"
                        className="btn"
                        name="O"
                        value="O"
                        id="o"
                        onClick={hideModal2}
                    >
                        O
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Modal;
