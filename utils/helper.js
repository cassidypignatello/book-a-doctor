const patients = [
  {
    id: '0',
    name: 'Yarik Nikolenko',
  },
  {
    id: '1',
    name: 'Cassidy Pignatello',
  },
  {
    id: '2',
    name: 'Zefanya Prabowo',
  },
  {
    id: '3',
    name: 'Conor McGregor',
  },
  {
    id: '4',
    name: 'Israel Adesanya',
  },
]

export const onAddPatient = (name, id) => [{ id, name }, ...patients]
