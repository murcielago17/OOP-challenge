function Flower(color, petals, smellsPretty){
    this.color = color;
    this.petals = petals;
    this.smellsPretty= smellsPretty;
    this.sniff = function(){
        console.log("Sniff Sniff Sniff!");
    };
    // Demonstrates use of arguments with methods
    this.smellsGood = function(answer) {
        if (answer) {
            return 'This flower smells amazing!';
        } else {
            return 'What a noxious weed!';
        }
    };
    // Demonstrates use of local object variables
    this.describe = function(answer) {
        alert("This flower is " + this.color + ".");
      }
    /// Demonstrates object to object interaction
    this.compare =  function(otherFlower) {
        return("My " + this.color + " flower is much prettier than your " +
          otherFlower.color + " flower :P");
    };
    this.render = function() {
        $('body').append("<p>My pretty flower is " + this.color +
          " and has " + this.petals + " pristine petals.</p>");
    }
}



var rose = new Flower ("red", 32, true);

var lily = new Flower ("purple", 5, true);

var orchid = new Flower ("white", 7, true);

var poppy = new Flower ("red", 18, true);

var sunflower = new Flower ("yellow", 50, false);

var violet = new Flower ("blue", 5, false);

var tullip = new Flower ("pink", 10, false);


