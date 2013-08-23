// Copyright (c) 2012 Vickeychen. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var QuickPreview = {};
function g(str){
	return document.getElementById(str);
}
function preview(source_txt){
	var win = window.open('popup.html');
		QuickPreview['source_code'] = source_txt;
}

function OnMenuItemClick(info, tab) {
	var text = g('src_txt'), source_txt, selection_txt;
	
	if(info.hasOwnProperty('selectionText')){
		selection_txt = info.selectionText;
		preview(selection_txt);
	}else{
		text.value = '';
		text.focus();
		if(document.execCommand('paste')){
			source_txt = text.value;
			if(source_txt != ''){
				preview(source_txt);
			}
		}else{
			alert('\u6CA1\u6709\u6743\u9650\u83B7\u53D6\u526A\u8D34\u677F\u5185\u5BB9');
		}
	}
}

var cmid = chrome.contextMenus.create({"title": "\u5FEB\u901F\u9884\u89C8\u4EE3\u7801(&Q)", "contexts":["page", "selection"],"onclick": OnMenuItemClick});