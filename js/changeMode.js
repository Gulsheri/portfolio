function changeMode() {
    if (count % 2 == 0) {
        source.src = ".media/video/itcamp_dark.mp4";
        card.style.backgroundColor = "rgb(52, 50, 50)";
        // Устанавливаем темный фон для карточки
        user_info.style.color = "white";
        // Меняем цвет текста информации о пользователе на белый
        count += 1;
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
