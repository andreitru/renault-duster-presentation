const database = firebase.database();
const generateRandomString = () => Math.random().toString(36).substring(2, 15);
const form = document.querySelector('.form');
const formSection = document.querySelector('.form-section');
const inputName = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');

const id = getId();

function getId() {
  let id;
  if (localStorage.getItem('id') === null) {
    id = generateRandomString();
    formSection.style.display = 'block';
    document.body.classList.add('overflow');
  } else {
    id = localStorage.getItem('id').replace(/"/g, ``)
    document.body.classList.remove('overflow');
    formSection.style.display = 'none';
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
    updates['users/' + id + '/' + '/reEnterMs'] = time;
    updates['users/' + id + '/' + '/reEnterDate'] = date;
    firebase.database().ref().update(updates, (error) => {
      if (error) {
        console.log(error)
      } else {
      }
    })
  }

  writeUser(id, Date.now())
}

function submitForm(e) {
  e.preventDefault();
  document.body.classList.remove('overflow');
  window.scrollTo(pageXOffset, 0);

  const newUser = {
    id: id,
    loginMs: Date.now(),
    loginDate: new Date().toString(),
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

function closeTime(id, time) {
  let date = new Date().toString();
  const updates = {};
  updates['users/' + id + '/' + '/closeMs'] = time;
  updates['users/' + id + '/' + '/closeDate'] = date;
  return firebase.database().ref().update(updates)
}

function hideTime(id, time) {
  let date = new Date().toString();
  const updates = {};
  updates['users/' + id + '/' + '/hideMs'] = time;
  updates['users/' + id + '/' + '/hideDate'] = date;
  return firebase.database().ref().update(updates)
}

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
    closeTime(id, Date.now())
  } else {
    reEnter()
  }
}

if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}
