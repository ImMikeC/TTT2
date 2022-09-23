import Square from "./Square.js";
import './board.css';


const Board = ({ squares, handleClick, playerTurn, showHide, hideModal }) => {

    const hide = { display: "none" };
    const show = { display: "inherit" };
    
    const createSquares = values => (
        values.map(value => (
            <Square 
                playerTurn={playerTurn}
                onClick={() =>handleClick(value)}
                value={squares[value]}
                key={`square_${value}`}
            />
        ))
    );
    

    return (
        
        <div className="board" style={showHide ? hide : show}>
            <button className="startOver" style={showHide ? hide : show} onClick={hideModal}> Start Over </button>
            <span style={showHide ? hide : show } className="turn">{playerTurn}</span>
            <div className="Squarecontainer">
            <div className="row">{createSquares([0,1,2])}</div>
            <div className="row">{createSquares([3,4,5])}</div>
            <div className="row">{createSquares([6,7,8])}</div>
            </div>
        </div>
    );
}

export default Board;
