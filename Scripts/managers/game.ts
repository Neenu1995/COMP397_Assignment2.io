/**
 * C:\Users\Neenu Shaji\Desktop\COMP397_Assignment2\COMP397_Assignment2\Scripts\managers\game.ts
 * Neenu Shaji - 300991504
 * Last Modified date :  31/7/18
 * Program Desc : 2D scrolling game. 
 * 
 */
module managers {
    export class Game {
        public static AssetManager:createjs.LoadQueue;
        public static CurrentScene:objects.Scene;
        public static CurrentState:config.Scene;
        public static Stage:createjs.Stage;
        public static keyboardManager: managers.Keyboard;
        public static scoreBoard:managers.ScoreBoard;
    }
}