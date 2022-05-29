/*
===============
| URL ROUTING |
==================================================================================================================================

? @author:              William J. Horn
? @doc-name:            index.js
? @doc-created:         05/29/2022
? @doc-modified:        05/29/2022

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

This program file is responsible for the handling of all url routes within the application, including GET, POST, UPDATE,
and DELETE requests.

==================================================================================================================================
*/
const router = require('express').Router();

router.use('/', require('./root'));
router.use('/api', require('./api'));


module.exports = router;
