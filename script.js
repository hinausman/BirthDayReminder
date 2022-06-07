
const btnCardView = document.getElementById("btnCardView");
const btnTableView = document.getElementById("btnTableView");

btnCardView.addEventListener("click", handleCardView);

function handleCardView(){
    document.getElementById("peopleSearchResult").style.display = "flex"
    document.getElementById("peopleSearchResultTable").style.display = "none"
}

btnTableView.addEventListener("click",handleTableView);

function handleTableView(){

    document.getElementById("peopleSearchResult").style.display = "none"
    document.getElementById("peopleSearchResultTable").style.display = "flex"

}