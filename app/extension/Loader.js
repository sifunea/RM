/*
 * Load the required js/css
 */

Ext.define('RM.extension.Loader', {
    singleton: true,

    head: document.getElementsByTagName('head')[0],

    loadCss: function (src) {
        var css = document.createElement('link');
        css.setAttribute('type', 'text/css');
        css.setAttribute('rel', 'stylesheet');
        css.setAttribute('href', src);
        css.setAttribute('media', 'screen');

        this.head.appendChild(css);
    },

    loadScript: function (src, callback) {

        var script = document.createElement('script');
        script.setAttribute('src', src);
        script.setAttribute('type', 'text/javascript');

        if (callback) {
            if (script.onreadystatechange === undefined) {
                script.onload = callback;
            } else {
                script.onreadystatechange = function () {
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        callback();
                    }
                }
            }
        }

        this.head.appendChild(script);
    }
});
