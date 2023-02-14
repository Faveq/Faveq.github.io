console.log("klik");
let intro_panel = document.querySelector(".intro-panel");
let first_panel = document.querySelector(".first-panel");
let second_panel = document.querySelector(".second-panel");
let third_panel = document.querySelector(".third-panel");
let fourth_panel = document.querySelector(".fourth-panel");
let starting_btn = document.querySelector("#starting-btn");
let welcome = document.querySelector(".welcome");
let footer = document.querySelector("footer");
let first_panel_writing = document.querySelector(".intro-panel-h1") //btn zooming in
;
let nav = document.querySelector("nav");
document.documentElement.scrollTop = 0;
function startBtnClicked() {
    starting_btn.classList.add("animate__animated", "animate__zoomOutUp") //btn zooming out
    ;
    starting_btn.classList.remove("starting-btn:hover");
    welcome.classList.remove("opacity");
    welcome.classList.add("animate__animated", "animate__zoomInUp") //welcome zooming in
    ;
    setTimeout(()=>{
        welcome.classList.add("animate__animated", "animate__zoomOutUp") //welcome zooming out
        ;
        first_panel_writing.classList.add("animate__animated", "animate__zoomInUp") //first_panel_writing zooming in
        ;
        first_panel_writing.classList.remove("opacity");
        setTimeout(()=>{
            first_panel_writing.classList.remove("animate__animated", "animate__zoomInUp") //first_panel_writing leaving
            ;
            first_panel_writing.classList.add("animate__animated", "animate__hinge");
            footer.classList.add("animate__animated", "animate__fadeOut");
            footer;
            setTimeout(()=>contentLoad(), 2000);
        }, 2000);
    }, 2000);
}
//load the rest of the site
function contentLoad() {
    intro_panel.parentNode.removeChild(intro_panel);
    first_panel.classList.remove("opacity", "height", "padding") //showing first panel
    ;
    first_panel.classList.add("animate__animated", "animate__fadeIn");
    second_panel.classList.remove("opacity", "height", "padding") //showing second panel
    ;
    second_panel.classList.add("animate__animated", "animate__fadeIn");
    third_panel.classList.remove("opacity", "height", "padding") //showing third panel
    ;
    third_panel.classList.add("animate__animated", "animate__fadeIn");
    fourth_panel.classList.remove("opacity", "height", "padding") //showing fourth panel
    ;
    fourth_panel.classList.add("animate__animated", "animate__fadeIn");
    nav.classList.add("animate__animated", "animate__fadeIn") //showing nav
    ;
    nav.classList.remove("opacity");
    footer.style.position = "relative";
    footer.classList.remove("animate__animated", "animate__fadeOut") //footer in, on the bottom, after load
    ;
    footer.classList.add("animate__animated", "animate__fadeIn");
}

//# sourceMappingURL=index.4f492e9b.js.map
