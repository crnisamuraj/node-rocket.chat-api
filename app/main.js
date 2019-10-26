const attachment = require("./modules/rcPostWebhook");

const program = require('commander');

rcURL = 'https://chat.doobinnovation.com'

webhookURL = '/hooks/eZfAC2BgpD6vPLwS8/r9GKi89vNMJiJwh4p5PewfviPkg5pEzThNjWzBxnivJCReds'

url = rcURL + webhookURL;
color = '#764FF5'

program
	.option('-u, --url <url>', 'Rocket.Chat webhook url', url)
	.option('-m, --message <message>', 'Root message box content')
	.option('-t, --attachment-title <title>', 'Attachment title')
	.option('-a, --attachment-message <message>', 'Attachment message to be sent')
	.option('-c, --attachment-color <color>', 'Attachment color', color);

	program.parse(process.argv);

attachment.post(program.url, program.message, program.attachmentTitle, program.attachmentMessage, program.attachmentColor);

