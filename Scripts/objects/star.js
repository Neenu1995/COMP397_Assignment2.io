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
var objects;
(function (objects) {
    var Star = /** @class */ (function (_super) {
        __extends(Star, _super);
        // constructors
        function Star() {
            var _this = _super.call(this, "star") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Star.prototype._checkBounds = function () {
            // check the bottom boundary
            if (this.x <= (0)) {
                this.Reset();
            }
        };
        // public methods
        Star.prototype.Start = function () {
            this._verticalSpeed = 5; // the island will move down 5ppf
            this.Reset();
        };
        Star.prototype.Update = function () {
            this.x -= this._verticalSpeed;
            this._checkBounds();
        };
        Star.prototype.Reset = function () {
            this.y = Math.floor((Math.random() * (400 - 200) + 200));
            // alert(this.height + " > " + this.halfHeight);
            //this.y = 400; 
            this.x = 800;
        };
        return Star;
    }(objects.GameObject));
    objects.Star = Star;
})(objects || (objects = {}));
//# sourceMappingURL=star.js.map