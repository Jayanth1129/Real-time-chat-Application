const express = require("express");
const router = express.Router();
const { getMessages } = require("../controllers/chat.controller");

router.get("/:chatId/messages", getMessages);

module.exports = router;
