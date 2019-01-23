import axios from "axios";

export default {

    ///////////////
    //USERS
    ///////////////
    getUsers: function() {
        return axios.get("/api/users");
    },
    getUser: function(id) {
       // const users = axios.get("/api/users/" + id);
       // console.log ("Axios API Users: ",  users)
       //  return  users;
        return axios.get("/api/users/" + id);
    },


    ///////////////
    //TAGS
    ///////////////

    getAllTags: function() {
        return axios.get("/api/tags")
    },


    ///////////////
    //TOPiC
    ///////////////

    getAllTopics: function() {
        return axios.get("/api/topics")
    },


    getTopic: function(topic_id) {
        return axios.get("/api/topics/" +topic_id)
    },


    ///////////////
    //POSTS
    ///////////////

    getOnePost: function(post_id) {

        return axios.get("/api/posts/" + post_id)
    },
    getAllPostsForTopic: function(topic_id) {

        return axios.get("/api/posts/topics/" + topic_id)
    },

    createPost: function(postData) {
        // console.log("Post Data: ", postData);
        return axios.post("/api/posts/add", postData);
    },
    
    getMostRecent: function() {
        return axios.get("/api/posts/mostRecent");
    },
    



    ///////////////
    //COMMENTS
    ///////////////
    getAllCommentsForAPost: function(post_id) {
        return axios.get("/api/comments/posts/" + post_id);
    },


    addComment: function(commentData) {
        return axios.post("/api/comments/add", commentData);
    }



};
