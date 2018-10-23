'use strict';
/**
 * Source: https://medium.com/frontend-fun/js-vanilla-script-spa-1b29b43ea475
 */
(function () {
    function init() {
        var routes = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html')
        ])
    }
    init()
}())