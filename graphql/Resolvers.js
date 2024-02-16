const User = require("../models/User");
const books = [{ id: '1', title: 'Book 1', age: 2, email: 'Author 1' },
{ id: '2', name: 'Book 2', age: 3, email: 'Author 2' }]


const resolvers = {
    Query: {
        books: () => books,
        book: (parent, { id }) => books.find((book) => book.id === id),
    },
    Mutations: {
        getUser: async ({ id }) => {
            try {
                const user = await User.findById(id);
                return user;
            } catch (err) {
                throw new Error("Error retrieving user");
            }
        },
        getUsers: async () => {
            try {
                const users = await User.find();
                return users;
            } catch (err) {
                throw new Error("Error retrieving users");
            }
        },
        createUser: async ({ name, email, age }) => {
            try {
                const user = new User({ name, email, age });
                await user.save();
                return user;
            } catch (err) {
                throw new Error("Error creating user");
            }
        },
        deleteUser: async ({ id }) => {
            try {
                const user = await User.findByIdAndRemove(id);
                return user;
            } catch (err) {
                throw new Error("Error deleting user");
            }
        },
    }

};

module.exports = resolvers;