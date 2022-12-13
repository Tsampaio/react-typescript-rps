import styles from './ChooseAndPlay.module.css';
import HandSelection from '../components/HandSelection';
import { useOptions } from '../context/optionsContext';
import { generateComputerHand } from '../utils/randomNumber';
import { OptionActionKind } from '../reducers/scoreReducerTypes';

const ChooseAndPlay = () => {
  const optionsContext = useOptions();
  const { dispatch } = optionsContext;

  const HanpOptionsArray = optionsContext.options.map((hand, i) => {
    return <HandSelection name={hand.name} icon={hand.icon} handChoiceIndex={i} />;
  });

  const play = () => {
    const randNumber = generateComputerHand();

    dispatch({ type: OptionActionKind.UPDATE_COMPUTER_CHOICE, payload: randNumber });
  };

  return (
    <>
      <div className={styles.choiceBtnCtn}>{HanpOptionsArray}</div>
      <button className={styles.playBtn} onClick={play}>
        Play
      </button>
    </>
  );
};

export default ChooseAndPlay;
