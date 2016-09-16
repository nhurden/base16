(function() {

    var selector = document.getElementById('themeSelector');
    var defaultTheme = selector.value;
    var themeLink = document.createElement('link');
    var indicator = document.querySelector('.scheme');

    themeLink.type = 'text/css';
    themeLink.rel = 'stylesheet';

    function switchTheme(theme) {
        indicator.innerHTML = 'Preview: ' + theme.substr(0, theme.length - 4);
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
