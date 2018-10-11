 function add(num1, num2)
  {
    return num1 + num2;
  }

  function subtract(num1, num2)
  {
    return num1 - num2;
  }

  function multiply(num1, num2)
  {
    return num1 * num2;
  }

  function addNumbers()
  {
    var v1 = document.getElementById("value1").value;
    var v2 = document.getElementById("value2").value;

    v1 = parseInt(v1);
    v2 = parseInt(v2);

    var v3 = v1 + v2;

    document.getElementById("value3").value = v3;
  }


/**
 * @class
 * A JsUnitTestSuite represents a suite of JsUnit Test Pages.  Test Pages and Test Suites can be added to a
 * JsUnitTestSuite
 * @constructor
 */
function JsUnitTestSuite() {
    /**
     * Declares that this object is a JsUnitTestSuite
     */
    this.isJsUnitTestSuite = true;
    /**
     * @private
     */
    this._testPages = Array();
    /**
     * @private
     */
    this._pageIndex = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]._testPages) {
            this.addTestSuite(arguments[i]);
        } else {
            this.addTestPage(arguments[i]);
        }
    }
}