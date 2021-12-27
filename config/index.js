import sendEmailHandler from "../handlers/sendEmail.js";

export default {
	sendEmail: {
		frequency: "* * * * *",
		handler: sendEmailHandler,
	},
};
