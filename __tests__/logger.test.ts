import { ILogger } from "@faustbrian/common-logger";
import { complianceTests } from "../src";

export class Logger implements ILogger {
	public emergency(message: string, context: any): void {
		this.log("emergency", message, context);
	}

	public alert(message: string, context: any): void {
		this.log("alert", message, context);
	}

	public critical(message: string, context: any): void {
		this.log("critical", message, context);
	}

	public error(message: string, context: any): void {
		this.log("error", message, context);
	}

	public warning(message: string, context: any): void {
		this.log("warning", message, context);
	}

	public notice(message: string, context: any): void {
		this.log("notice", message, context);
	}

	public info(message: string, context: any): void {
		this.log("info", message, context);
	}

	public debug(message: string, context: any): void {
		this.log("debug", message, context);
	}

	public log(level: string, message: string, context: any): void {
		console.log([level, message, context]);
	}
}

complianceTests(new Logger());
