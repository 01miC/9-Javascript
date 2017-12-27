var pp1 = prompt('Podaj wysokość trójkąta w cm');
var pp2 = prompt('Podaj podstawę trójkąta w cm');

function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        return a*h/2;       
    }else {
      return "Nieprawidłowe dane";
    }
    
}
document.getElementById("wynik").innerHTML = getTriangleArea(pp1,pp2);
console.log(getTriangleArea(pp1,pp2));
