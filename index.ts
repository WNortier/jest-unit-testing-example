export type StringProcessorResult = {
    lowercase: string;
    uppercase: string;
    characters: string[];
    length: number;
    extraInformation: {
        metaData: {
            lengthDescription: string;
            numberOfWords: string;
            another: any
        }
    };
}

export const stringProcessor = (input: string): StringProcessorResult => {
    // if (input.length < 3) return 'Invalid input'
    // else
    return {
        lowercase: input.toLocaleLowerCase(),
        uppercase: input.toUpperCase(),
        characters: Array.from(input),
        length: input.length,
        extraInformation: {
            metaData: {
                lengthDescription: '',
                numberOfWords: input.split(' ').length > 3 ? 'big' : 'small',
                another: { name: 'test' }
            }
        }
    }
}
