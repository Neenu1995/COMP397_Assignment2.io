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
        // private methods
        Play.prototype._buildSweepers = function () {
            for (var count = 0; count < this._sweeperCount; count++) {
                this._sweeper.push(new objects.Minesweeper());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this._girl = new objects.Girl();
            this._env = new objects.Environment();
            this._star = new objects.Star();
            this._sweeper = new Array();
            this._sweeperCount = 3;
            this._scoreboard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreboard;
            this._buildSweepers();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._girl.Update();
            this._env.Update();
            this._star.Update();
            managers.Collision.check(this._girl, this._star);
            if (this._star.isColliding) {
                this.removeChild(this._star);
                this._star = new objects.Star();
                this.addChild(this._star);
            }
            this._sweeper.forEach(function (sweeper) {
                sweeper.Update();
                managers.Collision.check(_this._girl, sweeper);
            });
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
            for (var _i = 0, _a = this._sweeper; _i < _a.length; _i++) {
                var sweeper = _a[_i];
                this.addChild(sweeper);
            }
            this.addChild(this._scoreboard.LivesLabel);
            this.addChild(this._scoreboard.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map