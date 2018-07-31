/**
 * C:\Users\Neenu Shaji\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\managers\keyboard.ts
 * Neenu Shaji - 300991504
 * Last Modified date :  31/7/18
 * Program Desc : 2D scrolling game.
 *
 */
var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        //constructors
        function Keyboard() {
            this.enabled = true;
            document.addEventListener('keydown', this.onSpacePress.bind(this), false);
            document.addEventListener('keyup', this.onSpaceRelease.bind(this), false);
        }
        //private methods
        //public methods
        Keyboard.prototype.onSpacePress = function (event) {
            switch (event.keyCode) {
                case config.Keys.SPACE:
                    this.jump = true;
                    createjs.Sound.play("Jump.wav");
                    break;
            }
        };
        Keyboard.prototype.onSpaceRelease = function (event) {
            switch (event.keyCode) {
                case config.Keys.SPACE:
                    this.jump = false;
                    break;
            }
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map