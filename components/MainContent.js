import { Fragment, useContext, useEffect } from 'react'
import Form from '../components/Form'
import Alert from '../components/Alert'
import Notes from '../components/Notes'
import Loader from '../components/Loader'

import { FirebaseContext } from '../context/firebase/firebaseContext'
import { AlertContext } from '../context/alert/alertContext'

const MainContent = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
    const alert = useContext(AlertContext)
    useEffect(() => {
        fetchNotes() //eslint-disable-next-line
    }, [])
    const submitRemove = (id) => {
        removeNote(id).then(() => {
            alert.show('Заметка была удалена', 'success')
        })
    }
    return(
        <Fragment>
            <Alert />
            <Form />
            <hr />
            {/* <Notes notes={notes} onRemove={submitRemove} /> */}
            {loading? <Loader/> : <Notes notes={notes} onRemove={submitRemove} />}
        </Fragment>
    )
}
  
export default MainContent