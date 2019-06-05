


function fetchData(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    resolve(req);
                }
                else {
                    reject("It went wrong");
                }
            }
        }
        req.open("GET", url);
        req.send();
    })
}


function theInput() {
    let inp = document.getElementById("inputName").value;
    let account = new Account(inp);
    // console.log();
    myAccount = JSON.stringify(account);
    sendData(myAccount, "http://localhost:8080/JavaEEServer-1.0/api/accounts/");
    console.log(myAccount);
    // document.getElementById("inputName").innerText = JSON.stringify(inp);

}


function sendData(data, url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status === 201) {
                    resolve(req);
                }
                else {
                    reject("It went wrong");
                }
            }
        }
        req.open("POST", url);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(data);
    })
}



function sendReq() {
    fetchData("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json").then((req) => {
        let superHeroObject = JSON.parse(req.responseText);
        console.log(req.responseText);
        console.log(superHeroObject);


    });
}





