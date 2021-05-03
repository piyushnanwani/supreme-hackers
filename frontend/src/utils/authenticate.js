export default function authenticate(username, password) {
  const body = { username, password };
  return fetch("http://localhost:3000/users/authenticate", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
}
