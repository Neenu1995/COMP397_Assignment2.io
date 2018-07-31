module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _messageLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructions:objects.Label;

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
            this._instructions = new objects.Label("Collect Stars.Avoid Minesweepers.", "20px", "Consolas", "red", 500, 340, true);
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
            this.addChild(this._instructions);    

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}