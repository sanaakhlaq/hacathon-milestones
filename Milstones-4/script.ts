// script.ts
const form = document.getElementById('registrationForm') as HTMLFormElement;
const outputDiv = document.getElementById('output') as HTMLDivElement;

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
}

interface EducationInfo {
  highestQualification: string;
  institution: string;
  graduationYear: number;
}

interface ExperienceInfo {
  companyName: string;
  jobTitle: string;
  yearsOfExperience: number;
}

interface FormData {
  personalInfo: PersonalInfo;
  educationInfo: EducationInfo;
  experienceInfo: ExperienceInfo;
}

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const formData: FormData = {
    personalInfo: {
      fullName: (document.getElementById('fullName') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      phone: (document.getElementById('phone') as HTMLInputElement).value,
    },
    educationInfo: {
      highestQualification: (document.getElementById('highestQualification') as HTMLInputElement).value,
      institution: (document.getElementById('institution') as HTMLInputElement).value,
      graduationYear: parseInt((document.getElementById('graduationYear') as HTMLInputElement).value),
    },
    experienceInfo: {
      companyName: (document.getElementById('companyName') as HTMLInputElement).value,
      jobTitle: (document.getElementById('jobTitle') as HTMLInputElement).value,
      yearsOfExperience: parseInt((document.getElementById('yearsOfExperience') as HTMLInputElement).value) || 0,
    },
  };

  displayOutput(formData);
});

function displayOutput(data: FormData) {
  outputDiv.innerHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Generated Data:</h3>
    <p><strong>Full Name:</strong><span contenteditable="true"> ${data.personalInfo.fullName}</span></p>
    <p><strong>Email:</strong><span contenteditable="true"> ${data.personalInfo.email}</span></p>
    <p><strong>Phone:</strong><span contenteditable="true"> ${data.personalInfo.phone}</span></p>
    <p><strong>Qualification:</strong><span contenteditable="true"> ${data.educationInfo.highestQualification}</span></p>
    <p><strong>Institution:</strong><span contenteditable="true"> ${data.educationInfo.institution}</span></p>
    <p><strong>Graduation Year:</strong><span contenteditable="true"> ${data.educationInfo.graduationYear}</span></p>
    <p><strong>Company Name:</strong><span contenteditable="true"> ${data.experienceInfo.companyName}</span></p>
    <p><strong>Job Title:</strong><span contenteditable="true"> ${data.experienceInfo.jobTitle}</span></p>
    <p><strong>Years of Experience:</strong><span contenteditable="true"> ${data.experienceInfo.yearsOfExperience}</span></p>
  `;
}
