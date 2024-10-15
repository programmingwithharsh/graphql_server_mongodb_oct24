const gql = require("graphql-tag");

const typeDefs = gql`
    type Query {
        greetings: String
        welcome(name: String!): String
        students: [Student] #return array of students
        student(id: ID): Student #return studen by id
    }

    # Student object 
    type Student {
        id: ID
        firstName: String
        lastName: String
        age: Int
    }

    # Mutation 
    type Mutation {
        create(firstName: String, lastName: String, age: Int): Student
        update(id: ID, firstName: String, lastName: String, age: Int): Student
        delete(id: ID): Student
    }
`;

module.exports = { typeDefs };