import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf, json } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `[${level}] ${timestamp}: ${JSON.stringify(message)}`;
});

const developmentLogger = createLogger({
    level: "debug",
    format: combine(
        format.colorize(),
        timestamp({ format: "HH:MM:SS" }),
        myFormat
    ),
    transports: [new transports.Console()],
});

const productionLogger = createLogger({
    level: "info",
    format: combine(
        format.colorize(),
        timestamp(),
        json(),
    ),
    transports: [
        new transports.Console(),
        // new transports.File({ filename: "logs/combined.log" })
    ],
});

let logger = developmentLogger;

if (process.env.NODE_ENV === "development") {
    logger = developmentLogger;
} else if (process.env.NODE_ENV === "production") {
    logger = productionLogger;
}

export default logger;
