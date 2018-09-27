const router = require("express").Router();

router.get('/', function (request, response) {
    response.send("index");
});

module.exports = router;