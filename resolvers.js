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
        },
        update: async (parent, args) => {
            const { id } = args; // ES6 Object Destructuring
            /*  
                if else condition
            */
            const result = await Student.findByIdAndUpdate(id, args);
            return result
        },
        delete: async (parent, args) => {
            const { id } = args; // ES6 Object Destructuring
            const deleteStudent = await Student.findByIdAndDelete(id);
            if (!deleteStudent) {
                throw new Error(`Student with ${id} not found`);
            }
            return deleteStudent;
        }
    }
}

module.exports = { resolvers };
