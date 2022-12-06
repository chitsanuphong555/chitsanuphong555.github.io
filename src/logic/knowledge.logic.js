import { fetchTodo } from "../api/todo.api";

export async function finalFetchTodo() {
  let data = await fetchTodo();

  const final = data.map((item) => {
    if (item.title.indexOf("autem") > -1 || item.title.indexOf("minus") > -1) {
      return <p className="text-red-500">{item.title}</p>;
    } else {
      return <p className="text-blue-500">{item.title} test</p>;
    }
  });

  return final;
}
