module objects {
    export class Star extends objects.GameObject {
        // member variables
        private _verticalSpeed:number;

        // constructors
        constructor() {
            super("star");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the bottom boundary
            if(this.x <= (0)) {
                this.Reset();
            }

        }

         // public methods
         public Start():void {
             this._verticalSpeed = 5; // the island will move down 5ppf

            this.Reset();
        }

        public Update():void {
            this.x -= this._verticalSpeed;
            
            this._checkBounds();
        }

        public Reset():void {
           this.y = Math.floor((Math.random() * (400 - 200) + 200));
           // alert(this.height + " > " + this.halfHeight);
           //this.y = 400; 
           this.x = 800;
        }
    }
}