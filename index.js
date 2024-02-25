const chalk = require("chalk");
const util = require("util");

const timeUtil = require("./utils/time.util");
const logTypeEnum = require("./enums/log.type.enum");

function logInfo(info) {
    try {
        console.log(chalk.blueBright(`[ ${timeUtil.getCurrentIndianTime()} ]`) + " | " + chalk.greenBright(logTypeEnum.INFO) + " | " + chalk.whiteBright(info));
    } catch (error) {
        throw error;
    }
}

function logError(error) {
    try {
        console.log(chalk.blueBright(`[ ${timeUtil.getCurrentIndianTime()} ]`) + " | " + chalk.redBright(logTypeEnum.ERROR) + " | " + chalk.whiteBright(util.inspect(error)));
    } catch (error) {
        throw error;
    }
}

function logWarning(warning) {
    try {
        console.log(chalk.blueBright(`[ ${timeUtil.getCurrentIndianTime()} ]`) + " | " + chalk.yellowBright(logTypeEnum.WARNING) + " | " + chalk.whiteBright(warning));
    } catch (error) {
        throw error;
    }
}

module.exports = {
    logInfo: logInfo,
    logError: logError,
    logWarning: logWarning
}