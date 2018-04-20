var DOMAIN_NAME = "https://www.whatruns.com/";
//var DOMAIN_NAME = "http://127.0.0.1/";
var BROWSER = (chrome || browser);
var ANALYSE_APPS = "analyseApps"; //Dependency on Content.js file
var GET_DETECTED_APPS = "getDetectedApps"; //Dependecy on notification.js file
var GET_NOTIFICATION_MESSAGE = "getNotificationMessage"; // Dependecy
var GET_HOST_NAME = "getHostName";
var SET_DATA = "setData";
var GET_DATA = "getData";
var GET_TECHS = "get_techs";
var GET_SITE_DATA = "get_site_data";
var KEY_DETAILS = "keyDetails";
var FORM = "form";
var GET_SITE_APPS = DOMAIN_NAME + "api/v1/get_site_apps";
var ANALYSE_SITE_DATA = DOMAIN_NAME + "api/v1/analysite_site_data";
var GET_SITE_APPS_BY_DATA = DOMAIN_NAME + "api/v1/get_site_apps_by_data";
var ANALYSE_EMAILS = DOMAIN_NAME + "api/v1/analyse_emails";
var invalidDomains = ["localhost", "127.0.0.1", "0.0.0.0"];
var NO_APPS_FOUND = " I feel lost, maybe there's nothing to be found ; ) ";