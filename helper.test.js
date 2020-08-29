import { onAddPatient } from './utils/helper.js'

describe('Add Patient', () => {
  it('should add a patient', () => {
    const patients = [
      'Yarik Nikolenko',
      'Cassidy Pignatello',
      'Zefanya Prabowo',
      'Conor McGregor',
      'Israel Adesanya',
    ]

    const name = 'Bruce Lee'
    const expected = [name, ...patients]

    const result = onAddPatient(name)
    expect(result).toEqual(expected)
  })
})
