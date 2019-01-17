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
        return axios.get("/api/users/" + id);
    },


    ///////////////
    //TAGS
    ///////////////

    //get all tags
    getAllTags: function() {
        return axios.get("/api/topics")
    },


    //get all topics
    getAllTopics: function() {
        return axios.get("/api/topics")
    },

    ///////////////
    //POSTS
    ///////////////
    //get all posts for a topic id
    getAllPostsForTopic: function(topic_id) {
        return axios.get("/api/posts/topic/" + topic_id);
    },


    ///////////////
    //COMMENTS
    ///////////////
    getAllCommentsForAPost: function(post_id) {
        return axios.get("/api/comments/post/" + post_id);
    }



};
