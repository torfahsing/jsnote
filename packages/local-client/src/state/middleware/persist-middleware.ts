import { Dispatch } from "redux"
import { RootState } from ".."
import { saveCells } from "../action-creators"
import { ActionType } from "../action-types"
import { Action } from "../actions"

export const persistMiddleware = ({ dispatch, getState }: {
    dispatch: Dispatch<Action>,
    getState: () => RootState
}) => {
    return (next: (action: Action) => void) => {
        let timer: any;
        return (action: Action) => {
            next(action);
            const actionTypes = [ActionType.DELETE_CELL, ActionType.INSERT_CELL_AFTER, ActionType.MOVE_CELL, ActionType.UPDATE_CELL];
            if (actionTypes.includes(action.type)) {
                if(timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    saveCells()(dispatch, getState);
                }, 250);
                
            }
        }
    }
}