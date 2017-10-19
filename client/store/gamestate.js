import game from "../game";

/**
 * ACTION TYPES
 */
const WON_LEVEL = "WON_LEVEL";
const BACK_LEVEL = "BACK_LEVEL";
const RESET_LEVELS = "RESET_LEVELS";
const GOTO_LEVEL = "GOTO_LEVEL";
const CORRECT_ANSWER = "CORRECT_ANSWER";

/**
 * INITIAL STATE
 */
const defaultLevelData = {
  currentLevel: 0,
  completedLevels: [],
  levelInfo: game[0],
  correctAnswer: false,
  totalLevels: game.length
};

/**
 * ACTION CREATORS
 */
export const wonLevel = level => ({ type: WON_LEVEL, level });
export const backLevel = () => ({ type: BACK_LEVEL });
export const resetLevels = () => ({ type: RESET_LEVELS });
export const gotoLevel = level => ({ type: GOTO_LEVEL, level });
export const correctAnswer = () => ({ type: CORRECT_ANSWER });

/**
 * REDUCER
 */
export default function(state = defaultLevelData, action) {
  let newlevel;
  switch (action.type) {
    case BACK_LEVEL:
      newlevel = Math.max(0, state.currentLevel - 1);
      return {
        currentLevel: newlevel,
        completedLevels: state.completedLevels,
        levelInfo: game[newlevel],
        correctAnswer: false,
        totalLevels: game.length
      };
    case WON_LEVEL:
      newlevel = Math.min(game.length - 1, action.level + 1);
      return {
        currentLevel: newlevel,
        completedLevels: state.completedLevels.concat(action.level),
        levelInfo: game[newlevel],
        correctAnswer: false,
        totalLevels: game.length
      };
    case RESET_LEVELS:
      return Object.assign({}, state, {
        completedLevels: [],
        correctAnswer: false
      });
    case GOTO_LEVEL:
      return Object.assign({}, state, {
        currentLevel: action.level,
        levelInfo: game[action.level],
        correctAnswer: false
      });
    case CORRECT_ANSWER:
      return Object.assign({}, state, { correctAnswer: true });
    default:
      return state;
  }
}
