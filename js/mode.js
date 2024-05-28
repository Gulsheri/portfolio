
let video = document.getElementById('background-video');
// Получаем элемент видео по его ID
let source = video.getElementsByTagName('source')[0];
// Получаем первый элемент <source> внутри элемента видео
let card = document.getElementById("card");
// Получаем элемент карточки по его ID
let user_info = document.getElementsByClassName("user-info")[0];
// Получаем элемент с информацией о пользователе по его ID

let count = 1;
// Инициализируем счётчик

function changeMode() {
    // Функция для смены режима
    if (count % 2 == 0) {
        // Проверка: если счётчик чётный
        source.src = "media/video/itcamp_dark.mp4";
        // Меняем источник видео на темную версию
        card.style.backgroundColor = "rgb(52, 50, 50)";
        // Устанавливаем темный фон для карточки
        user_info.style.color = "white";
        // Меняем цвет текста информации о пользователе на белый
        count += 1;
        // Увеличиваем счётчик на 1
    } 
    else {
        // Если счётчик нечётный
        source.src = "media/video/itcamp_light.mp4";
        // Меняем источник видео на светлую версию
        card.style.backgroundColor = "rgb(206, 204, 204)";
        // Устанавливаем светлый фон для карточки
        user_info.style.color = "black";
        // Меняем цвет текста информации о пользователе на черный
        count += 1;
        // Увеличиваем счётчик на 1
    }
    video.load();
    // Перезагружаем видео с новым источником
}

