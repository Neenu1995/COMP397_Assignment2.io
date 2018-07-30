module managers {
    export class Game {
        public static AssetManager:createjs.LoadQueue;
        public static Stage:createjs.Stage;
        public static CurrentScene:objects.Scene;
        public static CurrentState:config.Scene;
        public static keyboardManager: managers.Keyboard;
    }
}
