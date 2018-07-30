module scenes {
    export class Play extends objects.Scene {
        // member variables
        

        // constructors
        constructor() {
            super();
            this.Start();
        }

        // private methods
       
        // public methods
        public Start():void {

          
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
            console.log("Started - PLAY SCENE");

           
        }
    }
}