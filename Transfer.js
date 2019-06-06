function nextPage() {
    let storageName = window.sessionStorage.getItem("Name");
    let myAccount = JSON.parse(storageName);
    document.getElementById("theName").innerHTML = myAccount.name;
}
nextPage();

