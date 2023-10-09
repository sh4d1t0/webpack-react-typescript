import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/redux'
import { Admin } from '@/pages'

describe('Admin', () => {
  it('should render the Dashboard component with welcome admin dashboard message', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Admin />
        </BrowserRouter>
      </Provider>
    )

    await waitFor(() => {
      // Act
      const nameElement = screen.getByText(/Welcome to Admin Dashboard/i)

      // Assert
      expect(nameElement).toBeInTheDocument()
    })
  })
})
