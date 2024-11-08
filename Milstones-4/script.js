// script.ts
var form = document.getElementById('registrationForm');
var outputDiv = document.getElementById('output');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = {
        personalInfo: {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
        },
        educationInfo: {
            highestQualification: document.getElementById('highestQualification').value,
            institution: document.getElementById('institution').value,
            graduationYear: parseInt(document.getElementById('graduationYear').value),
        },
        experienceInfo: {
            companyName: document.getElementById('companyName').value,
            jobTitle: document.getElementById('jobTitle').value,
            yearsOfExperience: parseInt(document.getElementById('yearsOfExperience').value) || 0,
        },
    };
    displayOutput(formData);
});
function displayOutput(data) {
    outputDiv.innerHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Generated Data:</h3>\n    <p><strong>Full Name:</strong><span contenteditable=\"true\"> ".concat(data.personalInfo.fullName, "</span></p>\n    <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(data.personalInfo.email, "</span></p>\n    <p><strong>Phone:</strong><span contenteditable=\"true\"> ").concat(data.personalInfo.phone, "</span></p>\n    <p><strong>Qualification:</strong><span contenteditable=\"true\"> ").concat(data.educationInfo.highestQualification, "</span></p>\n    <p><strong>Institution:</strong><span contenteditable=\"true\"> ").concat(data.educationInfo.institution, "</span></p>\n    <p><strong>Graduation Year:</strong><span contenteditable=\"true\"> ").concat(data.educationInfo.graduationYear, "</span></p>\n    <p><strong>Company Name:</strong><span contenteditable=\"true\"> ").concat(data.experienceInfo.companyName, "</span></p>\n    <p><strong>Job Title:</strong><span contenteditable=\"true\"> ").concat(data.experienceInfo.jobTitle, "</span></p>\n    <p><strong>Years of Experience:</strong><span contenteditable=\"true\"> ").concat(data.experienceInfo.yearsOfExperience, "</span></p>\n  ");
}
