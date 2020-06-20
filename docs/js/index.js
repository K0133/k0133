let publicIP;

getIP();

function getIP() {
  let xhr = new XMLHttpRequest();
  let url = 'https://api.ipify.org/?format=json';
  xhr.open("GET", url);
  xhr.send();

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4) {
      let response = JSON.parse(xhr.responseText);
      publicIP = response.ip;
    }
  }
}

function submitPin() {
  let pin = document.getElementById("code").value;
  document.getElementById("code").value = "";
  
  var xhr = new XMLHttpRequest();
  const url = 'http://localhost:5000/initium/code?pin=' + pin + '&ip=' + publicIP;
  xhr.open("GET", url)
  xhr.send();
  
  xhr.onreadystatechange = (e) => {
    if (xhr.readyState == 4) {
      let response = JSON.parse(xhr.responseText)
      if (response.success === true) {
        document.getElementById("inputBox").style.display = "none";
        document.getElementById("k0133").style.display = "none";
        document.getElementById("button").href = response.payload_url;
        document.getElementById("button").style.display = "block";
      } else if (response.success === false) {
        alert(response.message)
      } else {
        alert("Error: Internal Server Error. Please try again. If error persists please contact K0133 on discord."); 
      }
    }
    return;
  }
}