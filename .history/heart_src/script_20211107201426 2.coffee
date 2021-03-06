styles = """
/*
 * "a love letterð" v5.2.1
 * for every true lover
 */

body {
  background-color: #1a1c24; color: #fff;
  font-size: 1.0rem; line-height: 1.4;
  -webkit-font-smoothing: subpixel-antialiased;
}

/*
 * ...hello?            
 *
 * äº²ç±çä»²å©å©ï¼           
 * ææ¯ä½ å¯ç±çç¸ç¸ï¼ä»²ç»´æï½         
 * "ä¸åéä¸è§ï¼å¦éä¸ç§"ï¼     
 * ææ»æ¯æå¼ä¸ä¸ªæ¡æ¡åä»£ç ï¼å°±åç°å¨è¿æ · à¹ä¹â¡ä¹à¹
 */

pre { 
  position: fixed;
  top: 30px; bottom: 30px;
  transition: left 500ms;
  overflow: auto;
  background-color: #313744; color: #a6c3d4;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 24px 12px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);
}


/* 
 * ä½ ç¥éæå±å¹ä¸çä»£ç ä¸ºå¥è±è±ç»¿ç»¿çå(â§_â§?)       
 * å¢ï¼é£æ¯ä»£ç é«äº®ï½       
 * ä½ æ²¡åç°ä¸é¢ðçä»£ç é½æ¯ä¸ä¸ªé¢è²å           
 */

pre em:not(.comment) { font-style: normal; }

.comment       { color: #707e84; }
.selector      { color: #c66c75; }
.selector .key { color: #c66c75; }
.key           { color: #c7ccd4; }
.value         { color: #d5927b; }


/* 
 * ç°å¨çèµ·æ¥èæå¤äºï½       
 * ä¸è¿æè¿æ¯æ´ä¹ æ¯æä»£ç æ¡æ¾å¨å³è¾¹ â_â             
 */ 

pre { left: 50%; width: 45%}


/* 
 * åå å¤©æ¶ä½ è¿ä¸åæç¤ºæ
 * çææä¼å¿äºåå¤©æ¯ä½ ççæ¥ä¸æ ·ï¼ç¥ç¥ç¥ï½           
 * å»çï½ææä¹å¯è½ä¼å¿è®° ( Â´ï½¥Ïï½¥)ï¾(._.`)
 * å¹³æ¶ç ä»£ç çæ¶åæå¿éé½å¨æ³çä½ å¢ï½               
 * ä¸ä¿¡ä½ å¾ä¸ç       
 */

#heart, #echo { 
  position: fixed;
  width: 300px; height: 300px;
  top: calc(50% - 150px); left: calc(25% - 150px);
  text-align: center;
  -webkit-transform: scale(0.95);
          transform: scale(0.95);
}

#heart { z-index: 8; }
#echo  { z-index: 7; }

#heart::before, #heart::after, #echo::before, #echo::after {
    content: '';
    position: absolute;
    top: 40px;
    width: 150px; height: 240px;
    background: #c66c75;
    border-radius: 150px 150px 0 0;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
            transform-origin: 0 100%;
}

#heart::before, #echo::before {
  left: 150px;
}

#heart::after, #echo::after {
  left: 0;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}


/* ä½ é®æç±ä½ æå¤æ·±ï¼ä»£ç ä»£è¡¨æçå¿ (ââ²Ï`â) */

#heart::after { 
  box-shadow:
    inset -6px -6px 0px 6px rgba(255,255,255,0.1);
}

#heart::before { 
  box-shadow:
    inset 6px 6px 0px 6px rgba(255,255,255,0.1);
}


/* ç°å¨æçå¿å±äºä½ å¦ï½ */

#heart i::before {
  content: 'çç';
  position: absolute;
  z-index: 9;
  width: 100%;
  top: 35%; left: 0;
  font-style: normal;
  color: rgba(255,255,255,0.8);
  font-weight: 100;
  font-size: 30px;
  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);
}


/* 
 * è½ç¶æä»¬è®¤è¯è¿ä¹ä¹           
 * ä½æ¯æ¬¡è§å°ä½ ï¼æçå¿è¿æ¯ä¼æéï½æéï½
 */

@-webkit-keyframes heartbeat {
  0%, 100% { 
    -webkit-transform: scale(0.95); 
            transform: scale(0.95); 
  }
  50% { 
    -webkit-transform: scale(1.00); 
            transform: scale(1.00); 
  }
}

@keyframes heartbeat {
  0%, 100% { transform: scale(0.95); }
  50%      { transform: scale(1.00); }
}

@-webkit-keyframes echo {
  0%   { 
    opacity: 0.1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% { 
    opacity: 0;
    -webkit-transform: scale(1.4);
            transform: scale(1.4);
  }
}

@keyframes echo {
  0%   { 
    opacity: 0.1;
    transform: scale(1);
  }
  100% { 
    opacity: 0;
    transform: scale(1.4);
  }
}


/* 
 * ä»ä¹ï¼æ²¡å¬å°æçå¿è·³ï¼           
 * ä½ åé è¿ä¸ç¹ 
 */

#heart, #echo {
  -webkit-animation-duration: 2000ms;
          animation-duration: 2000ms;
  -webkit-animation-timing-function: 
    cubic-bezier(0, 0, 0, 1.74);
          animation-timing-function: 
            cubic-bezier(0, 0, 0, 1.74);
  -webkit-animation-delay: 500ms;
          animation-delay: 500ms;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}

#heart { 
  -webkit-animation-name: heartbeat; 
          animation-name: heartbeat; 
}
#echo { 
  -webkit-animation-name: echo; 
          animation-name: echo; 
}

/* 
 * ä½ é è¿ä¹è¿å¹²åï½           
 */

#heart, #echo {
  -webkit-animation-play-state: running;
          animation-play-state: running;
}

/* 
 * æé½è¸çº¢äºï½å¿å¿        
 */

/* 
 * è¿é¢å°å¿å¿éä½  `(*^ï¹^*)â²         
 * çæ¥å¿«ä¹ð ï½äº²ç±åï½          
 * ææä¸è¯¾     
 * ä½ æåæ¬¢çé£å®¶é¤é¦           
 * ä¸è§ä¸æ£å¦ï½         
 */
"""

openComment = false

writeStyleChar = (which) ->
	# begin wrapping open comments
  if which == '/' && openComment == false
    openComment = true
    styles = $('#style-text').html() + which
  else if which == '/' && openComment == true
    openComment = false
    styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>')
  # wrap style declaration
  else if which == ':'
    styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:')
  # wrap style value 
  else if which == ';'
    styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;')
  # wrap selector
  else if which == '{'
    styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{')
  else
    styles = $('#style-text').html() + which
  $('#style-text').html styles
  $('#style-tag').append which

writeStyles = (message, index, interval) ->
  if index < message.length
    pre = document.getElementById 'style-text'
    pre.scrollTop = pre.scrollHeight
    writeStyleChar message[index++]
    setTimeout (->
      writeStyles message, index, if openComment then 60 else 5
    ), interval
    

# appending the tags I'll need.
$('body').append """
  <style id="style-tag"></style>
	<span id="echo"></span>
	<span id="heart"><i></i></span>
	<pre id="style-text"></pre>
"""

# faster typing in small iframe on codepen homepage
# time = if window.innerWidth <= 578 then 4 else 16
time = 60

# starting it off
writeStyles(styles, 0, time)

###
Changelog:
1.0.0: i exist!
1.0.1: heart instead of circle
1.0.2: including standard CSS3 transforms and animations
	was only using `-webkit` to be less verbose (standard transforms dont work in safari)
	now works in FF
1.0.3: crossbrowser echo 
	nested `scale()` styles (scaled in scaled) only worked in chrome
	moved echo out of heart to fix
1.0.4: more efficient animations
	`0%, 100% {}` instead of duplicated keyframes
1.0.5: overflwo fix
  `overflow: auto` on the `pre`
###