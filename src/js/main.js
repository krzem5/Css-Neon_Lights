window.onload=function(){
	var pr=document.getElementsByClassName("neon")[0]
	for (var ch of pr.childNodes){
		if (ch.classList){
			ch.style.transform=`rotate(${Math.random()*3-1.5}deg) translate(${Math.random()*2-1}px,${Math.random()*2-1}px)`
			ch.style.height=`${Math.random()*15+285}px`
		}
	}
	setInterval(function(){
		var s=false
		for (var ch of pr.childNodes){
			if (ch.classList&&Math.random()<=0.05){
				ch.classList.add("off")
				s=true
			}
		}
		if (s==false){return}
		setTimeout(function(){
			for (var ch of pr.childNodes){
				if (ch.classList&&ch.classList.contains("off")){
					ch.classList.remove("off")
				}
			}
		},50)
	},750)
}
