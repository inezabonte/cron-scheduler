import "dotenv/config";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function () {
	const msg = {
		to: "inezabonte@gmail.com", // Change to your recipient
		from: process.env.SENDER_EMAIL, // Change to your verified sender
		subject: "Sending with Cronjobs is Fun",
		text: "and easy to do anywhere, even with Node.js",
		html: "<strong>and easy to do anywhere, even with Node.js</strong>",
	};

	sgMail
		.send(msg)
		.then(() => {
			console.log("An email has been sent");
		})
		.catch((error) => {
			console.error(error);
		});
}
