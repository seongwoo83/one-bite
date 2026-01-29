import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
const TodoListPage = () => {
	const dummyTodos = [
		{
			id: 1,
			content: "Todo 1",
		},
		{
			id: 2,
			content: "Todo 2",
		},
		{
			id: 3,
			content: "Todo 3",
		},
	];

	return (
		<div className="flex flex-col gap-5 p-5">
			<div className="text-2xl font-bold">TodoList</div>
			<TodoEditor />
			{dummyTodos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} content={todo.content} />
			))}
		</div>
	);
};

export default TodoListPage;
