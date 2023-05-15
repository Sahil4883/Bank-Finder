function search(){
    const ifscCode = document.querySelector('.ifsc').value;
    fetch(`https://ifsc.razorpay.com/${ifscCode}`)
      .then(response => response.json())
      .then(data=>{
        const conclusion = document.querySelector('.content');
        conclusion.innerHTML = `
          <h2>${data.BANK} - ${data.BRANCH}</h2>
          <br>
          <p>IFSC Code: ${data.IFSC}</p>
          <br>
          <p>Address: ${data.ADDRESS}</p>
          <br>
          <p>Contact: ${data.CONTACT}</p>
          <br>
          <p>District: ${data.DISTRICT}</p>
          <br>
          <p>State: ${data.STATE}</p>
        `;
      })
      .catch(error=> console.error(error));
  }