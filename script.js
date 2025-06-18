document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form reload

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  })
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
