(function() {

    var selector = document.getElementById('themeSelector');
    var defaultTheme = selector.value;
    var themeLink = document.createElement('link');
    themeLink.type = 'text/css';
    themeLink.rel = 'stylesheet';

    function switchTheme(theme) {
        themeLink.disabled = true;
        themeLink.href = './css/' + theme;
        themeLink.disabled = false;
    }

    switchTheme(defaultTheme);

    document.getElementsByTagName('head')[0].appendChild(themeLink);

    selector.onchange = function(evt) {
        switchTheme(evt.currentTarget.value);
    };
})();
