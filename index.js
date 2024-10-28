const _ = require("lodash");
const util = require("util");
const chalk = require("chalk");

const timeUtil = require("./utils/time.util");
const logTypeEnum = require("./enums/log.type.enum");
const severityEnum = require("./enums/severity.enum");

function getStringAccordingToSeverity(str, severity) {
    switch (severity) {
        case severityEnum.LOW:
            return chalk.whiteBright(str);
        case severityEnum.MEDIUM:
            return chalk.bgBlueBright(chalk.yellowBright(str));
        case severityEnum.HIGH:
            return chalk.bgRedBright(chalk.yellowBright(str));
        default:
            return chalk.whiteBright(str);
    }
}

function jsonToLine(json, severity) {
    if (!_.isObject(json)) {
        return getStringAccordingToSeverity(json, severity);
    }

    return Object.keys(json).map((key) => {
        return `${chalk.magentaBright(key)}: ${getStringAccordingToSeverity(json[key], severity)}`
    }).join("   ");
}

function logInfo(info, severity = severityEnum.LOW) {
    try {
        if (!Object.values(severityEnum).includes(severity)) {
            throw new Error(`Invalid severity level! severity: ${severity}`);
        }

        console.log(chalk.blueBright(`[ ${timeUtil.getCurrentIndianTime()} ]`) + " | " + chalk.greenBright(logTypeEnum.INFO) + " | " + jsonToLine(info, severity));
    } catch (error) {
        throw error;
    }
}

function logError(error, severity = severityEnum.LOW) {
    try {
        if (!Object.values(severityEnum).includes(severity)) {
            throw new Error(`Invalid severity level! severity: ${severity}`);
        }

        console.log(chalk.blueBright(`[ ${timeUtil.getCurrentIndianTime()} ]`) + " | " + chalk.redBright(logTypeEnum.ERROR) + " | " + (error instanceof Error ? jsonToLine(util.inspect(error), severity) : jsonToLine(error, severity)));
    } catch (error) {
        throw error;
    }
}

function logWarning(warning, severity = severityEnum.LOW) {
    try {
        if (!Object.values(severityEnum).includes(severity)) {
            throw new Error(`Invalid severity level! severity: ${severity}`);
        }

        console.log(chalk.blueBright(`[ ${timeUtil.getCurrentIndianTime()} ]`) + " | " + chalk.yellowBright(logTypeEnum.WARNING) + " | " + jsonToLine(warning, severity));
    } catch (error) {
        throw error;
    }
}

module.exports = {
    logInfo: logInfo,
    logError: logError,
    logWarning: logWarning,
    severityEnum: severityEnum
}