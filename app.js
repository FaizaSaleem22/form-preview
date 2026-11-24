function getDetails(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var myCard = document.getElementById("myCard")
    var form = document.getElementById("form")
    form.style.display="none"
    myCard.innerHTML=`
     <div class="id-card-wrapper">
     <div class="id-card">
       <div class="profile-row">
         <div class="dp">
         <div class="dp-arc-outer"></div>
         <div class="dp-arc-inner"></div>
        <img src="https://via.placeholder.com/420x420">
      </div>
      <div class="desc">
        <h1>Tony Stark</h1>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
      </div>
    </div>
  </div>
</div>

    
    `
}
