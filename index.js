$(document).ready(function () {
  function calculator() {
    let sum = "";
    let len;
    let inputVal = document.getElementById("screen");
    $(".buttons .digit").on("click", function () {
      let num = $(this).attr("value");
      sum += num;
      //arr.push(num);
      $("#screen").html(sum);
      len = inputVal.innerHTML.split("");
      console.log(len);
      //console.log(arr);
    });
    $(".buttons .operator").on("click", function (e) {
      e.preventDefault();
      let ops = $(this).attr("value");
      sum += ops;
      //arr.push(num);
      $("#screen").html(sum);
      len = inputVal.innerHTML;
      if (/(?=(\D{2}))/g.test(sum)) {
        sum = len.substring(0, len.length - 1);
        $("#screen").html(sum);
      }
      //len = inputVal.innerHTML.split("");
      //console.log(len);

      //console.log(arr);
    });

    $("#equal").on("click", function () {
      let total = eval(sum);
      //$("#screen").attr('value', total);
      $("#screen").html(total % 1 != 0 ? total.toFixed(2) : total);
    });

    $("#clear").on("click", function () {
      sum = "";
      arr = [];
      $("#screen").html(0);
    });
  }
  calculator();
});
