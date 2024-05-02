let participants = [
  {
    name: "Diego Fernandes",
    email: "diego@gmail.com",
    dateRegistration: new Date(2024, 2, 1, 19, 23),
    dataCheckIn: new Date(2024, 2, 1, 20, 20)
  },
  {
    name: "Mayk Brito",
    email: "mayk@gmail.com",
    dateRegistration: new Date(2024, 2, 23, 19, 23),
    dataCheckIn: null
  },
  {
    name: "Ana Souza",
    email: "ana@gmail.com",
    dateRegistration: new Date(2024, 0, 3, 19, 23),
    dataCheckIn: new Date(2024, 0, 4, 20, 20)
  },
  {
    name: "João Silva",
    email: "joao@gmail.com",
    dateRegistration: new Date(2023, 11, 4, 19, 23),
    dataCheckIn: new Date(2023, 11, 5, 20, 20)
  },
  {
    name: "Maria Oliveira",
    email: "maria@gmail.com",
    dateRegistration: new Date(2023, 10, 5, 19, 23),
    dataCheckIn: null
  },
  {
    name: "Pedro Santos",
    email: "pedro@gmail.com",
    dateRegistration: new Date(2023, 9, 6, 19, 23),
    dataCheckIn: new Date(2023, 9, 7, 20, 20)
  },
  {
    name: "Carla Lima",
    email: "carla@gmail.com",
    dateRegistration: new Date(2023, 8, 7, 19, 23),
    dataCheckIn: new Date(2023, 8, 8, 20, 20)
  },
  {
    name: "Lucas Sousa",
    email: "lucas@gmail.com",
    dateRegistration: new Date(2023, 7, 8, 19, 23),
    dataCheckIn: new Date(2023, 7, 9, 20, 20)
  },
  {
    name: "Paula Costa",
    email: "paula@gmail.com",
    dateRegistration: new Date(2023, 6, 9, 19, 23),
    dataCheckIn: null
  },
  {
    name: "Gabriel Almeida",
    email: "gabriel@gmail.com",
    dateRegistration: new Date(2023, 5, 10, 19, 23),
    dataCheckIn: null
  }
];

const createNewParticipant = (participant) => {
  const dateRegistration = dayjs(Date.now())
  .to(participant.dateRegistration)

  let dataCheckIn = dayjs(Date.now())
  .to(participant.dataCheckIn)

  return `
  <tr>
    <td>
      <strong>
        ${participant.nome}
      </strong>
      <br>
      <small>
        ${participant.email}
      </small>
    </td>
    <td>${dateRegistration}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const updateList = (participants) => {
  let output = ""
  for (let participant of participants) {
    output = output + createNewParticipant(participant)
  }

  document.querySelector('tbody').innerHTML = output
}

updateList(participants)