var ajaxhttp = new XMLHttpRequest();
var url = "jynx.json";

ajaxhttp.open("GET", url, true);
ajaxhttp.setRequestHeader("content-type", "application/json");
ajaxhttp.onreadystatechange = function () {
  if (ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {

    var jcontent = JSON.parse(ajaxhttp.responseText);
      console.log(jcontent);
      console.log(ajaxhttp);
  }
}

ajaxhttp.send(null);
console.log(ajaxhttp);




// axios.get('https://bit.ly/2HU6L4F')
// .then(function (response) {
//   console.log(response)
// });
