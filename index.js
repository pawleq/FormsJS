function ShowHideUniDegree() {
    const degreeContainer = document.getElementById("col2-1");
    if( document.getElementById("aukstuni").checked)
    {
        degreeContainer.style.display="block";
    }
    else 
    {
        degreeContainer.style.display="none";
    }
}
function ShowHideCollDegree() {
    const degreeContainer = document.getElementById("col2-5");
    if(document.getElementById("aukskol").checked)
    {
        degreeContainer.style.display="block";
    }
    else 
    {
        degreeContainer.style.display="none";
    }
}
function ShowHideQual() {
    const qualContainer = document.getElementById("col2-2");
    if(document.getElementById("bakal").checked || document.getElementById("magist").checked || document.getElementById("daktr").checked || document.getElementById("profkval").checked)
    {
        qualContainer.style.display="block";
    }
    else 
    {
        qualContainer.style.display="none";
    }
}
function ShowHidePreQual() {
    const qualContainer = document.getElementById("col2-3");
    if(document.getElementById("vid").checked || document.getElementById("pagr").checked)
    {
        qualContainer.style.display="block";
    }
    else 
    {
        qualContainer.style.display="none";
    }
}
function ShowHideProfQual() {
    const qualContainer = document.getElementById("col2-4");
    if(document.getElementById("prof").checked)
    {
        qualContainer.style.display="block";
    }
    else 
    {
        qualContainer.style.display="none";
    }
}
function ShowHideMarried() {
    const partnerContainer = document.getElementById("col4-1");
    const childrenContainer = document.getElementById("col4-2");
    if(document.getElementById("married").checked)
    {
        partnerContainer.style.display="block";
        childrenContainer.style.display="block";
    }
    else 
    {
        partnerContainer.style.display="none";
        childrenContainer.style.display="none";
    }
}
function ShowHideBrokeOrNotMarried() {
    const childrenContainer = document.getElementById("col4-2");
    if(document.getElementById("notmarried").checked || document.getElementById("broke").checked)
    {
        childrenContainer.style.display="block";
    }
    else 
    {
        childrenContainer.style.display="none";
    }
}
function ShowHideStudies() {
    const studiesContainer = document.getElementById("col5-1");
    if(document.getElementById("studying").checked)
    {
        studiesContainer.style.display="block";
    }
    else 
    {
        studiesContainer.style.display="none";
    }
}
function ShowHideWork() {
    const workContainer = document.getElementById("col5-2");
    if(document.getElementById("works").checked)
    {
        workContainer.style.display="block";
    }
    else 
    {
        workContainer.style.display="none";
    }
}
function ShowHideUnemployment() {
    const unemploymentContainer = document.getElementById("col5-3");
    if(document.getElementById("unemployed").checked)
    {
        unemploymentContainer.style.display="block";
    }
    else 
    {
        unemploymentContainer.style.display="none";
    }
}
document.getElementById("addDegree").onclick = function() {
    var degreeCell = document.getElementById("degreeCell");
    var input = document.createElement("input");
    input.type = "text";
    var br = document.createElement("br");
    degreeCell.appendChild(input);
    degreeCell.appendChild(br);
}
document.getElementById("addContact").onclick = function() {
    var contactCell = document.getElementById("contactCell");
    var input = document.createElement("input");
    input.type = "text";
    var br = document.createElement("br");
    contactCell.appendChild(input);
    contactCell.appendChild(br);
}
var i = 0;
document.getElementById("addChild").onclick = function() {
    var childCell = document.getElementById("childCell");
    var input = document.createElement("input");
    input.type = "text";
    var br = document.createElement("br");
    childCell.appendChild(input);
    childCell.appendChild(br);
    i++;
    document.getElementById('timesClicked').innerHTML = i;
}

function saveObject() {

    const firstName = document.getElementById("firstName")
    const middleName = document.getElementById("middleName")
    const lastName = document.getElementById("lastName")
    const formerLastName = document.getElementById("mergautine")

    const men = document.getElementById("male");
    const women = document.getElementById("female");

    var gender

    if (men.checked){
        gender = "vyras"
    }
    else if (women.checked){
        gender = "moteris"
    }

    const birthDate = document.getElementById("birthDate")
    const personalCode = document.getElementById("kodas")

    const pagrDegree = document.getElementById("pagr")
    const vidDegree = document.getElementById("vid")
    const profDegree = document.getElementById("prof")
    const kolDegree = document.getElementById("aukskol")
    const uniDegree = document.getElementById("aukstuni")

    var degree
    
    if (pagrDegree.checked){
        degree = "Pagrindinis"
    }
    else if (vidDegree.checked){
        degree = "Vidurinis"
    }
    else if (profDegree.checked){
        degree = "Profesinis"
    }
    else if (kolDegree.checked){
        degree = "Aukštasis-kolegijinis"
    }
    else if (uniDegree.checked){
        degree = "Aukštasis-universitetinis"
    }

    const lastSchool = document.getElementById("lastSchool")
    const endYear = document.getElementById("endYear")

    const profesinis = document.getElementById("profkval")
    const bakalauras = document.getElementById("bakal")
    const magistras = document.getElementById("magist")
    const daktaras = document.getElementById("daktr")

    var qual

    if (profesinis.checked){
        qual = "Profesinis"
    }
    else if (bakalauras.checked){
        qual = "Bakalauras"
    }
    else if (magistras.checked){
        qual = "Magistras"
    }
    else if (daktaras.checked){
        qual = "Daktaras"
    }

    const qualifications = document.getElementById("degrees")

    const phoneNumber = document.getElementById("phoneNumber")
    const email = document.getElementById("email")
    const otherContact = document.getElementById("contacts")

    const country = document.getElementById("country")
    const city = document.getElementById("city")
    const adress = document.getElementById("adress")

    const married = document.getElementById("married")
    const notMarried = document.getElementById("notmarried")
    const divorced = document.getElementById("broke")

    var marriage

    if (married.checked){
        marriage = "Vedęs/vedusi"
    }
    if (notMarried.checked){
        marriage ="Nevedęs/nevedusi"
    }
    if (divorced.checked){
        marriage = "Išsiskyręs/išsiskyrusi"
    }

    const partnerName = document.getElementById("pName")
    const partnerSurname = document.getElementById("pSurname")
    const partnerPCode = document.getElementById("pAk")

    const childsCount = document.getElementById("timesClicked")
    const child = document.getElementById("childCell")

    const studying = document.getElementById("studying")
    const works = document.getElementById("works")
    const unemployed = document.getElementById("unemployed")
    const holiday = document.getElementById("holiday")

    var workStatus

    if (studying.checked){
        workStatus = "Studijuoja"
    }
    else if (works.checked){
        workStatus = "Dirba"
    }
    else if (unemployed.checked){
        workStatus = "Nedirba"
    }
    else if (holiday.checked){
        workStatus = "Motinystės/tėvystės atostogos"
    }

    const studyLadder = document.getElementById("studyLadder")
    const studyYear = document.getElementById("studyYear")
    const studyPlace = document.getElementById("studyPlace")

    const workPlace = document.getElementById("workPlace")
    const workOffice = document.getElementById("workOffice")
    const workYear = document.getElementById("workYear")
    const workType = document.getElementById("workType")
    const workArea = document.getElementById("workArea")

    const unemployementReason = document.getElementById("unemployementReason")

    var person = []
    const personalInfo = {
        name: firstName.value,
        secondName: middleName.value,
        lastName: lastName.value,
        formerLastName: formerLastName.value,
        genders: gender,
        birthDate: birthDate.value,
        personalCode: personalCode.value,
        education: degree,
        lastSchool: lastSchool.value,
        endYear: endYear.value,
        qualification: qual,
        qualIn: qualifications.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        country: country.value,
        adress: adress.value,
        otherConctact: otherContact.value,
        marriage: marriage,
        partnerName: partnerName.value,
        partnerLastName: partnerSurname.value,
        partnerPersonalCode: partnerPCode.value,
        kidsAmount: childsCount.value,
        kids: child.value,
        workStatus: workStatus,
        studyLadder: studyLadder.value,
        studyYear: studyYear.value,
        studyPlace: studyPlace.value,
        workPlace: workPlace.value,
        workOffice: workOffice.value,
        workYear: workYear.value,
        workType:workType.value,
        workArea :workArea.value,
        unemployementReason: unemployementReason.value
      }
      person.push(personalInfo)
      console.log(person)
}