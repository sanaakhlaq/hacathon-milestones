// app.ts
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
    <h3>Generated Data:</h3>
    <p><strong>Full Name:</strong> ${data.personalInfo.fullName}</p>
    <p><strong>Email:</strong> ${data.personalInfo.email}</p>
    <p><strong>Phone:</strong> ${data.personalInfo.phone}</p>
    <p><strong>Qualification:</strong> ${data.educationInfo.highestQualification}</p>
    <p><strong>Institution:</strong> ${data.educationInfo.institution}</p>
    <p><strong>Graduation Year:</strong> ${data.educationInfo.graduationYear}</p>
    <p><strong>Company Name:</strong> ${data.experienceInfo.companyName}</p>
    <p><strong>Job Title:</strong> ${data.experienceInfo.jobTitle}</p>
    <p><strong>Years of Experience:</strong> ${data.experienceInfo.yearsOfExperience}</p>
  `;
}
