module.exports = function isset(object){
	return (object != "undefined" && object != undefined && object != null && object != "" && typeof(object) != 'undefined') ? true : false ;
}