
function redirect() {
    if (typeof(location.replace) !=="undefined") {
        location.replace("http://www.braingia.org?shjs-replace");
    } else {
        location.href = "http://www.braingia.org?shjs-href";
    }
}

setTimeout('redirect()',5000);

if (typeof(location.replace) !=="undefined") {
    location.replace("http://www.braingia.org?shjs-replace");
} else {
    location.href = "http://www.braingia.org?shjs-href";
}

for (propt in location) {
    document.write("location property " + propt + " is currently: ");
    document.write(location[propt] + "<br />\n");
}

for (propt in navigator) {
    document.write("navigator property" + propt + " is currently: ");
    document.write(navigator[propt] + "<br />\n");
}

for (propt in screen) {
    document.write("Screen property " + propt + " is currently: ");
    document.write(screen[propt] + "<br />\n");
}
