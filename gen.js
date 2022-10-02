const slider = document.querySelector("#age"); /* input */
const output = document.querySelector("#age-value"); /* output */
const howOftenSlider = document.querySelector("#how-many-times"); /* input */
const howOftenOutput = document.querySelector("#how-many-times-output-value"); /* output */

slider.addEventListener("input", function() {
    let x = slider.value;
    var color = `linear-gradient(90deg, rgb(142, 202, 230) ${x}%, rgb(214, 214, 214) ${x}%)`;

    slider.style.background = color;
});

howOftenSlider.addEventListener("input", function() {
    let x = howOftenSlider.value;
    var color = `linear-gradient(90deg, rgb(115, 207, 223) ${x * 14.2}%, rgb(214, 214, 214) ${x * 14.2}%)`;

    howOftenSlider.style.background = color;
});




