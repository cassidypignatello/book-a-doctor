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

const symptoms = [
  'Symptom 1',
  'Symptom 2',
  'Symptom 3',
  'Symptom 4',
  'Symptom 5',
  'Symptom 6',
  'Symptom 7',
]

const selectedSymptoms = []

export const onAddPatient = (name, id) => [{ id, name }, ...patients]
export const onSelectSymptom = (item, index) => [item, ...selectedSymptoms]
