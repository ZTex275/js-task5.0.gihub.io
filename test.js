var a = [];

var size = prompt("Сколько элементов должно быть в массиве?")
if (size < 0 ){
    alert( "Ух ты какой хитрый, массив не бывает отрицательным" );
    throw "stop";
  }
for (var i=0; i<size; i++)
    a[i] = parseInt(prompt("Введите целочисленные элементы массива:"));

    function arraySum(array){
        var sum = 0;
            for(var i = 0; i < array.length; i++){
                sum += array[i];
            }
        alert ("Сумма чисел равна: "+sum);
        }
        arraySum(a);

        Array.min = function(a){
            return Math.min.apply(Math, a);
        };
        alert("Минимальное значение равно: "+Math.min.apply(Math, a));

        Array.max = function(a){
            return Math.max.apply(Math, a);
        };
        alert("Максимальное значение равно: "+Math.max.apply(Math, a));