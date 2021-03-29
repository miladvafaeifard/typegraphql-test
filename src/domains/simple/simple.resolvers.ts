import { Arg, Query, Resolver } from 'type-graphql';
import { Simple } from './simple';

@Resolver(Simple)
export class SimpleResolver {
  @Query(() => Simple)
  async getSimple(@Arg("id") id: string) {
    return {
        id,
        title: 'Hello Sign language tech'
    };
  }
}