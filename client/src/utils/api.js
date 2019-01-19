import axios from "axios";

export default {

    ///////////////
    //USERS
    ///////////////
    // Gets all users
    getUsers: function() {
        return axios.get("/api/users");
    },
    // Gets the user with the given id
    getUser: function(id) {
       // const users = axios.get("/api/users/" + id);
       // console.log ("Axios API Users: ",  users)
       //  return  users;
        return axios.get("/api/users/" + id);
    },


    ///////////////
    //TAGS
    ///////////////

    //get all tags
    getAllTags: function() {
        return axios.get("/api/tags")
    },


    //get all topics
    getAllTopics: function() {
        return axios.get("/api/topics")
    },

    ///////////////
    //POSTS
    ///////////////

    //get one topics
    getTopic: function(topic_id) {
        return axios.get("/api/topics/" +topic_id)
    },


    //get all posts for a topic id
    getAllPostsForTopic: function(topic_id) {

        return axios.get("/api/posts/topics/" + topic_id)
    },

    // Saves a post to the database
    createPost: function(postData) {
        return axios.post("/api/posts/add", postData);
    },



    ///////////////
    //COMMENTS
    ///////////////
    getAllCommentsForAPost: function(post_id) {
        return axios.get("/api/comments/post/" + post_id);
    }



};
