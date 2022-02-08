
//YOUR FIREBASE LINKS//

const firebaseConfig = {
  apiKey: "AIzaSyBLsv9r67Bs-445OUjdneOPO3sDtLrnY8c",
  authDomain: "test-d0faa.firebaseapp.com",
  databaseURL: "https://test-d0faa-default-rtdb.firebaseio.com",
  projectId: "test-d0faa",
  storageBucket: "test-d0faa.appspot.com",
  messagingSenderId: "694823813871",
  appId: "1:694823813871:web:ae47c7da7c245d278f911a",
  measurementId: "G-M9WPX976BN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// storing UN and RN //

  user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

//discuss in C97//
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

//discuss in C97//

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}































