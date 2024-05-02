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

  if(participant.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email = "${participant.email}"   
        onclick = "toCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participant.name}
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

  document.querySelector('tbody')
  .innerHTML = output
}

updateList(participants)

const addParticipant = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const participant = {
    name: formData.get('nome'),
    email: formData.get('email'),
    dateRegistration: new Date(),
    dataCheckIn: null
  }

  // verificar se o particpante já existe
  const isThereParticipant = participants.find(
    (p) => p.email == participant.email
  )

  if(isThereParticipant) {
    alert('Email já cadastrado!')
    return
  }

  participants = [participant, ...participants]
  updateList(participants)

  // limpar o formulario
  event.target.querySelector('[name = "nome"]').value = ""
  event.target.querySelector('[name = "email"]').value = ""
}

const toCheckIn = (event) => {
  // confirmar se realmente quer o check-in
  const confirmationMessage = 'Tem certeza que deseja fazer o check-in?'

  if(confirm(confirmationMessage) == false) {
    return
  }

  // encontrar o participante dentro da lista
  const participant = participants.find(
    (p) => p.email == event.target.dataset.email
  )

  // atualizar o check-in do participante
  participant.dataCheckIn = new Date ()

  // atualizar a lista de participantes
  updateList(participants)
}