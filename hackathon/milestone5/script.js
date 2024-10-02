//Get references to the form and dispaly area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var ShareableLinkContainer = document.getElementById('shareable-link-');
var ShareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('eduaction').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generte the resume content dynamiclly
    var resumeHTML = "\n    <h2><b<Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\"").concat(email, "</span></P>\n    <p><b>Phone:</b><span contanteditable=\"true\"").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contanteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contanteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
