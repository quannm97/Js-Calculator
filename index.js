(function () {
    /**
     * Helper function to shortcut select
     * @param {element} element
     * @returns
     */
    const el = function (element) {
        if (element.charAt(0) === "#") {
            return document.querySelector(element);
        } else {
            return document.querySelectorAll(element);
        }
    };

    const viewer = el("#viewer"),
        equals = el("#equals"),
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
            resultNum = "";
        } else {
            theNum += element;
        }
        console.log(theNum, resultNum);

        viewer.innerHTML = theNum;
    };
    /**
     * When ops is clicked
     */
    const moveNumb = function () {
        let element = calculator.getAttribute("data-ops");
        oldNum = theNum;
        theNum = "";
        operator = element;

        equals.setAttribut("data-result", "");
        console.log(operator);
    };

    /**
     * When Equals is clicked, calculate result
     */

    const displayNum = function () {
        // Covert string to number

        oldNum = parseFloat(oldNum);
        theNum = parseFloat(theNum);

        // Perform operation
        switch (operation) {
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

            // If equal is pressed without an operator, keep number and continue
            default:
                resultNum = theNum;
        }
    };

    calculator.addEventListener("click", handleClick);
})();
