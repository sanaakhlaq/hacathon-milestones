// app.ts
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
    outputDiv.innerHTML = "\n    <h3>Generated Data:</h3>\n    <p><strong>Full Name:</strong> ".concat(data.personalInfo.fullName, "</p>\n    <p><strong>Email:</strong> ").concat(data.personalInfo.email, "</p>\n    <p><strong>Phone:</strong> ").concat(data.personalInfo.phone, "</p>\n    <p><strong>Qualification:</strong> ").concat(data.educationInfo.highestQualification, "</p>\n    <p><strong>Institution:</strong> ").concat(data.educationInfo.institution, "</p>\n    <p><strong>Graduation Year:</strong> ").concat(data.educationInfo.graduationYear, "</p>\n    <p><strong>Company Name:</strong> ").concat(data.experienceInfo.companyName, "</p>\n    <p><strong>Job Title:</strong> ").concat(data.experienceInfo.jobTitle, "</p>\n    <p><strong>Years of Experience:</strong> ").concat(data.experienceInfo.yearsOfExperience, "</p>\n  ");
}
