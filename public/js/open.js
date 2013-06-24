function opendoors(){ // Pour faire l'effet de départ
	setTimeout(function(){document.getElementById('webdoc').className='transparent';},0);
	setTimeout(function(){document.getElementById('pink').className='pink-open';},300);
	setTimeout(function(){document.getElementById('grey').className='grey-open';},300);
 	setTimeout(function(){document.getElementById('webdoc').className='none';},800);
}