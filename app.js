const data = [
    {
        name : "John Doe",
        age : 30,
        gender : "Male",
        lookingFor : "Female",
        location : "Boston MA",
        image : "https://randomuser.me/api/portraits/men/82.jpg"
    },
    {
        name : "Jane smith",
        age : 23,
        gender : "Female",
        lookingFor : "Male",
        location : "Miami FL",
        image : "https://randomuser.me/api/portraits/women/82.jpg"
    },
    {
        name : "William Johnson",
        age : 35,
        gender : "Male",
        lookingFor : "Female",
        location : "Lynn MA",
        image : "https://randomuser.me/api/portraits/men/83.jpg"
    }
];

const profiles = profileIterator(data)

//Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next : function(){
            return nextIndex < profiles.length ? 
            {value : profiles[nextIndex++], done : false} :
            {done : true}
        }
    }
}

//CAll first Profile
nextProfile()

// Next Btn Event
document.getElementById("next").addEventListener("click" , nextProfile)

// Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;

   if(currentProfile !== undefined){
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
       <li class="list-group-item">Name : ${currentProfile.name}</li>
       <li class="list-group-item">Age : ${currentProfile.age}</li>
       <li class="list-group-item">Location : ${currentProfile.location}</li>
       <li class="list-group-item">Prefrence : ${currentProfile.gender} Looking For ${currentProfile.lookingFor}</li>         
    </ul>
 `;

 document.getElementById("imageDisplay").innerHTML = `
     <img src = "${currentProfile.image}">
 `;
   }else{
    window.location.reload()
    
   }
}


