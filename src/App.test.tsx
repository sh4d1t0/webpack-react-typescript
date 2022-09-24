import { cleanup, render, screen } from '@testing-library/react/pure'
import App from './App'

describe('App', () => {
  afterEach(jest.clearAllMocks)
  afterEach(cleanup)

  it('render hello react', async () => {
    render(<App />)
    const textElement = screen.getByText(/hello react/i)
    expect(textElement).toBeInTheDocument()
  })
})
