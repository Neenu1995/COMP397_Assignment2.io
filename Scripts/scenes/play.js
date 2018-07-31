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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        Play.prototype.Start = function () {
            this._girl = new objects.Girl();
            this._env = new objects.Environment();
            this._star = new objects.Star();
            this._sweeper = new objects.Minesweeper;
            this._scoreboard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreboard;
            this.Main();
        };
        Play.prototype.Update = function () {
            this._girl.Update();
            this._env.Update();
            this._star.Update();
            this._sweeper.Update();
            managers.Collision.check(this._girl, this._star);
            managers.Collision.check(this._girl, this._sweeper);
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Started - PLAY SCENE");
            // add the Background object to the scene
            this.addChild(this._env);
            // add the Star object to the scene
            this.addChild(this._star);
            // add the Girl object to the scene
            this.addChild(this._girl);
            this.addChild(this._sweeper);
            this.addChild(this._scoreboard.LivesLabel);
            this.addChild(this._scoreboard.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map