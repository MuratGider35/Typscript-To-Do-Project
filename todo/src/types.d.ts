interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}
interface ITodoList {
  todos: TodoType[];
}
interface IListItem {
  item: TodoType;
}
type AddFn = (text: string) => void;
