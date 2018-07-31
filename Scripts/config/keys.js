/**
 * C:\Users\Neenu Shaji\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\config\keys.ts
 * Neenu Shaji - 300991504
 * Last Modified date :  31/7/18
 * Program Desc : 2D scrolling game.
 *
 */
var config;
(function (config) {
    var Keys = /** @class */ (function () {
        function Keys() {
        }
        //arrow keys
        Keys.LEFT_ARROW = 37;
        Keys.RIGHT_ARRROW = 39;
        Keys.up_ARROW = 38;
        Keys.down_ARRROW = 40;
        //wasd keys
        Keys.W = 87;
        Keys.A = 65;
        Keys.S = 83;
        Keys.D = 68;
        //space bar
        Keys.SPACE = 32;
        return Keys;
    }());
    config.Keys = Keys;
})(config || (config = {}));
//# sourceMappingURL=keys.js.map