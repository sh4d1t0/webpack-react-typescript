import reactLogo from '@/assets/react.svg'
import React from 'react'

export interface HomeInterface {
  name?: string
}

const Home: React.FC<HomeInterface> = ({ name }) => {
  return (
    <>
      <h1>Home</h1>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h2>Hello {name}!</h2>
    </>
  )
}

/**
 * @param {string} name
 * When name is not specified, it is assumed to be the defaultProps
 */
Home.defaultProps = {
  name: 'React',
}

export default Home
