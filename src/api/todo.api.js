import axios from "axios";

export async function fetchTodo() {
  let data = await axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=4")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
}
