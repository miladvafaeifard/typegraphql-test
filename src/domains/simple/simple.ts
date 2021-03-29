import { Field, ID, ObjectType } from 'type-graphql';

export interface SimpleType {
  id: string;
  title: string;
}

@ObjectType()
export class Simple implements SimpleType {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;
}
