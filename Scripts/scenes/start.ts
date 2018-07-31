/**
 * C:\Users\Neenu Shaji\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\scenes\start.ts
 * Neenu Shaji - 300991504
 * Last Modified date :  31/7/18
 * Program Desc : 2D scrolling game. 
 * 
 */
module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _messageLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructions1:objects.Label;
        private _instructions2:objects.Label;
        private _instructions3:objects.Label;
        private _instructions4:objects.Label;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "red", 500, 80, true);
            this._messageLabel = new objects.Label("Press Button to start game!", "20px", "Consolas", "red", 500, 140, true);
            this._instructions1 = new objects.Label("1.Collect Stars.", "20px", "Consolas", "red", 500, 330, true);
            this._instructions2 = new objects.Label("2.Avoid Minesweepers.", "20px", "Consolas", "red", 500, 350, true);
            this._instructions3 = new objects.Label("3.Use mouse to move back and forth.", "20px", "Consolas", "red", 500, 370, true);
            this._instructions4 = new objects.Label("4.Use space bar to jump.", "20px", "Consolas", "red", 500, 390, true);
            this._startButton = new objects.Button("StartButton", 500, 240, true);

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
            console.log("Started - START SCENE");
            this.addChild(this._welcomeLabel);
            this.addChild(this._messageLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructions1);   
            this.addChild(this._instructions2);
            this.addChild(this._instructions3);
            this.addChild(this._instructions4);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}