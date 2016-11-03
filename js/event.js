var eventUtil={	
			//添加语句
			addHandler:function(element,type,handler){
				if(element.addEventlistener){
					element.addEventlistener(type,handler,false);
				}else if(element.attachEvent){
					element.attachEvent(type,handler);
				}else{
					element['on'+type]=handler;
				}
			},


		

			//删除语句
			removeHandler:function(element,type,handler){
				if(element.removeEventlistener){
					element.removeEventlistener(type,handler,false);
				}else if(element.attachEvent){
					element.detachEvent(type,handler);
				}else{
					element['on'+type]=null;
				}
			},


			//获取事件
			gatEvent:function(event){
				event=event||window.event;
			},
			//阻止事件的默认行为
			preventDefault:function(event){
				if(event.preventDefault){
					event.preventDefault();
				}else{
					event.returnValue=false;
				}
			},
			//阻止事件冒泡
			stopPropagetion:function(event){
				if(event.stopPropagetion){
					event.stopPropagation();
				}else{
					event.cancelBubble=true;
				}
			}
		
	}