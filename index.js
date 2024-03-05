const _ = require("lodash");
const util = require("util");
const chalk = require("chalk");

const timeUtil = require("./utils/time.util");
const logTypeEnum = require("./enums/log.type.enum");

function jsonToLine(json) {
    if (!_.isObject(json)) {
        return chalk.whiteBright(json);
    }
    return Object.keys(json).map((key) => {
        return `${chalk.magentaBright(key)}: ${chalk.whiteBright(json[key])}`
    }).join("   ");
}

function logInfo(info) {
    try {
        console.log(chalk.blueBright(`[ ${timeUtil.getCurrentIndianTime()} ]`) + " | " + chalk.greenBright(logTypeEnum.INFO) + " | " + jsonToLine(info));
    } catch (error) {
        throw error;
    }
}

function logError(error) {
    try {
        console.log(chalk.blueBright(`[ ${timeUtil.getCurrentIndianTime()} ]`) + " | " + chalk.redBright(logTypeEnum.ERROR) + " | " + (error instanceof Error ? util.inspect(error) : jsonToLine(error)));
    } catch (error) {
        throw error;
    }
}

function logWarning(warning) {
    try {
        console.log(chalk.blueBright(`[ ${timeUtil.getCurrentIndianTime()} ]`) + " | " + chalk.yellowBright(logTypeEnum.WARNING) + " | " + jsonToLine(warning));
    } catch (error) {
        throw error;
    }
}

module.exports = {
    logInfo: logInfo,
    logError: logError,
    logWarning: logWarning
}