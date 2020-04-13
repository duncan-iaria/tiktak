import React, { createContext, useReducer, Dispatch, Reducer } from 'react';

interface IGameStateContext {
  state: IGameState;
  dispatch: Dispatch<IGameStateAction>;
}

enum BoardStateType {
  X = 'X',
  O = 'O',
  None = '',
}

enum GameAction {
  SetGameState = 'SET_GAME_STATE',
  SetBoardTile = 'SET_BOARD_TILE',
  ResetGameBoard = 'RESET_GAME_BOARD',
  SetGameOver = 'SET_GAME_OVER',
}

enum GameState {
  Player1 = 'PLAYER_1',
  Player2 = 'PLAYER_2',
}

// Board is an array of array of BoardStateTypes
// It's organized into column, then rows
// (so you can do Board[x][y] - or X/Y Coords)
type Board = Array<Array<BoardStateType>>;

interface IGameState {
  isGameOver: boolean;
  gameState: GameState;
  boardState: Board;
}

const initialBoardState: Board = [
  [BoardStateType.None, BoardStateType.None, BoardStateType.None],
  [BoardStateType.None, BoardStateType.None, BoardStateType.None],
  [BoardStateType.None, BoardStateType.None, BoardStateType.None],
];

const initialStoreState = {
  isGameOver: false,
  gameState: GameState.Player1,
  boardState: [...initialBoardState],
};

interface IGameStateAction {
  type: GameAction;
  payload: any;
}

const gameStateReducer: Reducer<IGameState, IGameStateAction> = (
  state: any,
  action: IGameStateAction
) => {
  switch (action.type) {
    case GameAction.SetGameState:
      return {
        ...state,
        gameState: action.payload.state,
      };
    case GameAction.SetBoardTile:
      return {
        ...state,
        gameState:
          // toggle player state
          state.gameState === GameState.Player1
            ? GameState.Player2
            : GameState.Player1,
        boardState: updateBoardState(state, action),
      };
    case GameAction.SetGameOver:
      return {
        ...state,
        isGameOver: true,
      };
    case GameAction.ResetGameBoard:
      return {
        ...state,
        isGameOver: false,
        gameState: GameState.Player1,
        boardState: [
          ...initialBoardState.map((tempBoardState) => tempBoardState),
        ],
      };
    default:
      console.warn(`no action found for that action type: ${action.type}`);
      return state;
  }
};

const updateBoardState = (state: IGameState, action: any) => {
  return state.boardState.map(
    (tempColumn: BoardStateType[], xIndex: number) => {
      if (xIndex === action.payload.x) {
        return tempColumn.map((tempBoardState, yIndex) => {
          if (yIndex === action.payload.y) {
            return state.gameState === GameState.Player1
              ? BoardStateType.X
              : BoardStateType.O;
          }
          return tempBoardState;
        });
      }
      return tempColumn;
    }
  );
};

const gameStateStore = createContext<IGameStateContext>({
  state: initialStoreState,
  dispatch: () => {},
});

const GameStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer<Reducer<IGameState, IGameStateAction>>(
    gameStateReducer,
    initialStoreState
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const { Provider } = gameStateStore;

export {
  gameStateStore,
  GameStateProvider,
  GameAction,
  GameState,
  BoardStateType,
};
