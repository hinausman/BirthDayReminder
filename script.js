
const data = [

    {
        id: 1,
        name: "Camila Abreu",
        dateofbirth: "06/11/1994", // changing date and month to current date to show initial content
        image: "images/camila.png",
        designation: "Student",
        email: "camilaabreu@gmail.com"

    },
    {
        id: 2,
        name: "Gohar Vardanyan",
        dateofbirth: "06/11/1996",
        image: "images/gohar.jpg",
        designation: "Teacher",
        email: "goharvardyan@gmail.com"
    },
    {
        id: 3,
        name: "Deepali Jain ",
        dateofbirth: "09/09/1988",     // changing dateofbirth and month to current date to show initial content
        image: "images/empty.png",
        designation: "Student",
        email: "aaa@xyz.com"
    },

    {
        id: 4,
        name: "Hina Usman",
        dateofbirth: "01/24/1987",
        image: "images/hina.png",
        designation: "Student",
        email: "mail.hinausman@gmail.com"

    },
    {
        id: 5,
        name: "Hanna",
        dateofbirth: "09/09/1996",
        image: "images/hanna.jpg",
        designation: "Student",
        email: "hannaremy@outlook.com"
    },
    {
        id: 6,
        name: "Huda",
        dateofbirth: "06/06/1996",
        image: "images/huda.jpg",
        designation: "Student",
        email: "hou_da2009@hotmail.com"
    },
    {
        id: 7,
        name: "Julieta Rodríguez",
        dateofbirth: "06/04/1996",
        image: "images/juleita.jpg",
        designation: "Student",
        email: "julietarodriguezba@gmail.com"
    },
    {
        id: 8,
        name: "Lalithauda",
        dateofbirth: "03/05/1987",
        image: "images/lalitah.jpg",
        designation: "Student",
        email: "aletilalitha@gmail.com"
    },
    {
        id: 9,
        name: "Shobana",
        dateofbirth: "11/09/1996",
        image: "images/empty.png",
        designation: "Student",
        email: "ggg@xyz.com"
    },
    {
        id: 10,
        name: "Aditi Sawardekar",
        dateofbirth: "06/10/1996",
        image: "images/empty.png",
        designation: "Student",
        email: "nnn@xyz.com"
    },
    {
        id: 11,
        name: "Zaina Faheem",
        dateofbirth: "06/10/1996",
        image: "images/empty.png",
        designation: "Student",
        email: "hhh@xyz.com"
    },




];

const btnCardView = document.getElementById("btnCardView");
const btnTableView = document.getElementById("btnTableView");

const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", handleSearch);


btnCardView.addEventListener("click", handleCardView);
btnTableView.addEventListener("click", handleTableView);




// populate data in cards view when page loads
populateCardsView();

// Populate data in tabular view when page loads
populateTabularView();

todayBirthdays();


function handleSearch() {
    let searchedData = [];
    let searchText = document.getElementById("txtSearch").value;
    if (searchText === "") {
        alert("Kindly type in search text box.");
        return;
    }

    for (let i = 0; i < data.length; i++) {

        if (data[i].name.toLowerCase().includes(searchText.toLowerCase())) {
            searchedData.push(data[i]);
            // console.log(data[i])
        }
    }

    const peopleSearchResult = document.getElementById("peopleSearchResult");
    removeAllChildNodes(peopleSearchResult);
    for (let j = 0; j < searchedData.length; j++) {
        let section = document.createElement("section");
        section.className = "container";

        let article = document.createElement("article");
        article.className = "person";

        let img = document.createElement("img");
        img.src = searchedData[j].image;
        img.setAttribute("alt", searchedData[j].name);

        let info = document.createElement("div");

        let name = document.createElement("h4");
        //h4.setAttribute("id", "name");
        name.innerHTML = searchedData[j].name;

        let dob = document.createElement("h4");
        dob.innerHTML = searchedData[j].dateofbirth;

        let Desig = document.createElement("h4");
        Desig.innerHTML = searchedData[j].designation;

        let EmailId = document.createElement("h4");
        EmailId.innerHTML = searchedData[j].email;

        // let greetingsLink = document.createElement("a");
        // greetingsLink.href = "mailto:" + searchedData[j].email + "?subject=Greetings!&body=Happy Birthday to you";
        // greetingsLink.id = "greetingLink";
        // greetingsLink.textContent = "Send Greetings";

        info.appendChild(name);
        info.appendChild(dob);

        info.appendChild(Desig);
        info.appendChild(EmailId);
        //info.appendChild(greetingsLink);



        article.appendChild(img);
        article.appendChild(info);

        section.appendChild(article);
        peopleSearchResult.appendChild(section);


    }





    const respTableBody = document.getElementById("resp-table-body");

    removeAllChildNodes(respTableBody);
    for (let k = 0; k < searchedData.length; k++) {
        const row = document.createElement("div");

        // alernate css on rows of table
        if (k % 2 == 0) {
            row.className = "resp-table-row";
        }
        else {
            row.className = "resp-table-row-colored";
        }


        let nameCell = document.createElement("div");
        nameCell.className = "table-body-cell";
        nameCell.innerHTML = searchedData[k].name;

        let dobCell = document.createElement("div");
        dobCell.className = "table-body-cell";
        dobCell.innerHTML = searchedData[k].dateofbirth;

        let designationCell = document.createElement("div");
        designationCell.className = "table-body-cell";
        designationCell.innerHTML = searchedData[k].designation;

        let emailCell = document.createElement("div");
        emailCell.className = "table-body-cell";
        emailCell.innerHTML = searchedData[k].email;

        // let greetingsCell = document.createElement("div");
        // greetingsCell.className = "table-body-cell";
        // greetingsCell.innerHTML = '<a href="#">Send Greetings</a>';

        row.appendChild(nameCell);
        row.appendChild(dobCell);
        row.appendChild(designationCell);
        row.appendChild(emailCell);
        //row.appendChild(greetingsCell);

        respTableBody.appendChild(row);

    }





}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function handleCardView() {
    document.getElementById("peopleSearchResult").style.display = "flex"
    document.getElementById("peopleSearchResultTable").style.display = "none"
}



function handleTableView() {

    document.getElementById("peopleSearchResult").style.display = "none"
    document.getElementById("peopleSearchResultTable").style.display = "flex"

}






function populateCardsView() {
    const peopleSearchResult = document.getElementById("peopleSearchResult");

    for (let i = 0; i < data.length; i++) {
        let section = document.createElement("section");
        section.className = "container";

        let article = document.createElement("div");
        article.className = "person";

        let img = document.createElement("img");
        img.src = data[i].image;
        // img.setAttribute("alt", data[i].name);

        let info = document.createElement("div");

        let name = document.createElement("h4");
        //h4.setAttribute("id", "name");
        name.innerHTML = data[i].name;

        let dob = document.createElement("h4");
        dob.innerHTML = data[i].dateofbirth;

        let Desig = document.createElement("h4");
        Desig.innerHTML = data[i].designation;

        let EmailId = document.createElement("h4");
        EmailId.innerHTML = data[i].email;

        // let greetingsLink = document.createElement("a");
        // greetingsLink.href = "mailto:" + data[i].email + "?subject=Greetings!&body=Happy Birthday to you";
        // greetingsLink.id = "greetingLink";
        // greetingsLink.textContent = "Send Greetings";

        info.appendChild(name);
        info.appendChild(dob);

        info.appendChild(Desig);
        info.appendChild(EmailId);
        //info.appendChild(greetingsLink);



        article.appendChild(img);
        article.appendChild(info);

        section.appendChild(article);
        peopleSearchResult.appendChild(section);

    }
}

function populateTabularView() {

    const respTableBody = document.getElementById("resp-table-body");


    for (let i = 0; i < data.length; i++) {
        const row = document.createElement("div");

        // alernate css on rows of table
        if (i % 2 == 0) {
            row.className = "resp-table-row";
        }
        else {
            row.className = "resp-table-row-colored";
        }


        let nameCell = document.createElement("div");
        nameCell.className = "table-body-cell";
        nameCell.innerHTML = data[i].name;

        let dobCell = document.createElement("div");
        dobCell.className = "table-body-cell";
        dobCell.innerHTML = data[i].dateofbirth;

        let designationCell = document.createElement("div");
        designationCell.className = "table-body-cell";
        designationCell.innerHTML = data[i].designation;

        let emailCell = document.createElement("div");
        emailCell.className = "table-body-cell";
        emailCell.innerHTML = data[i].email;

        // let greetingsCell = document.createElement("div");
        // greetingsCell.className = "table-body-cell";
        // greetingsCell.innerHTML = '<a href="#">Send Greetings</a>';

        row.appendChild(nameCell);
        row.appendChild(dobCell);
        row.appendChild(designationCell);
        row.appendChild(emailCell);
        // row.appendChild(greetingsCell);

        respTableBody.appendChild(row);

    }
}




function todayBirthdays() {
    const currentDate = new Date().getDate();
    console.log("currentDate: " + currentDate);

    const currentMonth = new Date().getMonth();
    console.log("currentMonth : " + currentMonth);


    let todayData = [];
    // filter(today date and  month) initiaL data and push person objects in today data
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);

        if (parseInt(data[i].dateofbirth.substring(3, 5)) === currentDate
            &&
            parseInt(data[i].dateofbirth.substring(0, 2)) === currentMonth + 1) {
            todayData.push(data[i]);
        }
    }
    let noOfBirthdays = document.getElementById("noOfBirthdays");
    noOfBirthdays.innerHTML = todayData.length + " Birthdays Today";

    console.log(todayData.length);

    let people = document.getElementById("people");



    for (let j = 0; j < todayData.length; j++) {
        let article = document.createElement("article");
        article.className = "person";
        let img = document.createElement("img");
        img.src = todayData[j].image;
        img.setAttribute("alt", todayData[j].name);

        let info = document.createElement("div");

        let name = document.createElement("h4");
        //h4.setAttribute("id", "name");
        name.innerHTML = todayData[j].name;

        let dob = document.createElement("h4");
        dob.innerHTML = todayData[j].dateofbirth;

        let Desig = document.createElement("h4");
        Desig.innerHTML = todayData[j].designation;

        let EmailId = document.createElement("h4");
        EmailId.innerHTML = todayData[j].email;

        let greetingsLink = document.createElement("a");
        greetingsLink.href = "mailto:" + todayData[j].email + "?subject=Greetings!&body=Happy Birthday to you";
        greetingsLink.id = "greetingLink";
        greetingsLink.innerHTML = '<i class="fa fa-envelope-o" aria-hidden="true"></i> Send Greetings';

        info.appendChild(name);
        info.appendChild(dob);

        info.appendChild(Desig);
        info.appendChild(EmailId);
        info.appendChild(greetingsLink);



        article.appendChild(img);
        article.appendChild(info);

        people.appendChild(article);
    }

}




