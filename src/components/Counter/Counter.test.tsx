import { cleanup, fireEvent, render } from '@testing-library/react/pure'
import { Provider } from 'react-redux'
import { store } from '@/redux'
import { Counter } from '@/components'

describe('Counter', () => {
  afterEach(jest.clearAllMocks)
  afterEach(cleanup)

  it('should the buttons render correct', () => {
    // Arrange
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )
    const incrementButton = getByText('+')
    const decrementButton = getByText('-')
    const resetButton = getByText('Reset')

    // Assert
    expect(incrementButton).toBeInTheDocument()
    expect(decrementButton).toBeInTheDocument()
    expect(resetButton).toBeInTheDocument()
  })
})
