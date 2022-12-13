exercici();
function exercici() {
	console.log(`17800 ${comprovarCP(17800)}`);
	console.log(`178001 ${comprovarCP(178001)}`);
	console.log(`17800a ${comprovarCP("17800a")}`);
	console.log(`1234-1234-12-0123456789 ${comprovarCC("1234-1234-12-0123456789")}`);
	console.log(`1234-1234-12-01234567890 ${comprovarCC("1234-1234-12-01234567890")}`);
	console.log(`1234-1234-12-012345678a ${comprovarCC("1234-1234-12-012345678a")}`);
	console.log(`(+0034) 972.264.212 ${comprovarTEL("(+0034) 972.264.212")}`);
	console.log(`(+0034) 972.264.2124 ${comprovarTEL("(+0034) 972.264.2124")}`);
	console.log(`(+0035) 972.264.211 ${comprovarTEL("(+0035) 972.264.211")}`);
	console.log(`44434567A ${comprovarDNI("44434567A")}`);
	console.log(`44434567-C ${comprovarDNI("44434567-C")}`);
	console.log(`B44434567 ${comprovarDNI("B44434567")}`);
	console.log(`B4443456A ${comprovarDNI("B4443456A")}`);

	console.log("Telefon - {(+0034) ddd.ddd.ddd}");
	console.log("DNI: ddddddddC dddddddd-C Cdddddddd");
}

function comprovarCP(cp){
	let regex = /^[0-9]{5}$/;
	return regex.test(cp);
}

function comprovarCC(cc){
	let regex = /^[0-9]{4}-[0-9]{4}-[0-9]{2}-[0-9]{10}$/;
	return regex.test(cc);
}
function comprovarTEL(tel){
	let regex = /^\(\+[0034]{4}\) [0-9]{3}.[0-9]{3}.[0-9]{3}$/;
	return regex.test(tel);
}
function comprovarDNI(dni){
	let regex = /^[0-9]{8}[A-z]{1}$|^[0-9]{8}-[A-z]{1}$|^[A-z]{1}[0-9]{8}$/;
	return regex.test(dni);
}