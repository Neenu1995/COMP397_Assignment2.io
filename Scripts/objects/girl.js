var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * C:\Users\Neenu Shaji\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\objects\girl.ts
 * Neenu Shaji - 300991504
 * Last Modified date :  31/7/18
 * Program Desc : 2D scrolling game.
 *
 */
var objects;
(function (objects) {
    var Girl = /** @class */ (function (_super) {
        __extends(Girl, _super);
        // member variables
        // constructors
        function Girl() {
            var _this = _super.call(this, "girl") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Girl.prototype._checkBounds = function () {
            // check the right boundary
            if (this.x > (config.Screen.WIDTH - this.halfWidth)) {
                //       this.x = config.Screen.WIDTH - this.halfWidth;
            }
            // check the left boundary
            if (this.x < this.halfWidth) {
                //     this.x = this.halfWidth;
            }
        };
        // public methods
        Girl.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 370;
            this.x = 100;
        };
        Girl.prototype.Update = function () {
            this.x = managers.Game.Stage.mouseX;
            this.Move();
            this._checkBounds();
        };
        Girl.prototype.Reset = function () {
        };
        Girl.prototype.Move = function () {
            if (managers.Game.keyboardManager.jump) {
                this.y = 270;
            }
            else {
                this.y = 370;
            }
        };
        return Girl;
    }(objects.GameObject));
    objects.Girl = Girl;
})(objects || (objects = {}));
//# sourceMappingURL=girl.js.map