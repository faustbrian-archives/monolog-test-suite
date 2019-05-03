import { ILogger } from "@faustbrian/common-logger";

export const complianceTests = (logger: ILogger) => {
	test.each(["emergency", "alert", "critical", "error", "warning", "notice", "info", "debug"])(
		".%s(message)",
		level => {
			const spyLog: jest.SpyInstance = jest.spyOn(logger, "log");

			// @ts-ignore
			logger[level]("Hello World");

			expect(spyLog).toHaveBeenCalledWith(level, "Hello World", undefined);

			spyLog.mockReset();
		},
	);
};
