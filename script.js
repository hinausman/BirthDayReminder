
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
        dateofbirth: "01/24/1987",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"

    },
    {
        id: 2,
        name: "Deepali Jain ",
        dateofbirth: "09/09/1988",     // changing dateofbirth and month to current date to show initial content
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 3,
        name: "Camila Abreu",
        dateofbirth: "11/09/1988", // changing date and month to current date to show initial content
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 4,
        name: "Hanna",
        dateofbirth: "09/09/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 5,
        name: "Huda",
        dateofbirth: "06/06/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 6,
        name: "Julieta Rodríguez",
        dateofbirth: "06/04/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 7,
        name: "Lalithauda",
        dateofbirth: "06/06/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 8,
        name: "Shobana",
        dateofbirth: "11/09/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 9,
        name: "Aditi Sawardekar",
        dateofbirth: "06/05/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },
    {
        id: 10,
        name: "Zaina Faheem",
        dateofbirth: "06/05/1996",
        image: "images/empty.png",
        designation: "student",
        email: "abc@xyz.com"
    },


];




function PopulateCardsView() {
    const peopleSearchResult = document.getElementById("peopleSearchResult");

    for (let i = 0; i < data.length; i++) {
        let section = document.createElement("section");
        section.className = "container";

        let article = document.createElement("article");
        article.className = "person";

        let img = document.createElement("img");
        img.src = data[i].image;
        img.setAttribute("alt", data[i].name);

        let info = document.createElement("div");

        let name = document.createElement("h4");
        //h4.setAttribute("id", "name");
        name.innerHTML = data[i].name;

        let dob = document.createElement("h4");
        dob.innerHTML = data[i].dateofbirth;

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
}



function PopulateTabularView() {

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

        let greetingsCell = document.createElement("div");
        greetingsCell.className = "table-body-cell";
        greetingsCell.innerHTML = '<a href="#">Send Greetings</a>';

        row.appendChild(nameCell);
        row.appendChild(dobCell);
        row.appendChild(designationCell);
        row.appendChild(emailCell);
        row.appendChild(greetingsCell);

        respTableBody.appendChild(row);

    }
}

// populate data in cards view when page loads
PopulateCardsView();

// Populate data in tabular view when page loads
PopulateTabularView();

