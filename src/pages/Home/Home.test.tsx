import { cleanup, fireEvent, render, screen } from '@testing-library/react/pure'
import { Provider } from 'react-redux'
import { store } from '@/redux'
import { Home } from '@/pages'

describe('Home', () => {
  afterEach(jest.clearAllMocks)
  afterEach(cleanup)

  it('should display the correct name passed as a prop', () => {
    // Arrange
    const name = 'John'
    render(
      <Provider store={store}>
        <Home name={name} />
      </Provider>
    )

    // Act
    const nameElement = screen.getByText(/Hello, this is John!/i)

    // Assert
    expect(nameElement).toBeInTheDocument()
  })

  it('should increment the counter to 1 when the Increment button is clicked', () => {
    // Arrange
    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    const incrementButton = getByText('+')

    // Act
    fireEvent.click(incrementButton)

    // Assert
    expect(getByText('Counter: 1')).toBeInTheDocument()
  })

  it('should reset the counter to 0 when the Reset button is clicked', () => {
    // Arrange
    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    const resetButton = getByText('Reset')

    // Act
    fireEvent.click(resetButton)

    // Assert
    expect(getByText('Counter: 0')).toBeInTheDocument()
  })

  it('should decrement the counter to -1 when the Decrement button is clicked', () => {
    // Arrange
    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    const decrementButton = getByText('-')

    // Act
    fireEvent.click(decrementButton)

    // Assert
    expect(getByText('Counter: -1')).toBeInTheDocument()
  })
})
