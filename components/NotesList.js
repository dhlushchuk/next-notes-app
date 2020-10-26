import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const NotesList = ({notes, onRemove, onEdit}) => {
    const [edit, setEdit] = useState(false)
    const [editInputValue, setEditInputValue] = useState('')
    const submitHandler = (id, e) => {
        e.preventDefault()
        onEdit(id, editInputValue)
        setEdit(false)
    }
    return (
        <div>
            {notes.map(note => (
                <CSSTransition timeout={800} classNames={'note'} key={note.id}>
                    <li className='list-group-item note'>
                        <div> 
                        {edit? <form onSubmit={(e) => submitHandler(note.id, e)}>
                            <input type='text' defaultValue={note.title} value={editInputValue} onChange={(e) => setEditInputValue(e.target.value)}></input>
                        </form> :
                            <strong>{note.title}</strong>}
                        <small>{new Date().toLocaleDateString()}</small>
                        </div>
                        <div>
                            <button type='button' onClick={() => {
                                edit? setEdit(false) : setEdit(true)
                                setEditInputValue(note.title)}} 
                            className='btn btn-sm btn-outline-primary btn-edit'>&nbsp;&nbsp;</button>
                            <button onClick={() => onRemove(note.id)} type='button' className='btn btn-outline-danger btn-sm'>&times;</button>
                        </div>
                    </li>
                </CSSTransition>
            ))}
        </div>
    )
}

export default NotesList