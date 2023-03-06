// Write your code here
import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  MainHeading,
  Card,
  Input,
  TextArea,
  Button,
  NotesList,
  NoViewCard,
  NoViewImage,
  NoViewHeading,
  NoViewPara,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeText = event => setText(event.target.value)
  const onAddNotes = event => {
    event.preventDefault()
    const newNote = {
      id: uuidV4(),
      title,
      text,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNote])
    setTitle('')
    setText('')
  }
  return (
    <MainContainer>
      <MainHeading>NOTES</MainHeading>
      <Card>
        <form onSubmit={onAddNotes}>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <TextArea
            value={text}
            rows="5"
            cols="50"
            placeholder="Take a Note..."
            onChange={onChangeText}
          />
          <Button type="submit">Add</Button>
        </form>
      </Card>
      {notesList.length === 0 ? (
        <NoViewCard>
          <NoViewImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoViewHeading>No Notes Yet</NoViewHeading>
          <NoViewPara>Notes you add will appear here</NoViewPara>
        </NoViewCard>
      ) : (
        <NotesList>
          {notesList.map(each => (
            <NoteItem notesDetails={each} key={each.id} />
          ))}
        </NotesList>
      )}
    </MainContainer>
  )
}

export default Notes
