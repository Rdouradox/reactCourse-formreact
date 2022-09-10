import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <h2>forms</h2>
      <MyForm
        user={{
          name: 'Josias',
          email: 'josias@gmail.com',
          bio: 'sou engenheiro',
          role: 'admin',
        }}
      />
    </div>
  )
}

export default App
