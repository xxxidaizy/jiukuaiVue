import flexible_css from  './flexible_css'

export default{
	//designWidth:设计稿的实际宽度，需要根据实际设置
	//maxWidth：制作稿的最大宽度，需要根据实际设置
	flexible(designWidth,maxWidth){
		var doc=document,
		win=window,
		docEl=doc.documentElement,
		remStyle=doc.createElement("style"),
		tid;
		
		function refreshRem(){
			var width=docEl.getBoundingClientRect().width;
			maxWidth=maxWidth||540;
			width>maxWidth&&(width=maxWidth);
			var rem=width*100/designWidth;
			remStyle.innerHTML='html{font-size:'+rem+'px;}';			
		}
		
		if(docEl.firstElementChild){
			docEl.firstElementChild.appendChild(remStyle);
		}else{
			var wrap=doc.createElement("div");
			wrap.appendChild(remStyle);
			doc.write(wrap.innerHTML);
			wrap=null;
		}
		//要等viewport设置后才能执行refreshRem，否则refreshRem会执行2次；
		refreshRem();
		
		win.addEventListener("resize",function(){
			if(e.persisted){
				clearTimeout(tid);
				tid=setTimeout(refreshRem,300);
			}
		},false);
		
		if(doc.readyState==="complete"){
			doc.body.style.fontSize="16px";
		}else{
			doc.addEventListener("DOMContentLoaded",function(e){
				doc.body.style.fontSize="16px";
			},false);
		}		
	},
}
