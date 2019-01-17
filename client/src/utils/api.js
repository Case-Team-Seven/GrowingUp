import axios from "axios";

export default {
    // Gets all books
    getUsers: function() {
        return axios.get("/api/users");
    },
    // Gets the book with the given id
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    }

};
