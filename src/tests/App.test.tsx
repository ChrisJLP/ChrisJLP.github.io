import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from 'src/App.tsx'

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />)
    const welcomeMessage = screen.getByText(/Placeholder header/i)
    expect(welcomeMessage).toBeInTheDocument()
  })
})