
function onClickInternalLink(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}