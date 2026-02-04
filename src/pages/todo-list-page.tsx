import { fetchTodos } from "@/api/fetch-todos";
import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/queries/useTodos.data";

const TodoListPage = () => {
	const { data: todos, isLoading, error } = useTodosData();

	if (error) return <div>오류 발생</div>;
	if (isLoading) return <div>로딩중입니다...</div>;

	return (
		<div className="flex flex-col gap-5 p-5">
			<div className="text-2xl font-bold">TodoList</div>
			<TodoEditor />
			{todos?.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} content={todo.content} />
			))}
		</div>
	);
};

export default TodoListPage;
