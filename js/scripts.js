
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};




// User Interface or front-end logic:
$().ready(function() {

  /*$("form#math").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  $("form#math").submit(function(event){
    event.preventDefault();
  var number1 = parseInt($("#num1").val());
  var number2 = parseInt($("#num2").val());
  var result = add(number1, number2);
  $("#output").text(result);

});*/


  $("#add").click(function(){
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    $("#output").text(add(num1, num2));
  });

$("#subtract").click(function(){
     var num1 = parseInt($("#num1").val());
     var num2 = parseInt($("#num2").val());
     $("#output").text(subtract(num1, num2));
  });

$("#divide").click(function(){
     var num1 = parseInt($("#num1").val());
     var num2 = parseInt($("#num2").val());
     $("#output").text(divide(num1, num2));
  });

  $("#multiply").click(function(){
       var num1 = parseInt($("#num1").val());
       var num2 = parseInt($("#num2").val());
       $("#output").text(multiply(num1, num2));
    });

  /*$("form#math").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });*/
/*
  $("form#math").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });
*/


});
//$("#subt").val(Number($("#num1").val()) - Number($("#num2").val()));
