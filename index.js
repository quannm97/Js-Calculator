(function () {
    /**
     * Helper function to shortcut select
     * @param {element} element 
     * @returns 
     */
    const el = function (element) {
        if (element.charAt(0) === '#') {
            return document.querySelector(element);
        }
        else {
            return document.querySelectorAll(element);
        }
    }

    const viewer = el('#viewer'),
    equals = el('#equals'),
    num = el(".num"),
    ops = el(".ops"),
    calculator = el("#calculator");
    
    let theNum = "",
    oldNum = "",
    resultNum,
    operator;

    const handleClick = function (event) {

        const element = event.target.getAttribute("data-num");
        if (resultNum) {
            theNum = element;
            resultNum = ''
        }
        else {
            theNum += element;
        }
        console.log(theNum, resultNum);

        viewer.innerHTML = theNum;
    }
    calculator.addEventListener("click", handleClick)
})();