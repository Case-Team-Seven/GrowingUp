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


    ///////////////
    //TOPiC
    ///////////////

    //get all topics
    getAllTopics: function() {
        return axios.get("/api/topics")
    },


    //get one topics
    getTopic: function(topic_id) {
        return axios.get("/api/topics/" +topic_id)
    },


    ///////////////
    //POSTS
    ///////////////

    //get one Post
    getOnePost: function(post_id) {

        return axios.get("/api/posts/" + post_id)
    },
    getAllPostsForTopic: function(topic_id) {

        return axios.get("/api/posts/topics/" + topic_id)
    },

    // Saves a post to the database
    createPost: function(postData) {
        console.log("Post Data: ", postData);
        return axios.post("/api/posts/add", postData);
    },



    ///////////////
    //COMMENTS
    ///////////////
    getAllCommentsForAPost: function(post_id) {
        return axios.get("/api/comments/posts/" + post_id);
    }



};
