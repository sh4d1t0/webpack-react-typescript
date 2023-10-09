import { AppStore } from '@/redux'
import { useSelector } from 'react-redux'

/**
 * Renders the value of a counter from the Redux store using the `useSelector` hook.
 *
 * @returns The rendered JSX containing the value of the counter from the Redux store.
 */
const CounterRender = () => {
  const counter = useSelector((state: AppStore) => state.counter.value)
  return (
    <>
      <div>Counter: {counter}</div>
    </>
  )
}

export default CounterRender
