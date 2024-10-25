# Google Translate with HTML and JS

**Use Google Translate with HTML and JS for all countries in web page.** 

You can use it in all web programming languages (PHP, Python, C#, ...) ​​and in all their frameworks (Laravel, DJango, .Net, ...) for website. These codes are very well written so that you can use them easily.

![Google translate with html and js](https://github.com/mordadam/google-translate-html-js/assets/170112182/6629aceb-6dba-4c47-892c-7cf936fdce3c)

## Features

-   Open source
-   Support for all countries
-   Remove or add countries for translation
-   Show flags for countries
-   Responsive in all devices
-   Beautiful ui
-   Possibility of customization for programmers (HTML, Css, JavaScript)
-   High translation speed
-   Translation from [Google Translate](https://translate.google.com)
-   Can be used in all programming languages

## Usage

### Step 1 :

Set `#gt-mordadam-43217984` to desired element. For example:

```html
<div id="gt-mordadam-43217984"></div>
```


### Step 2 :

You should put the `.svg` flag files inside your project. You can place the files anywhere in your project. But note that all the files(.svg) will be placed in the svg folder.

> The name of the parent folder of the files must be "svg/"

I have put the flag .svg files inside this project.

### Step 3 :

Add JavaScript file and codes into body tag:

```javascript
<script src="js/gt.min.js" data-gt-widget-id="43217984"></script>
```

```javascript
<script type="text/javascript">
    window.gtranslateSettings = window.gtranslateSettings || {};
    window.gtranslateSettings['43217984'] = {
        "default_language": "en",
        "languages": ["af", "sq", "am", "en", "fa", "ar", "ps", "ja", "zh-CN", "hy", "az", "eu", "be", "bn", "bs", "bg", "ca", "ceb", "ny", "zh-TW", "co", "hr", "cs", "da", "nl", "eo", "et", "tl", "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "ha", "haw", "iw", "hi", "hmn", "hu", "is", "ig", "id", "ga", "it", "jw", "kn", "kk", "km", "ko", "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mn", "my", "ne", "no", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr", "st", "sn", "sd", "si", "sk", "sl", "so", "es", "su", "sw", "sv", "tg", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi", "cy", "xh", "yi", "yo", "zu"],
        "wrapper_selector": "#gt-mordadam-43217984",
        "native_language_names": 1,
        "flag_style": "2d",
        "flag_size": 24,
        "horizontal_position": "inline",
        "flags_location": "flags\/"
    };
</script>
```

And finally, make your own settings in the js codes you added:

-   Choose your default language => `default_language`
-   Choose your languages => `languages`
-   Select your element => `wrapper_selector`
-   Set your flags directory (before svg folder) => `flags_location`

## Set more than one in page

Go through all the steps above, and you'll end up with duplicate code. Finally, by setting `data-gt-widget-id` and a different value and setting the same value in `window.gtranslateSettings`, you can have multiple translation selectors.

## Copyright

© 2024 | Google Translate with HTML and JS was written by [Mordad](https://mkhezerlou.ir).
