/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */


function showNotification() {
    chrome.notifications.create('reminder', {
        type: 'basic',
        iconUrl: 'images/icon_128.png',
        title: 'Пора встать и размяться!',
        message: 'Долгое пребывание в сидячем положении может пагубно отразиться на здоровье'
     }, function(notificationId) {});
}

chrome.alarms.onAlarm.addListener(function( alarm ) {
  showNotification();
});



chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher()
          ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });