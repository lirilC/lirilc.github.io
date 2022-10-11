RooT.imporT= function(x, b, c){

    var a=  async function () {
                const module = await import(`${x}`);
                c(module)
            }
	a()
}