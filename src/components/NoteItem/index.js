// Write your code here
import {ListItem, ListHeading, ListPara} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {title, text} = notesDetails
  console.log(title, text)
  return (
    <ListItem>
      <ListHeading>{title}</ListHeading>
      <ListPara>{text}</ListPara>
    </ListItem>
  )
}

export default NoteItem
