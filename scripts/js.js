document.documentElement.style.overflow='hidden';

window.onload=function(){
    if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
      var bodyTag = document.getElementsByTagName('sss')[0];
    //   bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';
      bodyTag.style.height =  screen.height * 1.03 + 'px';
    }
    setTimeout(function() {
      window.scrollTo(0, 1)
    }, 0);
  };