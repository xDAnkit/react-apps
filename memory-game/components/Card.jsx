import "./SingleCard.css";

const Card = ({ card, handleChoice, flipped }) => {
  const handlerChoice1 = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div>
        {flipped ? (
          <img src={card.src} className="front" alt="card-front" />
        ) : (
          <img
            src="/img/cover.png"
            onClick={handlerChoice1}
            className="back"
            alt="card-back"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
