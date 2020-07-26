var main = new Vue({
    el: '#app',
    data: {
        projects: [
            {
                title: "BMI-calculator",
                description: "Python console program, which calculates body mass index in various measuring systems.", 
                github: "https://github.com/vasily-esipenko/BMI-Calculator",
                link: "https://github.com/vasily-esipenko/BMI-Calculator"
            },
            {
                title: "LinkBot",
                description: "Telegram bot which creates links to social network profiles out of the sent text.", 
                github: "https://github.com/vasily-esipenko/LinkBot",
                link: "https://t.me/firstlink1_bot" 
            },
            {
                title: "CurrencyBot",
                description: "Telegram Bot that shows currency and bitcoin rates in real time using Aiogram and SQLite.", 
                github: "https://github.com/vasily-esipenko/CurrencyBot",
                link: "https://t.me/currencytgbot" 
            },
            {
                title: "WeatherBot",
                description: "Telegram bot that shows weatger in various cities and countries using TelegramBot API.", 
                github: "https://github.com/vasily-esipenko/WeatherBot",
                link: "https://t.me/weather4youbot"
            },
            {
                title: "Vue.js Calculator",
                description: "A simple Vue.js arithmetic calculator.", 
                github: "https://github.com/vasily-esipenko/vue-calculator",
                link: "https://vue-calc2020.web.app/" 
            },
            {
                title: "Vue.js Todo List",
                description: "Todo List web application with Vue.js", 
                github: "https://github.com/vasily-esipenko/vue-todolist",
                link: "https://todo-vue2020.web.app/" 
            }
        ],
        upcoming: [
            {
                title: "Telegram Currency Bot",
                description: "Telegram bot that will show currency rates, notify about changes and support at least 3 languages"
            },
            {
                title: "URL Shortener",
                description: "Web application which will give a short form of a link"
            }
        ]
    }
});
