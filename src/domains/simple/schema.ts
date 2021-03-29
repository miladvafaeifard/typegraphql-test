import { buildSchema } from 'type-graphql';
import { SimpleResolver } from './simple.resolvers';

export const schema = async() => await buildSchema({
  resolvers: [SimpleResolver],
});
