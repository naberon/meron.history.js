/**
 * meron.history.js
 * http://github.com/naberon/meron.history.js
 *
 * Copyright 2013, naberon
 *
 * Released under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php 
 */
if (typeof meron === 'object') {
  meron.history = meron.history || function() {
    return {
      trackHistory: function(tracker) { 
        var categories = 'History';
        var actions = '['+ meron.currentSessionDate() +'] userID:'+ meron.visitorId() +'('+ ("000" +meron.visits()).slice(-4) +'visits)';
        var labels = '['+ meron.getDate() +'] '+ window.location.pathname;
        var method = (typeof tracker === 'string') ? tracker +'._trackEvent' : '._trackEvent';
        _gaq.push([method, categories, actions, labels, 1, true]);
      }
    };
  }();
};

