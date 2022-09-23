import './square.css';

const Square = ({ value, onClick, playerTurn }) => {

    const handleClick = () => {
        (playerTurn !== null && value === null) && onClick();
    }
    return (
        <div id={value} className="square" onClick = {() => handleClick()}>
            {value}
        </div>
    )
}

export default Square;
