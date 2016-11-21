# Jquery Notification Creator

## Getting Started
Download and include the minified css and js files under the dist folder.

Make sure you initialise the plugin before using the functionality wihtin it, you do not need to do this everytime you use a function in the plugin only once per page.

```javascript
<script>
  $.NCInit();
</script>
```


Once the plugin has been initialised you can then simply call any of the functions:-
```javascript
<script>	
  $("#element-to-display-in").SuccessNC("hello");
  $("#element-to-display-in").InfoNC("hello");
  $("#element-to-display-in").DangerNC("hello");	

  $("#element-to-display-in").SuccessNC("hello", true);
  $("#element-to-display-in").InfoNC("hello", true);
  $("#element-to-display-in").DangerNC("hello", true);

  $("#element-to-display-in").SuccessNC("hello", true, 500);
  $("#element-to-display-in").InfoNC("hello", true, 500);
  $("#element-to-display-in").DangerNC("hello", true, 500);

  $("#element-to-display-in").SuccessNC("hello", false, 500);
  $("#element-to-display-in").InfoNC("hello", false, 500);
  $("#element-to-display-in").DangerNC("hello", false, 500);
</script>
```


the function parameters are split into the following:-

* The Selector: this is the element which the message will be put into **$("#theSelector")**
* First Paramter: the message to show **string**
* Second Paramter **(optional)**: should the notification have a close button **boolean**
* Third Paramter **(optional)**: is there an automatic shutdown time if so specify **Milliseconds**

## Copyright and License
Copyright &copy; David Whitehead

You do not have to do anything special by using the MIT license and you don't have to notify anyone that your using this license. You are free to use, modify and distribute this software in normal and commercial usage as long as the copyright header is left intact (specifically the comment block which starts with /*!).