jQuery(document).bind('mobileinit',function(){jQuery.mobile.page.prototype.options.keepNative=".data-role-none, .data-role-none *";});

/*
jQuery mobile css 충돌하가 위해서 막는법 위의 코드를 jQuery mobile위에 적는다.

<div class="data-role-none">

{$content}

</div>
*/
