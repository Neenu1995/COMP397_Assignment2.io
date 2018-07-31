module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _girl:objects.Girl;
        private _env:objects.Environment;
        private _star:objects.Star;
        private _sweeper : objects.Minesweeper;
        private _scoreboard : managers.ScoreBoard;


        // constructors
        constructor() {
            super();
            this.Start();
        }


        // public methods
        public Start():void {

            this._girl = new objects.Girl();
            this._env = new objects.Environment();
            this._star = new objects.Star();
            this._sweeper = new objects.Minesweeper;
            this._scoreboard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreboard;
            this.Main();
        }

        public Update():void {
            this._girl.Update();
            this._env.Update();
            this._star.Update();
            this._sweeper.Update();

            managers.Collision.check(this._girl, this._star);
            managers.Collision.check(this._girl, this._sweeper);

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
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

     
        }
    }
}