// An object literal
var myFeature = {
    myProperty: "hello",
 
    myMethod: function() {
        console.log( myFeature.myProperty );
    },
 
    init: function( settings ) {
        myFeature.settings = settings;
    },
 
    readSettings: function() {
        console.log( myFeature.settings );
    }
};
 
myFeature.myProperty === "hello"; // true
 
myFeature.myMethod(); // "hello"
 
myFeature.init({
    foo: "bar"
});
 
myFeature.readSettings(); // { foo: "bar" }

//The object literal above is simply an object assigned to a variable. 

