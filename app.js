// https://randomuser.me/api/portraits/${gender}/${number}.jpg
// randomuser is an API and we can get a portrait of a man or a women with some random number of photograph

const data = [
  {
    name: "William Johnson",
    age: 36,
    gender: "male",
    lookingfor: "female",
    location: "Boston, MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Miami, FL",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Rahmi Jogia",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Lynn, MA",
    image: "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    name: "Inna Woods",
    age: 28,
    gender: "female",
    lookingfor: "female",
    location: "San Franciso, CA",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  }
];

const profiles = profileIterator(data);

// Call first profile
// we want the first profile to be displayed automatically; the nextProfile() function does that, but we're going to call it manually first just so it loads the first profile
nextProfile();

// Next Event Listener
document.getElementById("next").addEventListener("click", nextProfile);

// Display Next Profile in UI
function nextProfile() {
  const currentProfile = profiles.next().value;

  // it gets undefined when there's no more profiles to iterate
  if(currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}
        </li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById("imageDisplay").innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles (so reload the page)
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false } :
      { done: true }
    }
  };
}