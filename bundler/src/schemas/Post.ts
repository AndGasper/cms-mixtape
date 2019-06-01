const express = require('express'); 
const graphqlHttp = require('express-graphqk');
import { buildSchema } from "type-graphql";


async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [__dirname + "/**/*.resolver.ts"]
    })
}

@ObjectType()
export class Post {
    @Field(type => id)
    id: int;
    title: string;
    description: string;
};

const Post[] recordSet =  {
    'a': {
        id: 5,
        title: 'Title A',
        description: 'Description B'
    },
    'b': {
        id: 'Title B',
        title: 'Title B',
        description: 'Description B'
    }
};