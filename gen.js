const slider = document.querySelector("#age");
const output = document.querySelector("#age-value");

slider.addEventListener("mousemove", function() {
    let x = slider.value;
    var color = `linear-gradient(90deg, rgb(115, 207, 223) ${x}%, rgb(214, 214, 214) ${x}%)`;

    slider.style.background = color;
});


