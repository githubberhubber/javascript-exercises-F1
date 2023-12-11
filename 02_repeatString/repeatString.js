const repeatString = function (msg, num) {
    let completedMsg = "";
    if (num < 0) {
        return "ERROR";
    }
    for (i = 0; i < num; i++) {
        completedMsg += msg;
    }
    return completedMsg;

};

// Do not edit below this line
module.exports = repeatString;
