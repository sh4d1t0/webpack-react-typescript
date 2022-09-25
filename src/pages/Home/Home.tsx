import React from 'react'
import { IWelcomeMessage } from '@/types/app'

export interface HomeInterface {
  name: string
}

const Home: React.FC<HomeInterface> = ({ name }: IWelcomeMessage) => {
  return (
    <>
      <h1>Home</h1>
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
