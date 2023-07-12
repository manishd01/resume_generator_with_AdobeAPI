// npm init -y
// npm install --save @adobe/pdfservices-node-sdk

console.log("linked correctly");
//handling json creation ------------------------------
function handleSubmit(event) {
  event.preventDefault();
  console.log("Entering this");

  // Get form values
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const emailAddress = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone").value;
  const linkedIn = document.getElementById("linkedIn").value;
  const jobTitle = document.getElementById("jobTitle").value;
  const summary = document.getElementById("summary").value;

  const skills = document.getElementById("skills").value;

  const education = [
    {
      SchoolName: document.getElementById("schoolName1").value,
      Year: document.getElementById("year1").value,
      Description: document.getElementById("description1").value,
    },
    {
      SchoolName: document.getElementById("schoolName2").value,
      Year: document.getElementById("year2").value,
      Description: document.getElementById("description2").value,
    },
  ];

  const experience = [
    {
      CompanyName: document.getElementById("companyName").value,
      Year: document.getElementById("experienceYear").value,
      Description: document.getElementById("experienceDescription").value,
    },
  ];

  const achievements = [
    {
      Type: document.getElementById("achievementType1").value,
      Description: document.getElementById("achievementDescription1").value,
    },
    {
      Type: document.getElementById("achievementType2").value,
      Description: document.getElementById("achievementDescription2").value,
    },
  ];
  //creating json obj
  const resumeData = {
    Name: name,
    LastName: lastName,
    EmailAddress: emailAddress,
    PhoneNumber: phoneNumber,
    LinkedIn: linkedIn,
    JobTitle: jobTitle,
    Summary: summary,
    Skills: skills,
    Education: education,
    Experience: experience,
    Achievements: achievements,
  };

  // Convert JSON object to string
  const jsonData = JSON.stringify(resumeData, null, 2);

  // Save JSON string to a file
  const blob = new Blob([jsonData], { type: "application/json" });
  saveAs(blob, "./resume11.json");
  console.log("Created JSON");
  return;
}
//when event occur:
function create_json(event) {
  console.log("Entry");

  document.getElementById("form_select").addEventListener("submit", (event) => {
    event.preventDefault();
    handleSubmit(event);
  });
  console.log("er");
}
//called function form html
function prcessForm(event) {
  console.log("shuri");
  // e.preventDefault();
  create_json(event);
}
const func = document.getElementById("submit_data");
func.onclick = prcessForm;

//
//used for select doc and json file and pass them to API request---------------------------------------

function select_files(event) {
  console.log("entry shuru");
  event.preventDefault();
  const doc_file_id = document.getElementById("docFile");
  const json_file_id = document.getElementById("jsonFile");
  console.log(doc_file_id.value, "   ff    ", json_file_id.value);
  const loc1 = doc_file_id.value;
  const loc2 = json_file_id.value;
  if (loc1 != "" && loc2 != "") {
    console.log("selected?");
    const link1 = require("../handleAPIRequest");
    link1.handleAPIRequestfun(loc1, loc2);

    // console.log(doc_file_id, " ", file1, "II ", loc1, "/pp", loc2);
  } else {
    alert("please please!!!!!! , select files?");
  }
  console.log("end");
}
const func1 = document.getElementById("submit_file");
func1.onclick = select_files;
///-----------end------------------------------
