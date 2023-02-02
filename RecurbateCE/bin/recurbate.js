"use strict";
/*
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <https://unlicense.org>
 */

window.addEventListener("load",function(e) {
  let url=window.location.href;
  if (url.indexOf("play.php?video=")>0) {
    setTimeout(function() {
      url="https://recurbate.com/api/get.php?"+url.substring(31);
      let btn=document.getElementById("play_button");
      if (btn) {
        let edit=document.createElement("input");
        edit.style.width="920px";
        edit.style.border=0;
        edit.style.outline="none";
        edit.style.padding="10px 6px";
        edit.style.borderRadius="6px";
        edit.style.marginBottom="20px";
        edit.style.font="bold 12px/12px Consolas";
        edit.style.cursor="pointer";
        edit.value=url+"&token="+btn.dataset.token;
        edit.readOnly=true;
        edit.onclick=function(e) {
          this.focus();
          this.select();
          document.execCommand("copy");
          this.blur();
        }
        let vid=document.getElementsByClassName("video-content-wrapper")[0];
        vid.insertBefore(edit,vid.firstChild);
      }
    },10);
  }
},false);
