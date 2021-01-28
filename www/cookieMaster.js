var cookieMaster = {

    getCookieValue: function(url, cookieName, successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'getCookieValue',
                    [url, cookieName]
        );
    },
    setCookieValue: function (url, cookieName, cookieValue, cookieOptions, successCallback, errorCallback) {
        if (typeof cookieOptions === 'function') {
            errorCallback = successCallback;
            successCallback = cookieOptions;
            cookieOptions = {};
        }
        
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'setCookieValue',
                    [url, cookieName, cookieValue, cookieOptions || {}]
        );
    },
    clearCookies: function(successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'clearCookies',
                    []
        );
    },
    clearCookie: function(url, cookieName, successCallback, errorCallback) {
      cordova.exec(successCallback,
                  errorCallback,
                  'CookieMaster', 'clearCookie',
                  [url, cookieName]
      );
    },
};
module.exports = cookieMaster;
