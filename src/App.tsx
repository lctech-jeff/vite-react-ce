import { useUserStorage } from '@/services/storageAdapter'

import '@/App.css'
function App() {
  const { user, updateUser } = useUserStorage()
  const id = user.id;

  return (
    <>
      <h1>{id}</h1>
      <div className="card">
        <button onClick={() => updateUser({
          id: '100001',
          name: 'Jeff',
          email: 'jeff@lctech.com',
          preferences: ['cherry'],
          allergies: ['peanuts'],
        })}>
          Login
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
