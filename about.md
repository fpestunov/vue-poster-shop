# VUE.JS Poster Shop

## 1. Introducing the course
- что сделаем
- особенности

## 2. Starter code installation

git clone ...
npm install

## 3. Running the server and viewing the project

npm run serve
http://localhost:3000

## 4. Touring the project files
- описание структуры каталогов и начальных файлов

## 5. Including Vue in the project
npm i -S vue@2.5.17 // устанавливаем Вуе
<script type="text/javascript" src="node_modules/vue/dist/vue.js"></script>

## 6. Creating an instance of Vue

## 7. Rendering data on the page


## 8. Understanding directives
https://ru.vuejs.org/v2/guide/index.html#Начало-работы
https://ru.vuejs.org/v2/guide/syntax.html#Директивы

## 9. Adding a method
<button v-on:click="total += 10"></button>
<button v-on:click="addToCart"></button>

## 10. Rendering the list of products

## 11. Adding key to iterated products

## 12. Creating the cart

## 13. Understanding reactivity
- объясняем

## 14. Vue Devtools
- устанавливаем

## 15. Adding products to the cart

## 16. Displaying cart items

## 17. Hiding cart if empty

## 18. Adding quantity to cart items

## 19. Cart items quantity logic

## 20. Understanding filters
https://ru.vuejs.org/v2/guide/filters.html

## 21. Formatting price
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/tofixed

## 22. Adding quantity buttons to template

## 23. Implementing inc and dec logic

## 24. Adding search button
<form class="search-bar" v-on:submit.prevent="onSubmit()">
prevent - предотвращает submit формы

## 25. Adding search input

## 26. Overview of vue-resource
https://github.com/pagekit/vue-resource
We're going to be adding a third-party library to our project now called Vue Resource. This is a client used to make HTTP requests and is very useful for doing AJAX in your Vue app.

If you've done work with AJAX before, you might be wondering why we don't use Axios, which is a more popular library.

We definitely could, but in a simple project like this, I like Vue Resource because it integrates with Vue very nicely as you'll see.

## 27. Overview of API

## 28. Adding vue-resource to project
npm i -S vue-resource@1.5.1
<script type="text/javascript" src="node_modules/vue-resource/dist/vue-resource.js"></script>
Перезагружаем и проверяем в браузере Network/JS должен загрузиться этот модуль.

## 29. AJAX call for products
Пишем запрос, смотрим ответ и все... работает!

## 30. Replacing dummy items

## 31. Adding product image & price

## 33. Adding the loading message
Сделать вывод сообщения, что данные загружаются.
setTimeout() - Для имитации загрузки данных

Странно, но "Loading..." не исчезает!!!

## 34. Understanding lifecycle hooks
https://ru.vuejs.org/v2/guide/instance.html#Хуки-жизненного-цикла-экземпляра

##  35. Default search on page load
Сделаем поиск "cat" по умолчанию.

## 36. Understanding transitions
https://ru.vuejs.org/v2/guide/transitions.html

## 37. Fading in cart total

## G. Scroll loading products
##  40. Adding a sensor element
npm i -S scrollmonitor@1.2.4


##
##
##
##
