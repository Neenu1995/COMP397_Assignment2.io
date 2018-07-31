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
 * C:\Users\Neenu Shaji\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\scenes\start.ts
 * Neenu Shaji - 300991504
 * Last Modified date :  31/7/18
 * Program Desc : 2D scrolling game.
 *
 */
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "red", 500, 80, true);
            this._messageLabel = new objects.Label("Press Button to start game!", "20px", "Consolas", "red", 500, 140, true);
            this._instructions1 = new objects.Label("1.Collect Stars.", "20px", "Consolas", "red", 500, 330, true);
            this._instructions2 = new objects.Label("2.Avoid Minesweepers.", "20px", "Consolas", "red", 500, 350, true);
            this._instructions3 = new objects.Label("3.Use mouse to move back and forth.", "20px", "Consolas", "red", 500, 370, true);
            this._instructions4 = new objects.Label("4.Use space bar to jump.", "20px", "Consolas", "red", 500, 390, true);
            this._startButton = new objects.Button("StartButton", 500, 240, true);
            this.Main();
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Started - START SCENE");
            this.addChild(this._welcomeLabel);
            this.addChild(this._messageLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructions1);
            this.addChild(this._instructions2);
            this.addChild(this._instructions3);
            this.addChild(this._instructions4);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map