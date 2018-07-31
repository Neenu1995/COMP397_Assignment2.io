/**
 * C:\Users\Neenu Shaji\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\objects\minesweeper.ts
 * Neenu Shaji - 300991504
 * Last Modified date :  31/7/18
 * Program Desc : 2D scrolling game. 
 * 
 */
namespace objects {
    export class Minesweeper extends objects.GameObject {
      // member variables
      private _verticalSpeed: number;
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Minesweeper.
       * @memberof Minesweeper
       */
      constructor() {
        super("sweeper");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds(): void {
        // check bottom boundary
        if (this.y > config.Screen.HEIGHT + this.halfHeight) {
          this.Reset();
        }
      }
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        
        this.Reset();
      }
  
      public Update(): void {
        this.y += this._verticalSpeed;
        this.x += this._horizontalSpeed;
        this._checkBounds();
      }
  
      public Reset(): void {
        this._verticalSpeed =  Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
        this._horizontalSpeed = Math.floor((Math.random() * 4) -2); // between -2 and 2 ppf
        this.y = -this.height;
        this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
      }
    }
  }
  