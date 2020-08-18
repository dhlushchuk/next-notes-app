import { useReducer} from 'react'
import { FirebaseContext } from './firebaseContext'
import { fireBaseReducer } from './firebaseReducer'
import axios from 'axios'
import { SHOW_LOADER, REMOVE_NOTE, ADD_NOTE, FETCH_NOTES, HIDE_LOADER } from '../types'

const url = 'https://react-notes-95ce9.firebaseio.com'

const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(fireBaseReducer, initialState)
    const showLoader = () => {
        dispatch({type: SHOW_LOADER})
    }
    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes.json`)
        if(res.data) {
            const payload = Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                    id: key
                }
            })
            dispatch({
                type: FETCH_NOTES,
                payload
            })
            dispatch({
                type: HIDE_LOADER
            })
        } else {
            dispatch({
                type: HIDE_LOADER
            })
        }
    }
    const addNote = async (title) => {
        const note = {
            title, date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`${url}/notes.json`, note)
            const payload = {
                ...note, 
                id: res.data.name
            }
            dispatch({
                type: ADD_NOTE,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }
    const removeNote = async (id) => {
        await axios.delete(`${url}/notes/${id}.json`)
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }
    return(
        <FirebaseContext.Provider value={{showLoader, fetchNotes, addNote, removeNote, loading: state.loading, notes: state.notes}}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState