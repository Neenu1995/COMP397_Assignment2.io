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
 * C:\Users\Neenu Shaji\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\objects\environment.ts
 * Neenu Shaji - 300991504
 * Last Modified date :  31/7/18
 * Program Desc : 2D scrolling game.
 *
 */
var objects;
(function (objects) {
    var Environment = /** @class */ (function (_super) {
        __extends(Environment, _super);
        // constructors
        function Environment() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("bg")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Environment.prototype._checkBounds = function () {
            // check the top boundary
            if (this.x <= -500) {
                this.Reset();
            }
        };
        // public methods
        Environment.prototype.Start = function () {
            this._verticalSpeed = 3; // the bg will move down 5ppf
            this.Reset();
        };
        Environment.prototype.Update = function () {
            this.x -= this._verticalSpeed;
            this._checkBounds();
        };
        Environment.prototype.Reset = function () {
            this.x = 0;
        };
        return Environment;
    }(createjs.Bitmap));
    objects.Environment = Environment;
})(objects || (objects = {}));
//# sourceMappingURL=environment.js.map