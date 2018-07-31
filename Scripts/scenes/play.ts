module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _girl:objects.Girl;
        private _env:objects.Environment;
        private _star:objects.Star;
        private _sweeper : objects.Minesweeper[];
        private _scoreboard : managers.ScoreBoard;
        private _sweeperCount:number;


        // constructors
        constructor() {
            super();
            this.Start();
        }

         // private methods
         private _buildSweepers():void {
            for (let count = 0; count < this._sweeperCount; count++) {
                this._sweeper.push(new objects.Minesweeper());
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {

            this._girl = new objects.Girl();
            this._env = new objects.Environment();
            this._star = new objects.Star();
            this._sweeper = new Array<objects.Minesweeper>();
            this._sweeperCount = 3;
            this._scoreboard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreboard;
            this._buildSweepers();
            this.Main();
        }

        public Update():void {
            this._girl.Update();
            this._env.Update();
            this._star.Update();
          

            managers.Collision.check(this._girl, this._star);
            if(this._star.isColliding)
            {
                this.removeChild(this._star);
                this._star = new objects.Star();
                this.addChild(this._star);
            }
            this._sweeper.forEach(sweeper => {
                sweeper.Update();
                managers.Collision.check(this._girl, sweeper);
            });
         

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
            for (const sweeper of this._sweeper) {
                this.addChild(sweeper);
            }

            this.addChild(this._scoreboard.LivesLabel);
            this.addChild(this._scoreboard.ScoreLabel);

     
        }
    }
}