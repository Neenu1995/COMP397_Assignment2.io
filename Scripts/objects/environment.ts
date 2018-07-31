module objects {
    export class Environment extends createjs.Bitmap {
        // member variables
        private _verticalSpeed:number;

        // constructors
        constructor() {
            super(managers.Game.AssetManager.getResult("bg"));

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the top boundary
            if(this.x <= -500) {
                this.Reset();
            }
        }

         // public methods
         public Start():void {
             this._verticalSpeed = 3; // the bg will move down 5ppf

            this.Reset();
        }

        public Update():void {
            this.x -= this._verticalSpeed;
            
            this._checkBounds();
        }

        public Reset():void {
            this.x = 0;
        }
    }
}