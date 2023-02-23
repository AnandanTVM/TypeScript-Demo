import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todos = response.data as Todo;

  const id = todos.id;
  const title = todos.title;
  const completed = todos.completed;

  console.log(`
 
   Todo With ID :${id}
   Has a title of : ${title}
   Is it finished? ${completed}

   `);
});
