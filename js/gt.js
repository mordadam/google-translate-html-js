(function(){
    var gt = window.gtranslateSettings || {};
    gt = gt[document.currentScript.getAttribute('data-gt-widget-id')] || gt;

    var lang_array_english = {"af":"Afrikaans","sq":"Albanian","am":"Amharic","ar":"Arabic","hy":"Armenian","az":"Azerbaijani","eu":"Basque","be":"Belarusian","bn":"Bengali","bs":"Bosnian","bg":"Bulgarian","ca":"Catalan","ceb":"Cebuano","ny":"Chichewa","zh-CN":"Chinese (Simplified)","zh-TW":"Chinese (Traditional)","co":"Corsican","hr":"Croatian","cs":"Czech","da":"Danish","nl":"Dutch","en":"English","eo":"Esperanto","et":"Estonian","tl":"Filipino","fi":"Finnish","fr":"French","fy":"Frisian","gl":"Galician","ka":"Georgian","de":"German","el":"Greek","gu":"Gujarati","ht":"Haitian Creole","ha":"Hausa","haw":"Hawaiian","iw":"Hebrew","hi":"Hindi","hmn":"Hmong","hu":"Hungarian","is":"Icelandic","ig":"Igbo","id":"Indonesian","ga":"Irish","it":"Italian","ja":"Japanese","jw":"Javanese","kn":"Kannada","kk":"Kazakh","km":"Khmer","ko":"Korean","ku":"Kurdish (Kurmanji)","ky":"Kyrgyz","lo":"Lao","la":"Latin","lv":"Latvian","lt":"Lithuanian","lb":"Luxembourgish","mk":"Macedonian","mg":"Malagasy","ms":"Malay","ml":"Malayalam","mt":"Maltese","mi":"Maori","mr":"Marathi","mn":"Mongolian","my":"Myanmar (Burmese)","ne":"Nepali","no":"Norwegian","ps":"Pashto","fa":"Persian","pl":"Polish","pt":"Portuguese","pa":"Punjabi","ro":"Romanian","ru":"Russian","sm":"Samoan","gd":"Scottish Gaelic","sr":"Serbian","st":"Sesotho","sn":"Shona","sd":"Sindhi","si":"Sinhala","sk":"Slovak","sl":"Slovenian","so":"Somali","es":"Spanish","su":"Sundanese","sw":"Swahili","sv":"Swedish","tg":"Tajik","ta":"Tamil","te":"Telugu","th":"Thai","tr":"Turkish","uk":"Ukrainian","ur":"Urdu","uz":"Uzbek","vi":"Vietnamese","cy":"Welsh","xh":"Xhosa","yi":"Yiddish","yo":"Yoruba","zu":"Zulu"};
    var lang_array_native = {"af":"Afrikaans","sq":"Shqip","am":"\u12a0\u121b\u122d\u129b","ar":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629","hy":"\u0540\u0561\u0575\u0565\u0580\u0565\u0576","az":"Az\u0259rbaycan dili","eu":"Euskara","be":"\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f \u043c\u043e\u0432\u0430","bn":"\u09ac\u09be\u0982\u09b2\u09be","bs":"Bosanski","bg":"\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438","ca":"Catal\u00e0","ceb":"Cebuano","ny":"Chichewa","zh-CN":"\u7b80\u4f53\u4e2d\u6587","zh-TW":"\u7e41\u9ad4\u4e2d\u6587","co":"Corsu","hr":"Hrvatski","cs":"\u010ce\u0161tina\u200e","da":"Dansk","nl":"Nederlands","en":"English","eo":"Esperanto","et":"Eesti","tl":"Filipino","fi":"Suomi","fr":"Fran\u00e7ais","fy":"Frysk","gl":"Galego","ka":"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8","de":"Deutsch","el":"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac","gu":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","ht":"Kreyol ayisyen","ha":"Harshen Hausa","haw":"\u014clelo Hawai\u02bbi","iw":"\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea","hi":"\u0939\u093f\u0928\u094d\u0926\u0940","hmn":"Hmong","hu":"Magyar","is":"\u00cdslenska","ig":"Igbo","id":"Bahasa Indonesia","ga":"Gaeilge","it":"Italiano","ja":"\u65e5\u672c\u8a9e","jw":"Basa Jawa","kn":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","kk":"\u049a\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456","km":"\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a","ko":"\ud55c\uad6d\uc5b4","ku":"\u0643\u0648\u0631\u062f\u06cc\u200e","ky":"\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430","lo":"\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7","la":"Latin","lv":"Latvie\u0161u valoda","lt":"Lietuvi\u0173 kalba","lb":"L\u00ebtzebuergesch","mk":"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438 \u0458\u0430\u0437\u0438\u043a","mg":"Malagasy","ms":"Bahasa Melayu","ml":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","mt":"Maltese","mi":"Te Reo M\u0101ori","mr":"\u092e\u0930\u093e\u0920\u0940","mn":"\u041c\u043e\u043d\u0433\u043e\u043b","my":"\u1017\u1019\u102c\u1005\u102c","ne":"\u0928\u0947\u092a\u093e\u0932\u0940","no":"Norsk bokm\u00e5l","ps":"\u067e\u069a\u062a\u0648","fa":"\u0641\u0627\u0631\u0633\u06cc","pl":"Polski","pt":"Portugu\u00eas","pa":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","ro":"Rom\u00e2n\u0103","ru":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439","sm":"Samoan","gd":"G\u00e0idhlig","sr":"\u0421\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a","st":"Sesotho","sn":"Shona","sd":"\u0633\u0646\u068c\u064a","si":"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd","sk":"Sloven\u010dina","sl":"Sloven\u0161\u010dina","so":"Afsoomaali","es":"Espa\u00f1ol","su":"Basa Sunda","sw":"Kiswahili","sv":"Svenska","tg":"\u0422\u043e\u04b7\u0438\u043a\u04e3","ta":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","te":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41","th":"\u0e44\u0e17\u0e22","tr":"T\u00fcrk\u00e7e","uk":"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430","ur":"\u0627\u0631\u062f\u0648","uz":"O\u2018zbekcha","vi":"Ti\u1ebfng Vi\u1ec7t","cy":"Cymraeg","xh":"isiXhosa","yi":"\u05d9\u05d9\u05d3\u05d9\u05e9","yo":"Yor\u00f9b\u00e1","zu":"Zulu"};

    var default_language = gt.default_language||'auto';
    var languages = gt.languages||Object.keys(lang_array_english).sort(function(x,y){return x==default_language?-1:y==default_language?1:0;});
    var alt_flags = gt.alt_flags||{};
    var flag_size = gt.flag_size||32;
    var flag_style = gt.flag_style||'2d';
    var flags_location = gt.flags_location||'https://cdn.gtranslate.net/flags/';
    var url_structure = gt.url_structure||'none';
    var custom_domains = gt.custom_domains||{};

    var horizontal_position = gt.horizontal_position||'inline';
    var vertical_position = gt.vertical_position||null;

    var native_language_names = gt.native_language_names||false;
    var detect_browser_language = gt.detect_browser_language||false;
    var wrapper_selector = gt.wrapper_selector||'.gtranslate_wrapper';

    var custom_css = gt.custom_css||'';
    var lang_array = native_language_names?lang_array_native:lang_array_english;

    var u_class = '.gt_container-'+Array.from('popup'+wrapper_selector).reduce(function(h,c){return 0|(31*h+c.charCodeAt(0))},0).toString(36);

    var widget_code = '<!-- GTranslate: https://gtranslate.com -->';
    var widget_css = custom_css;

    flags_location += (flag_style=='3d'?flag_size:'svg')+'/';
    var flag_ext = flag_style=='3d'?'.png':'.svg';

    // helper functions
    function get_flag_src(lang) {
        if(!alt_flags[lang])
            return flags_location+lang+flag_ext;
        else if(alt_flags[lang] == 'usa')
            return flags_location+'en-us'+flag_ext;
        else if(alt_flags[lang] == 'canada')
            return flags_location+'en-ca'+flag_ext;
        else if(alt_flags[lang] == 'brazil')
            return flags_location+'pt-br'+flag_ext;
        else if(alt_flags[lang] == 'mexico')
            return flags_location+'es-mx'+flag_ext;
        else if(alt_flags[lang] == 'argentina')
            return flags_location+'es-ar'+flag_ext;
        else if(alt_flags[lang] == 'colombia')
            return flags_location+'es-co'+flag_ext;
        else if(alt_flags[lang] == 'quebec')
            return flags_location+'fr-qc'+flag_ext;
        else
            return alt_flags[lang];
    }

    function get_lang_href(lang) {
        var href = '#';

        if(url_structure == 'sub_directory') {
            var gt_request_uri = (document.currentScript.getAttribute('data-gt-orig-url') || (location.pathname.startsWith('/'+current_lang+'/') && '/'+location.pathname.split('/').slice(2).join('/') || location.pathname)) + location.search + location.hash;
            href = (lang == default_language) && location.protocol+'//'+location.hostname+gt_request_uri || location.protocol+'//'+location.hostname+'/'+lang+gt_request_uri;
        } else if(url_structure == 'sub_domain') {
            var gt_request_uri = (document.currentScript.getAttribute('data-gt-orig-url') || location.pathname) + location.search + location.hash;
            var domain = document.currentScript.getAttribute('data-gt-orig-domain') || location.hostname;
            if(typeof custom_domains == 'object' && custom_domains[lang])
                href = (lang == default_language) && location.protocol+'//'+domain+gt_request_uri || location.protocol+'//'+custom_domains[lang]+gt_request_uri;
            else
                href = (lang == default_language) && location.protocol+'//'+domain+gt_request_uri || location.protocol+'//'+lang+'.'+domain.replace(/^www\./, '')+gt_request_uri;
        }

        return href;
    }

    widget_css += "a.glink{text-decoration:none}a.glink.gt-current-lang{font-weight:bold}";
    var font_size = 10, margin_right = 3;
    if(flag_size == 24)
        font_size = 15, margin_right = 5;
    else if(flag_size == 32)
        font_size = 20, margin_right = 7;
    else if(flag_size == 48)
        font_size = 24, margin_right = 10;
    widget_css += u_class + " a.glink span{margin-right:"+margin_right+"px;font-size:"+font_size+"px;vertical-align:middle}";
    widget_css += "a.glink img{vertical-align:middle;display:inline;border:0;padding:0;margin:0;opacity:0.8;height:auto}";
    widget_css += "a.glink:hover img{opacity:1}";

    var current_lang = document.querySelector('html').getAttribute('lang')||default_language;
    if(url_structure == 'none') {
        var googtrans_matches = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');
        current_lang = googtrans_matches && googtrans_matches[2].split('/')[2] || current_lang;
    }

    if(!lang_array[current_lang])
        current_lang = default_language;

    widget_code += '<a href="#" class="gt_switcher-popup glink nturl notranslate">';

    var arrow_down = '<span style="color:#666;font-size:8px;font-weight:bold;">&#9660;</span>';
    widget_code += '<img src="'+get_flag_src(current_lang)+'" height="'+flag_size+'" width="'+flag_size+'" alt="'+current_lang+'" /> <span>'+lang_array[current_lang]+'</span>'+arrow_down+'</a>';

    widget_code += '<div class="gt_black_overlay"></div>';
    widget_code += '<div class="gt_white_content notranslate">';
    widget_code += '<div class="gt_languages">';

    languages.forEach(function(lang) {
        var el_a = document.createElement('a');
        el_a.href = get_lang_href(lang);
        el_a.classList.add('glink', 'nturl');
        current_lang == lang && el_a.classList.add('gt-current-lang');
        el_a.setAttribute('data-gt-lang', lang);

        var el_img = document.createElement('img');
        el_img.height = el_img.width = flag_size;
        el_img.alt = lang;
        el_img.setAttribute('data-gt-lazy-src', get_flag_src(lang));

        el_a.appendChild(el_img);
        el_a.innerHTML += ' <span>' + lang_array[lang] + '</span>';

        widget_code += el_a.outerHTML;
    });

    widget_code += '</div></div>';

    var a_height = flag_style=='2d' ? 0.75 * flag_size + 21 : flag_size + 13;
    var a_width = flag_size + margin_right + font_size * 8;
    var popup_height = Math.min(375, languages.length * a_height + 12);
    var popup_width = Math.min(980, 0.8 * window.innerWidth);
    var popup_columns = Math.floor(popup_width / a_width);
    var langs_per_col = Math.floor(popup_height / a_height);

    while(popup_columns > 1 && Math.floor(langs_per_col * popup_columns / languages.length) > 1) {
        popup_columns--;
        popup_width = popup_columns * a_width + 32;
    }

    widget_css += '.gt_black_overlay{display:none;position:fixed;top:0%;left:0%;width:100%;height:100%;background-color:black;z-index:10000;-moz-opacity:0.8;opacity:.80;filter:alpha(opacity=80)}';
    widget_css += '.gt_white_content{display:none;position:fixed;top:50%;left:50%;width:'+popup_width+'px;height:'+popup_height+'px;margin:-'+(popup_height/2)+'px 0 0 -'+(popup_width/2)+'px;padding:6px 16px;background-color:white;color:black;z-index:19881205;overflow:auto;text-align:left}';
    widget_css += '.gt_white_content a{display:block;padding:'+(flag_style=='2d'?10:6)+'px 0;border-bottom:1px solid #e7e7e7;white-space:nowrap;line-height:0;flex-basis:'+a_height+'px;box-sizing:border-box;}';
    widget_css += '.gt_white_content .gt_languages{display:flex;flex-flow:column wrap;max-height:'+Math.max(popup_height, a_height * Math.ceil(languages.length / popup_columns))+'px;overflow-x:hidden;}';
    widget_css += '.gt_white_content::-webkit-scrollbar-track{background-color:#F5F5F5}';
    widget_css += '.gt_white_content::-webkit-scrollbar{width:5px}';
    widget_css += '.gt_white_content::-webkit-scrollbar-thumb{background-color:#888}';

    if(url_structure == 'none') {
        widget_code += '<div id="google_translate_element2"></div>';

        widget_css += "div.skiptranslate,#google_translate_element2{display:none!important}";
        widget_css += "body{top:0!important}";
        widget_css += "font font{background-color:transparent!important;box-shadow:none!important;position:initial!important}";
    }

    if(horizontal_position != 'inline')
        widget_code = '<div class="gt_switcher_wrapper" style="position:fixed;'+vertical_position+':15px;'+horizontal_position+':15px;z-index:999999;">' + widget_code + '</div>';

    var add_css = document.createElement('style');
    add_css.classList.add('gtranslate_css');
    add_css.textContent = widget_css;
    document.head.appendChild(add_css);

    document.querySelectorAll(wrapper_selector).forEach(function(e){e.classList.add(u_class.substring(1));e.innerHTML+=widget_code});

    var gt_popup_open = false;
    function gt_show_popup(el) {
        gt_popup_open = true;
        el.parentNode.querySelectorAll('.gt_white_content a img:not([src])').forEach(function(img) {img.setAttribute('src', img.getAttribute('data-gt-lazy-src'));});
        el.parentNode.querySelectorAll('.gt_white_content,.gt_black_overlay').forEach(function(e){e.style.display='block';});
    }
    function gt_hide_popup() {gt_popup_open=false;document.querySelectorAll('.gt_white_content,.gt_black_overlay').forEach(function(e){e.style.display='none'});}

    document.querySelectorAll(u_class+' a.gt_switcher-popup').forEach(function(e){
        e.addEventListener('click', function(evt) {evt.preventDefault();evt.stopPropagation();if(gt_popup_open)gt_hide_popup();else gt_show_popup(e);});
        e.addEventListener('pointerenter', function(evt) {evt.target.parentNode.querySelectorAll('.gt_languages img:not([src])').forEach(function(img){img.setAttribute('src', img.getAttribute('data-gt-lazy-src'))})});
    });
    document.querySelectorAll(u_class+' .gt_black_overlay').forEach(function(e){e.addEventListener('click', function(evt) {if(gt_popup_open)gt_hide_popup()})});

    if(url_structure == 'none') {
        function get_current_lang() {var keyValue = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');return keyValue ? keyValue[2].split('/')[2] : null;}
        function fire_event(element,event){try{if(document.createEventObject){var evt=document.createEventObject();element.fireEvent('on'+event,evt)}else{var evt=document.createEvent('HTMLEvents');evt.initEvent(event,true,true);element.dispatchEvent(evt)}}catch(e){}}
        function load_tlib(){if(!window.gt_translate_script){window.gt_translate_script=document.createElement('script');gt_translate_script.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2';document.body.appendChild(gt_translate_script);}}
        window.doGTranslate = function(lang_pair){if(lang_pair.value)lang_pair=lang_pair.value;if(lang_pair=='')return;var lang=lang_pair.split('|')[1];if(get_current_lang() == null && lang == lang_pair.split('|')[0])return;var teCombo;var sel=document.getElementsByTagName('select');for(var i=0;i<sel.length;i++)if(sel[i].className.indexOf('goog-te-combo')!=-1){teCombo=sel[i];break;}if(document.getElementById('google_translate_element2')==null||document.getElementById('google_translate_element2').innerHTML.length==0||teCombo.length==0||teCombo.innerHTML.length==0){setTimeout(function(){doGTranslate(lang_pair)},500)}else{teCombo.value=lang;fire_event(teCombo,'change');fire_event(teCombo,'change')}}
        window.googleTranslateElementInit2=function(){new google.translate.TranslateElement({pageLanguage:default_language,autoDisplay:false},'google_translate_element2')};

        if(current_lang != default_language)
            load_tlib();
        else
            document.querySelectorAll(u_class).forEach(function(e){e.addEventListener('pointerenter',load_tlib)});

        document.querySelectorAll(u_class + ' a[data-gt-lang]').forEach(function(e){e.addEventListener('click', function(evt) {
            evt.preventDefault();
            document.querySelectorAll(u_class + ' a.gt-current-lang').forEach(function(e){e.classList.remove('gt-current-lang')});
            e.classList.add('gt-current-lang');
            doGTranslate(default_language+'|'+e.getAttribute('data-gt-lang'));
            e.parentNode.parentNode.parentNode.querySelector('a.gt_switcher-popup').innerHTML=e.innerHTML+arrow_down;
            gt_hide_popup();
        })});
    }

    if(detect_browser_language && window.sessionStorage && window.navigator && sessionStorage.getItem('gt_autoswitch') == null && !/bot|spider|slurp|facebook/i.test(navigator.userAgent)) {
        var accept_language = (navigator.language||navigator.userLanguage).toLowerCase();
        switch(accept_language) {
            case 'zh':
            case 'zh-cn':var preferred_language = 'zh-CN';break;
            case 'zh-tw':
            case 'zh-hk':var preferred_language = 'zh-TW';break;
            case 'he':var preferred_language = 'iw';break;
            default:var preferred_language = accept_language.substr(0,2);break;
        }

        if(current_lang == default_language && preferred_language != default_language && languages.includes(preferred_language)) {
            if(url_structure == 'none') {
                load_tlib();
                window.gt_translate_script.onload=function(){
                    doGTranslate(default_language+'|'+preferred_language);
                    var el = document.querySelector(u_class+' a[data-gt-lang="'+preferred_language+'"]');
                    el.querySelectorAll('img:not([src])').forEach(function(e){e.setAttribute('src', e.getAttribute('data-gt-lazy-src'))});
                    el.parentNode.parentNode.parentNode.querySelector('a.gt_switcher-popup').innerHTML=el.innerHTML+arrow_down;
                };
            } else
                document.querySelectorAll(u_class+' a[data-gt-lang="'+preferred_language+'"]').forEach(function(e){location.href=e.href});
        }

        sessionStorage.setItem('gt_autoswitch', 1);
    }
})();