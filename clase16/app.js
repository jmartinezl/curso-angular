var nombre = "Pedro";
var boxeador = {
    nombre: "Luis",
    golpear: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + "golpea"); }, 1500);
    }
};
boxeador.golpear();
