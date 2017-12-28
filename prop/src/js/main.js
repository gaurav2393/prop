var rootContainer = document.getElementById('jsonViewer');
var createJsonBtn = document.getElementById("createJsonView");
var textArea = document.getElementById('inputJson');

createJsonBtn.addEventListener('click', function(){
  try {
    APP.JV.createJsonViewer(JSON.parse(textArea.value), rootContainer);
  } catch(e) {
    alert('Please enter valid JSON')
  }
});
