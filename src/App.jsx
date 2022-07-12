import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.css'

export default function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}
