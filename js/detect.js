  function detect() {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    var pathname = window.location.pathname;
    var search = window.location.search;
    var hash = window.location.hash
    //alert(protocol);
    if (protocol == 'https:') {
      //alert('если https:// ничего не делать');
    } else {
      //alert('иначе перейти на https://');
      protocol = 'https://';
      //alert('ссылка   ' + protocol + hostname + search + hash);
      var newurl = protocol + hostname + pathname + search + hash + '#new';
      //alert('новый адрес  ' + newurl);
      window.location.reload(newurl);
    };
  }
  detect();
