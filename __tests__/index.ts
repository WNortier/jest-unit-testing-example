
import { stringProcessor, StringProcessorResult } from '..'

describe('stringProcessor test suite', () => {
    // ARRANGE
    let expectedMock: StringProcessorResult

    beforeAll(function () {
        expectedMock = {
            lowercase: 'result',
            uppercase: 'RESULT',
            characters: Array.from('result'),
            length: 6,
            extraInformation: {
                metaData: {
                    lengthDescription: '',
                    numberOfWords: 'small',
                    another: { name: 'test' }
                }
            }
        }
    })

    afterAll(function () {
        jest.clearAllMocks()
    })

    it('should return the correct value when invoked', function () {
        const actual = stringProcessor('result')
        expect(actual).toEqual(expectedMock)
    })

    it('should return the correct length of the string argument', () => {
        // ARRANGE
        const testInput = 'example input'
        // ACT 
        const actual = stringProcessor(testInput)
        // ASSERT
        expect(actual.length).toBe(13)
    })


    test('should return the string argument to lower case', () => {
        // ARRANGE 
        const testInput = 'MAKE ME LOWER'
        const expected = 'make me lower'
        // ACT
        const actual = stringProcessor(testInput)
        // ASSERT
        expect(actual.lowercase).toEqual(expected)
    })

    test('should return the string argument to upper case', () => {
        const testInput = 'make me upper'
        const expected = 'MAKE ME UPPER'
        const actual = stringProcessor(testInput)
        expect(actual.uppercase).toEqual(expected)
    })

    test('should split the string argument up into it\'s characters', () => {
        const testInput = 'split me up'
        const actual = stringProcessor(testInput)
        expect(actual.characters).toEqual(['s', 'p', 'l', 'i', 't', ' ', 'm', 'e', ' ', 'u', 'p'])
    })

    it('should return the number of words in the string argument', function () {
        const testInput = 'one two'
        const actual = stringProcessor(testInput)
        expect(actual.extraInformation.metaData.numberOfWords).toBe('small')
    })
})
