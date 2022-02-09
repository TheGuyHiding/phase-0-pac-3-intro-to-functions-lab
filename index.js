function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(Hello) {
    console.log(Hello.toUpperCase());
}
function logWhisper(Hello) {
    console.log(Hello.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    let soft = "I can't hear you!";
    let loud = "YES INDEED!";
    let good = "I would love to!";
    if (string.toLowerCase(string) === string) {
        return soft;

    }
    else if (string.toUpperCase(string) === string) {
        return loud;
    }
    else if ("Let's have dinner together!" === string) {
        return good;
    }
}
