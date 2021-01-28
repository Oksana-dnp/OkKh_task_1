var radiusFigure = prompt('Введите радиус цилиндра');

console.log(radiusFigure);

var heightFigure = prompt('Введите высоту цилиндра');

console.log(heightFigure);

var areaFigure = Math.PI * Math.sqrt(radiusFigure);

console.log(areaFigure);

//можно ли так переносить длинный код на следующую строку?
confirm('Объем цилиндра с площадью основы ' + areaFigure + ', ' + 'радиусом ' + radiusFigure + ' ' + 'и высотой ' + heightFigure + ' ' + 'равен ' + (Math.PI * radiusFigure * heightFigure));
