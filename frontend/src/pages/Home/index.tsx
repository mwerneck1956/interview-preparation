import { useActionState } from 'react'

type FormState = {
  message: string
  items: string[]
}

async function addItemAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const item = formData.get('item') as string

  if (!item.trim()) {
    return { ...prevState, message: 'O campo não pode estar vazio.' }
  }

  if (prevState.items.includes(item)) {
    return { ...prevState, message: `"${item}" já existe na lista.` }
  }

  return {
    message: `"${item}" adicionado com sucesso!`,
    items: [...prevState.items, item],
  }
}

const initialState: FormState = {
  message: '',
  items: [],
}

function Home() {
  const [state, formAction, isPending] = useActionState(
    addItemAction,
    initialState
  )

  return (
    <div className="app">
      <h1>useActionState Example</h1>

      <form action={formAction}>
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
      </ul>
    </div>
  )
}

export default Home
