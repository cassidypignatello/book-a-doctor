import { onAddPatient, onSelectSymptom } from './utils/helper.js'

describe('Add Patient', () => {
  it('should add a patient', () => {
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

    const patient = { id: '5', name: 'Bruce Lee' }
    const expected = [{ ...patient }, ...patients]

    const result = onAddPatient(patient.name, patient.id)
    expect(result).toEqual(expected)
  })
})

describe('Symptom Selection', () => {
  it('should select a symptom', () => {
    const selectedSymptoms = []
    const symptom = 'Fever'
    const expected = [symptom, ...selectedSymptoms]
    const result = onSelectSymptom(symptom)
    expect(result).toEqual(expected)
  })
})
