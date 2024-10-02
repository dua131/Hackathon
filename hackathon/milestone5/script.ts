//Get references to the form and dispaly area
    const form =document.getElementById('resume-form') as HTMLInputElement;
    const resumeDisplayElement= document.getElementById('resume-display') as HTMLInputElement
    const ShareableLinkContainer =document.getElementById('shareable-link-') as HTMLInputElement
    const ShareableLinkElement =document.getElementById('shareable-link') as HTMLInputElement
    const downloadPdfButton =document.getElementById('download-pdf') as HTMLInputElement

    //Handle form submission
    form.addEventListener('submit', (event:Event) =>{
      event.preventDefault();//prevent page reload

      //collect input value
      const username=(document.getElementById('username')as HTMLInputElement).value
      const name= (document.getElementById('name') as HTMLInputElement).value
      const email= (document.getElementById('email') as HTMLInputElement).value
      const phone=(document.getElementById('phone') as HTMLInputElement).value
      const education=(document.getElementById('eduaction') as  HTMLInputElement).value
      const experience =(document.getElementById('experience') as HTMLInputElement).value
      const skills=(document.getElementById('skills') as HTMLInputElement).value

      //save form data in localStorage with the username as the key
      const resumeData ={
        name,
        email, 
        phone,
        education,
        experience,
        skills,
      };
      localStorage.setItem(username, JSON.stringify(resumeData));//save

      //Generte the resume content dynamiclly
    const resumeHTML = `
    <h2><b<Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Username:</b><span contenteditable="true">${username}</span></p>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true"${email}</span></P>
    <p><b>Phone:</b><span contanteditable="true"${phone}</span></p>

    <h3>Education</h3>
    <p contanteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contanteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;

    //Display the generated resume
    if(resumeDisplayElement){
      resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing.');
    }
});