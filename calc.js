  function test() {
    var preis = {
        //in Rappen
        schraube: 20,
        mutter: 10,
        unterleg: 5
    };
    var totalSchraube = document.getElementById("iSchraube").value * preis.schraube;
    var totalMutter = document.getElementById("iMutter").value * preis.mutter;
    var totalScheibe = document.getElementById("iScheibe").value * preis.unterleg;
    var result = document.getElementById("result");
    result.innerText = "Preis Total: "+ ((totalSchraube + totalMutter + totalScheibe) / 100).toFixed(2);
  }