/**
 * Created by david on 13/05/15.
 */
function loadGame() {
    var canvas = document.getElementById("mCanvas");
    stage = new easeljs.Stage(canvas);

    var g = new Graphics();
    g.setStrokeStyle(1);
    g.beginStroke(Graphics.getRGB(0,0,0));
    g.beginFill(Graphics.getRGB(255,0,0));
    g.drawCircle(0,0,3);
    var s = new Shape(g);
    s.x = 100;
    s.y = 100;
    stage.addChild(s);
    stage.update();
}