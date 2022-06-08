
const btnCardView = document.getElementById("btnCardView");
const btnTableView = document.getElementById("btnTableView");

btnCardView.addEventListener("click", handleCardView);

function handleCardView() {
    document.getElementById("peopleSearchResult").style.display = "flex"
    document.getElementById("peopleSearchResultTable").style.display = "none"
}

btnTableView.addEventListener("click", handleTableView);

function handleTableView() {

    document.getElementById("peopleSearchResult").style.display = "none"
    document.getElementById("peopleSearchResultTable").style.display = "flex"

}

const data = [
    {
        id: 1,
        name: "Hina Usman",
        date: "01/24/1987",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"

    },
    {
        id: 2,
        name: "Deepali Jain ",
        date: "09/09/1988",     // changing date and month to current date to show initial content
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 3,
        name: "Camila Abreu",
        date: "11/09/1988", // changing date and month to current date to show initial content
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 4,
        name: "Hanna",
        date: "09/09/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 5,
        name: "Huda",
        date: "06/06/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 6,
        name: "Julieta Rodríguez",
        date: "06/04/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 7,
        name: "Lalithauda",
        date: "06/06/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 8,
        name: "Shobana",
        date: "11/09/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 9,
        name: "Aditi Sawardekar",
        date: "06/05/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 10,
        name: "Zaina Faheem",
        date: "06/05/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },


];


const peopleSearchResult = document.getElementById("peopleSearchResult");
const respTableBody = document.getElementById("resp-table-body");

for (let i = 0; i < data.length; i++) {
    let section = document.createElement("section");
    section.className = "container";

    let article = document.createElement("article");
    article.setAttribute("class", "person");

    let img = document.createElement("img");
    img.src = data[i].image;
    img.setAttribute("alt", data[i].name);

    let info = document.createElement("div");

    let name = document.createElement("h4");
    //h4.setAttribute("id", "name");
    name.innerHTML = data[i].name;

    let dob = document.createElement("h4");
    dob.innerHTML = data[i].date;

    let greetingsLink = document.createElement("a");
    greetingsLink.href = "#";
    greetingsLink.textContent = "Send Greetings";

    info.appendChild(name);
    info.appendChild(dob);
    info.appendChild(greetingsLink);

    article.appendChild(img);
    article.appendChild(info);

    section.appendChild(article);
    peopleSearchResult.appendChild(section);
}

