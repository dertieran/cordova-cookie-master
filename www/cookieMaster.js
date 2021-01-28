
var decodeCookieValue = function (value) {
  return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
};

var encodeCookieValue = function (value) {
  return encodeURIComponent(value).replace(
    /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
    decodeURIComponent
  )
};

var cookieMaster = {

    getCookieValue: function(url, cookieName, successCallback, errorCallback) {
        var success = function (data) {
          data.cookieValue = decodeCookieValue(data.cookieValue)
          return successCallback(data);
        }
        cordova.exec(success,
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
                    [url, cookieName, encodeCookieValue(cookieValue), cookieOptions || {}]
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
