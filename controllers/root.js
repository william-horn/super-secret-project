
const router = require('express').Router();

const GET_root = (req, res) => {
    res.status(200).json('Client connected');
}

const POST_root = (req, res) => {}
const PUT_root = (req, res) => {}
const DELETE_root = (req, res) => {}

// * example url: localhost:port/
router
    .route('/')
    .get(GET_root)
    .post(POST_root)
    .put(PUT_root)
    .delete(DELETE_root)

/*
    * example url: localhost:port/settings

    router
        .route('/settings')
        .get(GET_root)
        .post(POST_root)
        .put(PUT_root)
        .delete(DELETE_root)
*/

module.exports = router;
