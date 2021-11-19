import { render, screen } from '@testing-library/react'
import Todo from './Todos/Todo'

test('renders Todo component correctly', () => {
  const todo = {
    _id: '0990z90z909z090z',
    text: 'TESTINGTODO',
    done: false,
  }
  render(<Todo todo={todo} />)
  const text = screen.getByText(todo.text)
  expect(text).toBeInTheDocument()
})
