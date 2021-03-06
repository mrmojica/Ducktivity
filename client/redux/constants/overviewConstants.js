

var FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
var fetchUsersSuccess = function(data) {
    return {
        type: FETCH_USERS_SUCCESS,
        data: data
    };
};
var FETCH_USERS_ERROR= 'FETCH_USERS_ERROR';
var fetchUsersError = function(error) {
    return {
        type: FETCH_USERS_ERROR,
        error: error
    };
};

var POST_OBJECTIVE_SUCCESS = 'POST_OBJECTIVE_SUCCESS';
var postObjectiveSuccess = function(data) {
    console.log(data, "post objective in sync action ")
    return {
        type: POST_OBJECTIVE_SUCCESS,
        data: data
    };
};
var POST_OBJECTIVE_ERROR= 'POST_OBJECTIVE_ERROR';
var postObjectiveError = function(error) {
    return {
        type: POST_OBJECTIVE_ERROR,
        error: error
    };
};

var DELETE_OBJECTIVE_SUCCESS = 'DELETE_OBJECTIVE_SUCCESS';
var deleteObjectiveSuccess = function(data) {
    console.log(data, "delete objective in sync action ");
    return {
        type: DELETE_OBJECTIVE_SUCCESS,
        data: data
    };
};
var DELETE_OBJECTIVE_ERROR= 'DELETE_OBJECTIVE_ERROR';
var deleteObjectiveError = function(error) {
    return {
        type: DELETE_OBJECTIVE_ERROR,
        error: error
    };
};


exports.FETCH_USERS_SUCCESS = FETCH_USERS_SUCCESS;
exports.fetchUsersSuccess = fetchUsersSuccess;
exports.FETCH_USERS_ERROR = FETCH_USERS_ERROR;
exports.fetchUsersError = fetchUsersError;

exports.POST_OBJECTIVE_SUCCESS = POST_OBJECTIVE_SUCCESS;
exports.postObjectiveSuccess = postObjectiveSuccess;
exports.POST_OBJECTIVE_ERROR = POST_OBJECTIVE_ERROR;
exports.postObjectiveError = postObjectiveError;

exports.DELETE_OBJECTIVE_SUCCESS = DELETE_OBJECTIVE_SUCCESS;
exports.deleteObjectiveSuccess = deleteObjectiveSuccess;
exports.DELETE_OBJECTIVE_ERROR = DELETE_OBJECTIVE_ERROR;
exports.deleteObjectiveError = deleteObjectiveError;
