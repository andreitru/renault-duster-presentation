const firebaseConfig = {
  apiKey: "AIzaSyAWjhrOA-GS6LPx8luMcE8KCbH7aYCr4oY",
  authDomain: "broadcast-1701e.firebaseapp.com",
  databaseURL: "https://broadcast-1701e-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "broadcast-1701e",
  storageBucket: "broadcast-1701e.appspot.com",
  messagingSenderId: "844755586030",
  appId: "1:844755586030:web:c41bc1585f41cf20549cff"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const generateRandomString = () => Math.random().toString(36).substring(2, 15);
const form = document.querySelector('.form');
const inputName = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');
// const checkbox = document.querySelector('input[name="checkbox"]');
// const formButton = document.querySelector('.form__button');
const id = getId();

function getId() {
  let id;
  if (localStorage.getItem('id') === null) {
    id = generateRandomString();
  } else {
    id = localStorage.getItem('id').replace(/"/g, ``)
    document.querySelector('.form-section').style.display = 'none';
    setTimeout(() => {
      reEnter()
    }, 0)
  }
  return id;
}

form.addEventListener('submit', (e) => submitForm(e))

function reEnter() {

  function writeUser(id, time) {
    let date = new Date().toString();
    const updates = {};
    updates['users/' + id + '/' + '/timeReEnterMs'] = time;
    updates['users/' + id + '/' + '/timeReEnterDate'] = date;
    firebase.database().ref().update(updates, (error) => {
      if (error) {
        console.log(error)
      } else {
        // inputName.value = ''
        // inputMiddleName.value = ''
        // inputSurname.value = ''
        // inputCompany.value = ''
        // inputEmail.value = ''
        // video.classList.add('show');
        // reEnterBtn.classList.remove('show');
      }
    })
  }

  writeUser(id, Date.now())
}

function submitForm(e) {
  e.preventDefault();

  const newUser = {
    id: id,
    timeStartMs: Date.now(),
    timeStartDate: new Date().toString(),
    name: inputName.value,
    email: inputEmail.value,
  }

  function writeUser(id, user) {
    const updates = {};
    updates['users/' + user.id] = user;
    firebase.database().ref().update(updates, (error) => {
      if (error) {
        console.log(error)
      } else {
        localStorage.setItem('id', JSON.stringify(id))
        document.querySelector('.form-section').style.display = 'none';
      }
    })
  }

  writeUser(newUser.id, newUser)
}

firebase.auth().signInAnonymously()
  .then(() => {
    console.log('signed in')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });

function updateTime(id, time) {
  let date = new Date().toString();
  const updates = {};
  updates['users/' + id + '/' + '/timeEndMs'] = time;
  updates['users/' + id + '/' + '/timeEndDate'] = date;
  return firebase.database().ref().update(updates)
}

// let time = setInterval(() => updateTime(id, Date.now()), 10000)
window.addEventListener('unload', function () {
  updateTime(id, Date.now())
})

// window.addEventListener('blur', function () {
//   // clearInterval(time)
//   updateTime(id, Date.now())
//
// })
//
// window.addEventListener('focus', function () {
//    if (!document.hidden) reEnter()
//   // let newDate = setInterval(() => updateTime(id, Date.now()), 10000)
// })

// document.querySelector('.form__button').addEventListener('click', function (e) {
//   e.preventDefault();
//   document.querySelector('.form-section').style.display = 'none';
// })


// Set the name of the hidden property and the change event for visibility
let hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}



function handleVisibilityChange() {
  if (document[hidden]) {
    updateTime(id, Date.now())
  } else {
    reEnter()
  }
}

if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}
