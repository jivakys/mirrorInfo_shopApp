if (localStorage.getItem("userName") == null || "") {
  alert("Please Login First");
  window.location.href = "index.html";
}

let container = document.getElementById("container");
let token = localStorage.getItem("token");

document.getElementById("nav").addEventListener("click", () => {
  window.location.href = "index.html";
});

document.querySelector("#login").textContent =
  "Hello," + " " + localStorage.getItem("userName");

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    let totalProds = data.length;
    document.getElementById("total").textContent = totalProds;
    data.forEach((e) => {
      let divs = document.createElement("div");
      divs.setAttribute("class", "tasksdiv");

      let name = document.createElement("h4");
      name.setAttribute("class", "taskName");
      name.textContent = "Title -" + " " + e.title;

      let description = document.createElement("p");
      description.setAttribute("class", "taskDesc");
      description.textContent = "Description -" + " " + e.description;

      let status = document.createElement("p");
      status.setAttribute("class", "taskStatus");
      status.textContent = "Status -" + " " + e.status;

      let id = document.createElement("p");
      id.setAttribute("class", "taskId");
      id.textContent = "TaskID -" + " " + e._id;

      divs.append(name, description, status, id);
      container.append(divs);
    });
  }
};
xhr.open(
  "GET",
  "https://pleasant-pig-hospital-gown.cyclic.app/tasks/dashboard"
);
xhr.setRequestHeader("Authorization", `${token}`);
xhr.send();

let dash = document.querySelector("#dash");
let add = document.querySelector("#add");
let update = document.querySelector("#update");
let dlt = document.querySelector("#dlt");

let dashD = document.querySelector("#dashboard");
let addD = document.querySelector("#addProduct");
let updateD = document.querySelector("#updateProduct");
let dltD = document.querySelector("#deleteProduct");

dash.addEventListener("click", () => {
  if (dashD.style.display === "none") {
    addD.style.display = "none";
    dashD.style.display = "block";
    updateD.style.display = "none";
    dltD.style.display = "none";
  } else {
    dashD.style.display === "none";
  }
});

add.addEventListener("click", () => {
  if (addD.style.display === "none") {
    addD.style.display = "block";
    dashD.style.display = "none";
    updateD.style.display = "none";
    dltD.style.display = "none";
  } else {
    addD.style.display === "none";
  }
});

update.addEventListener("click", () => {
  if (updateD.style.display === "none") {
    updateD.style.display = "block";
    addD.style.display = "none";
    dashD.style.display = "none";
    dltD.style.display = "none";
  } else {
    updateD.style.display === "none";
  }
});

dlt.addEventListener("click", () => {
  if (dltD.style.display === "none") {
    dltD.style.display = "block";
    dashD.style.display = "none";
    updateD.style.display = "none";
    addD.style.display = "none";
  } else {
    dltD.style.display === "none";
  }
});

let title = document.getElementById("title").value;
let description = document.getElementById("description").value;
let status = document.getElementById("status").value;

// add new product
const addProd = () => {
  const payload = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    status: document.getElementById("status").value,
  };
  fetch("https://pleasant-pig-hospital-gown.cyclic.app/tasks/addTask", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data=", data);
      alert("Task added successful!");
    })
    .catch((err) => console.log(err));
};

// update product
const updateAllProd = () => {
  const inputID = document.querySelector("#allId").value;
  const payload = {
    title: document.getElementById("allTitle").value,
    description: document.getElementById("allDescription").value,
    status: document.getElementById("allstatus").value,
  };
  fetch(
    `https://pleasant-pig-hospital-gown.cyclic.app/tasks/update/${inputID}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(payload),
    }
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// delete product
const deleteProd = () => {
  const inputID = document.querySelector(".id");

  fetch(
    `https://pleasant-pig-hospital-gown.cyclic.app/tasks/delete/${inputID.value}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `${token}`,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      alert("Task is Deleted");
    })
    .catch((err) => console.log(err));
};
