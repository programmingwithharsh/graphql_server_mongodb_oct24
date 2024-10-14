const { Student } = require("./models/Student.js");

const resolvers = {
    Query: {
        greetings: () => "Greeting Message",
        welcome: (parent, args) => `Hello ${args.name}`,
        students: async () => await Student.find({}),
        student: async (parent, args) => await Student.findById(args.id)
    },

    Mutation: {
        create: async (parent, args) => {
            const { firstName, lastName, age } = args;
            const newStudent = new Student({
                firstName,
                lastName,
                age
            });
            await newStudent.save();
            return newStudent;
        }
    }
}

module.exports = { resolvers };
