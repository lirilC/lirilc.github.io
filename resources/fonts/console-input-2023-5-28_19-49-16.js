$(".redo").on("click", function(){
	if(localStorage.getItem(`${alternatives.id}$_${$(this).parent().index()}`) != null){
		$(this).parent().find("input").val(localStorage.getItem(`${alternatives.id}$_${$(this).parent().index()}`))
		$(this).parent().find("input").trigger("input")
	}
})