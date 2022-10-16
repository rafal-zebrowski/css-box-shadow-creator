updateBoxShadow();

document.querySelector(".horizontal-range").addEventListener("input", updateBoxShadow);
document.querySelector(".horizontal-range").addEventListener("input", updateHorizontalNumber);
document.querySelector(".horizontal-number").addEventListener("input", updateBoxShadow);
document.querySelector(".horizontal-number").addEventListener("input", updateHorizontalRange);
document.querySelector(".vertical-range").addEventListener("input", updateBoxShadow);
document.querySelector(".vertical-range").addEventListener("input", updateVerticalNumber);
document.querySelector(".vertical-number").addEventListener("input", updateBoxShadow);
document.querySelector(".vertical-number").addEventListener("input", updateVerticalRange);
document.querySelector(".blur-range").addEventListener("input", updateBoxShadow);
document.querySelector(".blur-range").addEventListener("input", updateBlurNumber);
document.querySelector(".blur-number").addEventListener("input", updateBoxShadow);
document.querySelector(".blur-number").addEventListener("input", updateBlurRange);
document.querySelector(".spread-range").addEventListener("input", updateBoxShadow);
document.querySelector(".spread-range").addEventListener("input", updateSpreadNumber);
document.querySelector(".spread-number").addEventListener("input", updateBoxShadow);
document.querySelector(".spread-number").addEventListener("input", updateSpreadRange);
document.querySelector(".color").addEventListener("input", updateBoxShadow);
document.querySelector(".inset").addEventListener("input", updateBoxShadow);
document.querySelector(".copy-css").addEventListener("click", copyCssToClipboard);

function updateBoxShadow() {
    let horizontal = document.querySelector(".horizontal-number").value;
    let vertical = document.querySelector(".vertical-number").value;
    let blur = document.querySelector(".blur-number").value;
    let spread = document.querySelector(".spread-number").value;
    let color = document.querySelector(".color").value;
    let inset = document.querySelector(".inset").checked;

    let boxShadowCSS = createBoxShadowCSSValue(horizontal, vertical, blur, spread, color, inset);

    document.querySelector(".box-shadow").style.boxShadow = boxShadowCSS;
}

function createBoxShadowCSSValue(horizontal, vertical, blur, spread, color, inset) {
    let insetString = inset ? " inset" : "";
    return horizontal + "px " + vertical + "px " + blur + "px " + spread + "px " + color + insetString;
}

function updateHorizontalNumber() {
    document.querySelector(".horizontal-number").value = document.querySelector(".horizontal-range").value;
}

function updateHorizontalRange() {
    document.querySelector(".horizontal-range").value = document.querySelector(".horizontal-number").value;
}

function updateVerticalNumber() {
    document.querySelector(".vertical-number").value = document.querySelector(".vertical-range").value;
}

function updateVerticalRange() {
    document.querySelector(".vertical-range").value = document.querySelector(".vertical-number").value;
}

function updateBlurNumber() {
    document.querySelector(".blur-number").value = document.querySelector(".blur-range").value;
}

function updateBlurRange() {
    document.querySelector(".blur-range").value = document.querySelector(".blur-number").value;
}

function updateSpreadNumber() {
    document.querySelector(".spread-number").value = document.querySelector(".spread-range").value;
}

function updateSpreadRange() {
    document.querySelector(".spread-range").value = document.querySelector(".spread-number").value;
}

function copyCssToClipboard() {
    let horizontal = document.querySelector(".horizontal-number").value;
    let vertical = document.querySelector(".vertical-number").value;
    let blur = document.querySelector(".blur-number").value;
    let spread = document.querySelector(".spread-number").value;
    let color = document.querySelector(".color").value;
    let inset = document.querySelector(".inset").checked;

    let boxShadowCSS = createBoxShadowCSSValue(horizontal, vertical, blur, spread, color, inset);
    let boxShadowCSSWebKit = createBoxShadowCSSValue(horizontal, vertical, blur, spread, color, inset);
    let boxShadowCSSMoz = createBoxShadowCSSValue(horizontal, vertical, blur, spread, color, inset);

    let CSS = "box-shadow: " + boxShadowCSS + ";\n-webkit-box-shadow: " + boxShadowCSSWebKit + ";\n-moz-box-shadow: " + boxShadowCSSMoz + ";";
    navigator.clipboard.writeText(CSS);
}