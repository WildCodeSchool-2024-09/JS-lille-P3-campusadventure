import { Context } from "../../../../services/Context";
import "../GameBoard.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const Navigate = useNavigate();
  //Importation du contexte
  const context = useContext(Context);

  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  //Importation des variables du contexte utilisées sur la page
  const {
    room1Background,
    room2Background,
    room,
    roomStyle,
    currentIndex,
    setCurrentIndex,
  } = context;

  const handleRoom = () => {
    setCurrentIndex(currentIndex + 1);
    setTimeout(() => Navigate("/game/room1"), 0);
    
  };



  return (
    <>
      <div className={`gameboard-container ${roomStyle}`}>
        <img className="game-img" src={room} alt="plateau de jeu" />
        {/* Éléments superposés pour selectionner la salle */}
        <div className="overlay-item item1" />
        <div className="overlay-item item2" />
        <div className="overlay-item item3" />
        <div className="overlay-item item4" />
        <div className="overlay-item item5" />
        <div
          className={`overlay-item item6 ${room1Background}`}
          onClick={handleRoom}
          onKeyDown={handleRoom}
        />
        <div className={`overlay-item item7 ${room2Background}`} />
        <div className="overlay-item item8" />
        <div className="overlay-item item9" />
      </div>
    </>
  );
}

export default Main;