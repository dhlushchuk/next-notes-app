import { CSSTransition } from 'react-transition-group'

const NotesList = ({notes, onRemove}) => (
    <div>
        {notes.map(note => (
            <CSSTransition timeout={800} classNames={'note'} key={note.id}>
                <li className='list-group-item note'>
                    <div> 
                        <strong>{note.title}</strong> <small>{new Date().toLocaleDateString()}</small>
                    </div>
                        <button onClick={() => onRemove(note.id)} type='button' className='btn btn-outline-danger btn-sm'>&times;</button>
                </li>
            </CSSTransition>
        ))}
    </div>
)

export default NotesList