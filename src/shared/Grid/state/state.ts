import {IGridState, IReducer} from "./state.types";

export const initialState: IGridState = {
  currentDrawer: '',
  gridScroll: 0,
}

export const reducer: IReducer = (state, action) => {
  switch(action.type) {
    case 'SET_CURRENT_DRAWER':
      return {
        ...state,
        currentDrawer: action.value,
      }
    case 'SET_GRID_SCROLL':
      return {
        ...state,
        gridScroll: action.value
      }
    default:
      return state;
  }
}
