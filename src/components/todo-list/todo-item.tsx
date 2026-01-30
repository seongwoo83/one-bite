import { Button } from "@/components/ui/button";
import { useDeleteTodos } from "@/store/todos";
import type { Todo } from "@/types";
const TodoItem = ({ id, content }: Todo) => {
	const deleteTodo = useDeleteTodos();
	const handleDeleteClick = () => {
		deleteTodo(id);
	};

	return (
		<div className="flex items-center justify-between border p-2">
			{content}
			<Button variant={"destructive"} onClick={handleDeleteClick}>
				삭제
			</Button>
		</div>
	);
};

export default TodoItem;
