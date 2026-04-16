import { ActionButton } from '@/components/Counter/ActionButton';
import { useCounter } from '@/components/Counter/useCounter'



function Counter() {
  const { counter, increment , decrement} = useCounter();

  return (
    <div className="app">
      <h1> {counter} </h1>
      <ActionButton label='Increment' onClick={increment} />
      <ActionButton label='Decrement' onClick={decrement} />
    
    </div>
  )
}

export default Counter
