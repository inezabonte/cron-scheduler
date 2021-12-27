import cron from "node-cron";

export default function initCron(config) {
	Object.keys(config).forEach((key) => {
		if (cron.validate(config[key].frequency)) {
			cron.schedule(config[key].frequency, () => {
				const handler = config[key].handler;
				handler();
			});
		}
	});
}
