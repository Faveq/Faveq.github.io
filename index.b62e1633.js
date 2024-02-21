document.body.scrollTop = document.documentElement.scrollTop = 0;
let main_color = "#e6af2e";
let second_color = "#191716";
let accent_color = "#e0e2db";
let intro_panel = document.querySelector(".intro-panel");
let first_panel = document.querySelector(".first-panel");
let second_panel = document.querySelector(".second-panel");
let third_panel = document.querySelector(".third-panel");
let fourth_panel = document.querySelector(".fourth-panel");
let starting_btn = document.querySelector(".starting-btn");
let welcome = document.querySelector(".welcome");
let footer = document.querySelector("footer");
let first_panel_writing = document.querySelector(".intro-panel-h1") //btn zooming in
;
let nav = document.querySelector("nav");
//nav script
const sections = document.querySelectorAll("div");
const nav_dot = document.querySelectorAll(".nav-dot");
const text_link = document.querySelectorAll(".text-link");
window.onscroll = ()=>{
    var current = "";
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 300) current = section.getAttribute("id");
    });
    nav_dot.forEach((dot)=>{
        dot.classList.remove("active");
        if (dot.classList.contains(current)) dot.classList.add("active");
    });
    text_link.forEach((li)=>{
        li.classList.remove("active");
        if (li.classList.contains(current)) li.classList.add("active");
    });
};
function startButtonClicked() {
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
            setTimeout(()=>contentLoad(), 2000);
        }, 2000);
    }, 2000);
}
//load rest of the site
function contentLoad() {
    intro_panel.style.display = "none";
    first_panel.classList.remove("opacity", "height") //showing first panel
    ;
    first_panel.classList.add("animate__animated", "animate__fadeIn");
    second_panel.classList.remove("opacity", "height") //showing second panel
    ;
    second_panel.classList.add("animate__animated", "animate__fadeIn");
    third_panel.classList.remove("opacity", "height") //showing third panel
    ;
    third_panel.classList.add("animate__animated", "animate__fadeIn");
    fourth_panel.classList.remove("opacity", "height") //showing fourth panel
    ;
    fourth_panel.classList.add("animate__animated", "animate__fadeIn");
    nav.classList.add("animate__animated", "animate__fadeIn") //showing nav
    ;
    nav.classList.remove("opacity");
    footer.style.position = "relative";
    footer.classList.remove("animate__animated", "animate__fadeOut") //footer in on the bottom, after load
    ;
    footer.classList.add("animate__animated", "animate__fadeIn");
}

//# sourceMappingURL=index.b62e1633.js.map
