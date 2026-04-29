import { useState } from "react"
import { IAtendimento } from "../interfaces/IAtendimento"
import { atendimentosIniciais } from "../data/atendimentos"
import AtendimentoCard from "./AtendimentoCard"

function Dashboard() {

  const [atendimentos, setAtendimentos] = useState<IAtendimento[]>(atendimentosIniciais)

  const concluirAtendimento = (id: number) => {
    const atualizados = atendimentos.map((atendimento) =>
      atendimento.id === id
        ? { ...atendimento, concluido: true }
        : atendimento
    )

    setAtendimentos(atualizados)
  }

  const total = atendimentos.length
  const concluidos = atendimentos.filter(a => a.concluido).length
  const pendentes = total - concluidos

  return (
    <section>

      <h1 className="mb-4">Dashboard da Barbearia</h1>

      <div className="row mb-4">

        <div className="col-md-4">
          <div className="card text-bg-dark">
            <div className="card-body">
              <h5>Total de Atendimentos</h5>
              <h2>{total}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-bg-success">
            <div className="card-body">
              <h5>Concluídos</h5>
              <h2>{concluidos}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-bg-warning">
            <div className="card-body">
              <h5>Pendentes</h5>
              <h2>{pendentes}</h2>
            </div>
          </div>
        </div>

      </div>

      <h3>Lista de Atendimentos</h3>

      <div className="row">

        {atendimentos.map((atendimento) => (
          <div className="col-md-4 mb-3" key={atendimento.id}>
            <AtendimentoCard
              atendimento={atendimento}
              onConcluir={concluirAtendimento}
            />
          </div>
        ))}

      </div>

    </section>
  )
}

export default Dashboard