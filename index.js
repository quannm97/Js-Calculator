(function () {
    /**
     * Helper function to shortcut select
     * @param {string} element
     * @returns {NodeList|HTMLElement}
     */
    const el = function (element) {
        if (element.charAt(0) === "#") {
            return document.querySelector(element);
        } else {
            return document.querySelectorAll(element);
        }
    };

    const viewer = el("#viewer");
    const equals = el("#equals");
    const num = el(".num");
    const ops = el(".ops");
    const calculator = el("#calculator");

    let theNum = "0";
    let oldNum = "0";
    let resultNum;
    let operator;

    /**
     * When ops is clicked
     */
    const moveNumb = function () {
        let element = this.getAttribute("data-ops");
        oldNum = theNum;
        theNum = "";
        operator = element;

        equals.setAttribute("data-result", "");
        console.log(operator);
    };

    const clearAll = function () {
        oldNum = "0";
        theNum = "0";
        viewer.innerHTML = "0";
        equals.setAttribute("data-result", resultNum);
    };

    const handleClick = function (event) {
        const element = event.target;

        if (element.classList.contains("ops")) {
            moveNumb.call(event.target);
            console.log(oldNum);
        } else if (element.classList.contains("num")) {
            if (resultNum) {
                resultNum = "";
                theNum = element.getAttribute("data-num");
            } else {
                theNum += element.getAttribute("data-num");
            }
        }

        viewer.innerHTML = theNum;
        equals.addEventListener("click", calculateResult);
        el("#clear").addEventListener("click", clearAll);
    };

    /**
     * Perform the calculation
     */
    const calculateResult = function () {
        // Convert string to number
        oldNum = parseFloat(oldNum);
        theNum = parseFloat(theNum);

        // Perform operation
        switch (operator) {
            case "plus":
                resultNum = oldNum + theNum;
                break;
            case "minus":
                resultNum = oldNum - theNum;
                break;
            case "times":
                resultNum = oldNum * theNum;
                break;
            case "divided by":
                resultNum = oldNum / theNum;
                break;
            default:
                resultNum = theNum;
        }

        viewer.innerHTML = resultNum;
        equals.setAttribute("data-result", resultNum);

        oldNum = 0;
        theNum = resultNum;
    };

    
    calculator.addEventListener("click", handleClick);
})();
