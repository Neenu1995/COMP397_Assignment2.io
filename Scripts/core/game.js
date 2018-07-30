(function () {
    "use strict";
    //Game variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var helloButton;
    var manifest = [
        { id: "hello", src: "/Assets/helloButton.png" }
    ];
    function Init() {
        console.log("Init method.");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.on("complete", Start);
        assetManager.loadManifest(manifest);
        // Start();
    }
    function Start() {
        console.log("Start method.");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("Game's main method.");
        // start button
        helloButton = new createjs.Bitmap(assetManager.getResult("hello"));
        helloButton.regX = helloButton.getBounds().width * 0.5;
        helloButton.regY = helloButton.getBounds().height * 0.5;
        helloButton.x = 500;
        helloButton.y = 240;
        stage.addChild(helloButton);
        // start button listeners
        helloButton.addEventListener("click", function () {
            console.log("Hello Button Clicked");
        });
        helloButton.addEventListener("mouseover", function (event) {
            event.currentTarget.alpha = 0.7;
        });
        helloButton.addEventListener("mouseout", function (event) {
            event.currentTarget.alpha = 1.0;
        });
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map