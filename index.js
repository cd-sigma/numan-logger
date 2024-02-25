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

logInfo("Hello.my name is numan");
logError(new Error("Panick, an error has occurred!"));
logWarning("This is just a warning so you can relax");

module.exports = {
    logInfo: logInfo,
    logError: logError,
    logWarning: logWarning
}