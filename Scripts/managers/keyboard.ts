/**
 * C:\Users\Neenu Shaji\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\managers\keyboard.ts
 * Neenu Shaji - 300991504
 * Last Modified date :  31/7/18
 * Program Desc : 2D scrolling game. 
 * 
 */
module  managers{
    export class Keyboard{
        //private variables
    
        //public variables
      
        public jump: boolean;
        public enabled: boolean;
        public paused: boolean;
    
        //constructors
        constructor(){
            this.enabled = true;
            document.addEventListener('keydown',this.onSpacePress.bind(this),false);
            document.addEventListener('keyup',this.onSpaceRelease.bind(this),false);
           
        }
    
        //private methods
    
        //public methods
        public onSpacePress(event:KeyboardEvent):void{
        switch(event.keyCode){
            
            case config.Keys.SPACE:
            this.jump = true;
            createjs.Sound.play("Jump.wav");
            break;
    
        }
        }

        public onSpaceRelease(event:KeyboardEvent):void{
            switch(event.keyCode){
                
                case config.Keys.SPACE:
                this.jump = false;
                break;
        
            }
            }
    
    
    }
        }
    