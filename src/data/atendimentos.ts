import { IAtendimento } from "../interfaces/IAtendimento";

export const atendimentosIniciais: IAtendimento[] = [
  {
    id: 1,
    cliente: "João Silva",
    servico: "Corte Degradê",
    barbeiro: "Carlos",
    horario: "09:00",
    concluido: false
  },
  {
    id: 2,
    cliente: "Pedro Santos",
    servico: "Barba",
    barbeiro: "Marcos",
    horario: "10:00",
    concluido: false
  },
  {
    id: 3,
    cliente: "Lucas Oliveira",
    servico: "Corte + Barba",
    barbeiro: "André",
    horario: "11:00",
    concluido: true
  }
];