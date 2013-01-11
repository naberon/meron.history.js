# meron.history.js
meron.history.js is pageviews history tracking for Google Analytics.

## Example
```html
<script src="./meron.js"></script>
<script src="./meron.history.js"></script>

<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-xxxxxx-yy']);
  _gaq.push(['_trackPageview']);
  (function() {
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
   })();

  window.onload = function(){
    // history tracking
    meron.history.trackHistory();
  }
</script>
```

## Copyright & License 
Copyright &copy; 2013, naberon  
Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
