function loadHeader()
{
    // Fetch the header.html file to use as header of all pages
    fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".head-div").innerHTML = data;
    })

    .catch(error => {
        console.log(error);
    });
}

loadHeader();