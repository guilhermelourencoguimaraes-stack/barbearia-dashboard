function Sidebar() {
  return (
    <div className="p-3">

      <h4 className="mb-4">Menu</h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <a className="nav-link active" href="#">
            📊 Dashboard
          </a>
        </li>

        <li className="nav-item mb-2">
          <a className="nav-link" href="#">
            ✂️ Atendimentos
          </a>
        </li>

        <li className="nav-item mb-2">
          <a className="nav-link" href="#">
            👨‍🔧 Barbeiros
          </a>
        </li>

        <li className="nav-item mb-2">
          <a className="nav-link" href="#">
            ⚙️ Configurações
          </a>
        </li>

      </ul>

      <hr />

      <p className="text-muted small">
        Sistema desenvolvido para controle de atendimentos de uma barbearia.
      </p>

    </div>
  )
}

export default Sidebar