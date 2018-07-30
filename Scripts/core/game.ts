(function(){

    "use strict";
    //Game variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let assetManager;
    let helloButton;
    let helloLabel:objects.Label ;

    
  let manifest = [
    { id: "hello", src: "/Assets/helloButton.png" }] 

    function Init() :void {
        console.log("Init method.");
        assetManager = new createjs.LoadQueue();
      assetManager.installPlugin(createjs.Sound);
      assetManager.on("complete", Start);
      assetManager.loadManifest(manifest);

       // Start();
        
    }
    function Start() :void {
        console.log("Start method.")
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);

        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick",Update);
        Main();
    }
    function Update() :void{
        stage.update();    

    }
    function Main() :void{
        console.log("Game's main method.")
        //Main method
        helloLabel = new objects.Label("Hi!!","36px","Ariel","red",200,300,true);
        stage.addChild(helloLabel);

        // start button
        helloButton = new createjs.Bitmap(assetManager.getResult("hello"));
        helloButton.regX = helloButton.getBounds().width * 0.5;
        helloButton.regY = helloButton.getBounds().height * 0.5;
        helloButton.x = 500 ;
        helloButton.y = 240;
        stage.addChild(helloButton);

        // start button listeners
        helloButton.addEventListener("click", function() {
            console.log("Hello Button Clicked");
        });

        helloButton.addEventListener("mouseover", function(event) {
            event.currentTarget.alpha = 0.7;
        });

        helloButton.addEventListener("mouseout", function(event) {
            event.currentTarget.alpha = 1.0;
        });


    }
    window.onload = Init;
})();