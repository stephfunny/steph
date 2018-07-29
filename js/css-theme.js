var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'css/styles.css';
document.head.appendChild(link);
document.getElementById('switch-css')
  .addEventListener("click", (e) => {
    // e.preventDefault();
    var isLight = link.href.split('/')[link.href.split('/').length - 1] === 'styles.css';
    if (isLight) {
      link.href = 'css/dark.css';
      document.getElementById("switchcss").checked = true;
      document.getElementById("dark-side").innerHTML = 'Show me the light';
    } else {
      link.href = 'css/styles.css';
      document.getElementById("switchcss").checked = false;
      document.getElementById("dark-side").innerHTML = 'Enter the dark side';
    }
    e.preventDefault();
    document.head.appendChild(link);
  });
var changeCss = function() {
  // var currentTheme = link.href.split('/')[link.href.split('/').length - 1];
  //     console.log(currentTheme === 'styles.css');
  //     link.href = currentTheme === 'styles.css' ? 'css/dark.css' : 'css/styles.css';
  //     // document.getElementById('switch-css').click();
  // console.log('myFunc');
  // console.log(e);
};
