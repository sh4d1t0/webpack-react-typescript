import { AppStore } from '@/redux'
import { useSelector } from 'react-redux'

const CounterRender = () => {
  const counter = useSelector((state: AppStore) => state.counter.value)
  return (
    <>
      <div>Counter: {counter}</div>
    </>
  )
}

export default CounterRender
