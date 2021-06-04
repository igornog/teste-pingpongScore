import PropTypes from "prop-types";
import logo from "../../ping-pong-racket.svg";
import PlayerScore from "../organisms/PlayerScore"

function Home(props) {
  const { valuePlayer1, valuePlayer2, onIncrementPlayer1, onDecrementPlayer1, onIncrementPlayer2, onDecrementPlayer2 } = props;
  return (
    <div className="Score">
      <header className="Score-header">
        <img src={logo} className="Score-logo" alt="logo" />
        <div>
        <PlayerScore player="One" points={valuePlayer1} onIncrementClick={onIncrementPlayer1} onDecrementClick={onDecrementPlayer1} />
        <PlayerScore player="Two" points={valuePlayer2} onIncrementClick={onIncrementPlayer2} onDecrementClick={onDecrementPlayer2} />
        </div>
        <a
          className="Score-link"
          href="https://www.pongworld.com/table-tennis-sport/rules"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Ping-Pong
        </a>
      </header>
    </div>
  );
}

Home.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Home;
