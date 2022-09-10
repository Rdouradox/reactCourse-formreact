import './MyForm.css'
import { useState } from 'react'
const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState(user ? user.bio : '')

  const [role, setRole] = useState(user ? user.role : '')

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Enviando form')
    console.log(name, email, bio, role)
  }
  // setName('')
  // setEmail('')  react esta impedindo por tem muito rerender, mas seria pra deixar o imput em branco pós submit
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome."
            onChange={handleName}
            value={name}
          />
        </div>
        <label>
          <span>E-Mail</span>
          <input
            type="email"
            placeholder="Digite seu e-mail."
            onChange={handleEmail}
            value={email}
          />
        </label>
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="descrição do usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>{' '}
        </label>
        <label>
          <span>Função Sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
