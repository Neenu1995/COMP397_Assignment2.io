/**
 * C:\Users\Neenu Shaji\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\scenes\end.ts
 * Neenu Shaji - 300991504
 * Last Modified date :  31/7/18
 * Program Desc : 2D scrolling game. 
 * 
 */
module scenes {
    export class End extends objects.Scene {
        // member variables
        private _endLabel: objects.Label;
        private _backButton: objects.Button;
        private _scoreLabel: objects.Label;
          

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._endLabel = new objects.Label("Game Over!", "60px", "Consolas", "red", 500, 140, true);
            this._backButton = new objects.Button("StartButton", 500, 300, true);
            console.log(managers.Game.scoreBoard.Score);
            this._scoreLabel = new objects.Label("Final Score : "+managers.Game.scoreBoard.Score, "30px", "Consolas", "red", 500, 200, true);
           

            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Started - END SCENE");
            this.addChild(this._endLabel);
            this.addChild(this._backButton);
            this.addChild(this._scoreLabel);
           

            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}