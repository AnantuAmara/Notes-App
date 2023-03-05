// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainHeading = styled.h1`
  color: #4c63b6;
  font-size: 25px;
  font-family: 'Bree Serif';
  text-align: center;
`

export const Card = styled.div`
  background-color: #ffffff;
  height: 200px;
  width: 80%;
  border: none;
  box-shadow: 0 0 2px 2px #475569;
`

export const Input = styled.input`
  border: none;
  outline: none;
  margin-left: 20px;
  background-color: transparent;
  color: #334155;
  font-size: 20px;
`
export const TextArea = styled.textarea`
  border: none;
  outline: none;
  margin-left: 20px;
  background-color: transparent;
  color: #334155;
  font-size: 15px;
`

export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  align-self: flex-end;
`

export const NotesList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const NoViewCard = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NoViewImage = styled.img`
  height: 50px;
  width: 50px;
`

export const NoViewHeading = styled.h1`
  color: #1e293b;
  font-size: 18px;
  font-family: 'Roboto';
`

export const NoViewPara = styled.p`
  color: #aab8c8;
  font-size: 15px;
  font-family: 'Roboto';
`
