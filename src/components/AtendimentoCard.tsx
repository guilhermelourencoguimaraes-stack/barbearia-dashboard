import { IAtendimento } from "../interfaces/IAtendimento"

interface AtendimentoCardProps {
  atendimento: IAtendimento
  onConcluir: (id: number) => void
}

function AtendimentoCard({ atendimento, onConcluir }: AtendimentoCardProps) {

  return (
    <div className={`card shadow-sm ${atendimento.concluido ? "border-success" : ""}`}>

      <div className="card-body">

        <h5 className="card-title">{atendimento.cliente}</h5>

        <p className="card-text">
          <strong>Serviço:</strong> {atendimento.servico} <br />
          <strong>Barbeiro:</strong> {atendimento.barbeiro} <br />
          <strong>Horário:</strong> {atendimento.horario}
        </p>

        <p>
          Status:{" "}
          {atendimento.concluido ? (
            <span className="badge bg-success">Concluído</span>
          ) : (
            <span className="badge bg-warning text-dark">Pendente</span>
          )}
        </p>

        {!atendimento.concluido && (
          <button
            className="btn btn-primary"
            onClick={() => onConcluir(atendimento.id)}
          >
            Concluir Atendimento
          </button>
        )}

      </div>
    </div>
  )
}

export default AtendimentoCard