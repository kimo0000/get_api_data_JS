// Get WITH FETCH METHODE:
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((Error) => console.log(Error.message, "Error 401"));

// Get WITH ASYNC METHODE:
// async function get() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log(data);
// }

// get().catch((Error) => console.log(Error.message, "Error 401"))

// Get WITH ASYNC METHODE:
const users = document.querySelector(".root_table");
axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res.data)
    const data = res.data;
    users.innerHTML = data.map((user) => 
        `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.website}</td>
        </tr>
      `
      )
      .join("");
  });


// SHOW DATA IN BROWSER:


