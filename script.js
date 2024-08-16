//Создайте массив городов, например cities
const cities=["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];
//Создайте пустой массив, который будет хранить температуры для каждого города
const temperatures = [];
//Используя цикл, пройдитесь по массиву городов и попросите пользователя ввести температуру для каждого города, используя функцию prompt() или другие способы ввода данных пользователем
for (let i = 0; i < cities.length; i++) {
    const temp = prompt(`Введите температуру для города ${cities[i]}:`);
    temperatures.push(Number(temp));
}
//Создайте список, в котором будет отображаться информация о каждом городе и его температуре. Тут нужно будет использовать цикл для перебора элементов массивов, создать элементы и добавить их в список, указывая название города и соответствующую температуру.
const cityList = document.getElementById('city-list');
for (let i = 0; i < cities.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
    temperatureInfo.appendChild(listItem);
}
//Найдите максимальную и минимальную температуру из массива с температурами. Для этого создайте две переменные и инициализируйте их значениями, которые гарантированно будут больше и меньше любой возможной температуры соответственно.
const maxTemp = Math.max(...temperatures);
const minTemp = Math.min(...temperatures);
//Выведите информацию с погодой в разных городах, а также максимальной и минимальной температурой на экран
document.getElementById('max-temp').textContent = `${maxTemp}°C`;
document.getElementById('min-temp').textContent = `${minTemp}°C`;