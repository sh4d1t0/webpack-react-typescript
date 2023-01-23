import { cleanup, render, screen } from '@testing-library/react/pure'
import { Provider } from 'react-redux'
import { store } from '@/redux'
import App from './App'

describe('App', () => {
  afterEach(jest.clearAllMocks)
  afterEach(cleanup)

  it('render loading...', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const textElement = screen.getByText(/loading/i)
    expect(textElement).toBeInTheDocument()
  })

  it('render hello', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    // verify page content for default route
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })
})
