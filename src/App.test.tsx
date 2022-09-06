import { render, screen } from '@testing-library/react'
import App from './App'

test('render hello react', () => {
    render(<App />)
    const textElement = screen.getByText(/hello react/i)
    expect(textElement).toBeInTheDocument()
})