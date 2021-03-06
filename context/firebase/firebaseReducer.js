import { SHOW_LOADER, HIDE_LOADER, ADD_NOTE, EDIT_NOTE, FETCH_NOTES, REMOVE_NOTE } from "../types"

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [HIDE_LOADER]: state => ({...state, loading: false}),
    [ADD_NOTE]: (state, {payload}) => ({...state, notes: [...state.notes, payload]}),
    [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload}),
    [EDIT_NOTE]: (state, {payload}) => ({...state, notes: state.notes.map(note => note.id === payload.id? note = payload : note)}),
    [REMOVE_NOTE]: (state, {payload}) => ({...state, notes: state.notes.filter(note => note.id !== payload)}),
    DEFAULT: state => state
}

export const fireBaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}