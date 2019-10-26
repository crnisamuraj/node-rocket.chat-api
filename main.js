const postAttachment = require("./rcPostWebhook");

const program = require('commander');

url = 'https://chat.doobinnovation.com/hooks/eZfAC2BgpD6vPLwS8/r9GKi89vNMJiJwh4p5PewfviPkg5pEzThNjWzBxnivJCReds'
color = '#764FF5'
program
	.option('-u, --url <url>', 'Rocket.Chat webhook url', url)
	.option('-m, --message <message>', 'Root message box content')
	.option('-t, --attachment-title <title>', 'Attachment title')
	.option('-a, --attachment-message <message>', 'Attachment message to be sent')
	.option('-c, --attachment-color <color>', 'Attachment color', color);

	program.parse(process.argv);

postAttachment.post(program.url, program.message, program.attachmentTitle, program.attachmentMessage, program.attachmentColor);

