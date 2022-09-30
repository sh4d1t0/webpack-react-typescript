import { cleanup, render, screen } from '@testing-library/react/pure'
import { Provider } from 'react-redux'
import { store } from '@/redux'
import App from './App'

describe('App', () => {
  afterEach(jest.clearAllMocks)
  afterEach(cleanup)

  it('render hello react', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const textElement = screen.getByText(/hello react/i)
    expect(textElement).toBeInTheDocument()
  })
})
