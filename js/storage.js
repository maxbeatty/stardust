// remove static img and insert iframe
window.onload=function(){
  var parent = document.getElementById('map');
  var child = document.getElementById('staticImg');
  parent.removeChild(child);
  parent.innerHTML='<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=471+Stardust+Way+Cloverdale,+IN+46120&amp;sll=39.521191,-86.808236&amp;sspn=0.010229,0.01266&amp;ie=UTF8&amp;hq=&amp;hnear=471+Stardust+Way,+Cloverdale,+Putnam,+Indiana+46120&amp;ll=39.867588,-86.676636&amp;spn=1.673745,2.746582&amp;z=8&amp;iwloc=A&amp;output=embed"></iframe>';
};
