import reactLogo from '@/assets/react.svg'
import { Counter } from '@/components'
import { HomeInterface } from '@/pages'
import { CounterRender } from '@/pages/Home/components'
import { FC } from 'react'

const Home: FC<HomeInterface> = ({ name }) => {
  return (
    <>
      <h1>Home</h1>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h2>Hello {name}!</h2>
      <CounterRender />
      <Counter />
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
