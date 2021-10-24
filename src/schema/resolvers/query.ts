import { IResolvers } from '@graphql-tools/utils';


// Resolvers
export const queryResolvers: IResolvers = {
    Query: {
        hello: (): string => 'Hola graphQL!',
        helloWithName: (
        _: void,
        args: { name: string },
        context: unknown,
        info: unknown
        ) => {
        return `Hola ${args.name}`;
        },
        peopleNumber: (): number => 143,
    },
};