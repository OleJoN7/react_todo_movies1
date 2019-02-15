# My first React.js practice
## Задание

1.  В главном компоненте App создайте компонент MovieList, в котором будет отображаться карточки всех фильмов, данные фильмов взять из файла moviesData.js и записать в state компонента <App/> и потом передать в MovieList
2.  В компоненте MovieList мапируйте полученный массив фильмов и
    каждый элемент передавайте в компонент MovieItem, в котором будет отображаться карточка фильма
    (разметка https://getbootstrap.com/docs/4.1/components/card/#example)
3.  В компоненте App в state запишите список фильмов которые пользователь хочет посмотреть ( moviesWillWatch: []), создайте компонент MovieListWillWatch, в котором будет отображаться:

- количество фильмов, которое хочет посмотреть пользователь
- список фильмов, которые пользователь хочет посмотреть
  (разметка https://getbootstrap.com/docs/4.1/components/list-group/)

4.  В компоненте MovieItem добавить кнопку Will Watch, при нажатии на которую будет в компонент MovieListWillWatch попадать новый фильм, который пользователь захочет посмотреть.
    Соответсвенно при повторном нажатии - убирать данный фильм из списка WillWatch
    (менять стили кнопки в зависимости от того хочет смотреть этот фильм или нет - например его цвет,
    подсказка: в зависимости от состояния компонента MovieItem)
```
