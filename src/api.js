async function fetchTodo(apiLink, id) {
  try {
    const response = await fetch(`${apiLink}/${id}`);
    const data = await response.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

//  function fetchTodo2(apiLink, id) {
//     fetch(`${apiLink}/${id}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
//   }

export default fetchTodo;
