import { decrementCounter, incrementCounter, resetCounter } from '@/redux/states/counter.slice'
import { useDispatch } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()

  const handleClickIncrement = () => {
    dispatch(incrementCounter())
  }

  const handleClickDecrement = () => {
    dispatch(decrementCounter())
  }

  const handleClickReset = () => {
    dispatch(resetCounter())
  }

  return (
    <>
      <button onClick={handleClickIncrement}>+</button>
      <button onClick={handleClickDecrement}>-</button>
      <button onClick={handleClickReset}>Reset</button>
    </>
  )
}

export default Counter
