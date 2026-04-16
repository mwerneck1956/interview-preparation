import { useCounter } from '@/components/Counter/useCounter'

function Home() {
  const { counter, increment } = useCounter();

  return (
    <div className="app">
      <h1> {counter} </h1>
      <button onClick={increment}>
        Increment
      </button>
      {/* <form action={formAction}>
        <input
          type="text"
          name="item"
          placeholder="Digite um item..."
          disabled={isPending}
        />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Adicionando...' : 'Adicionar'}
        </button>
      </form>

      {state.message && (
        <p className="message">{state.message}</p>
      )}

      <h2>Itens ({state.items.length})</h2>
      <ul>
        {state.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Home
