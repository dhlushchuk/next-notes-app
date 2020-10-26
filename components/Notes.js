import { TransitionGroup } from 'react-transition-group'
import NotesList from './NotesList'
import AddNotesText from './AddNotesText'

const Notes = ({notes, onRemove, onEdit}) => (
    <TransitionGroup component='ul' className='list-group'>
        {notes.length === 0? <AddNotesText /> : <NotesList notes={notes} onEdit={onEdit} onRemove={onRemove}/>}
    </TransitionGroup>
)

export default Notes