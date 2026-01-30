import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateTodo } from "@/store/todos";

const TodoEditor = () => {
	const [content, setContent] = useState("");
	const createTodo = useCreateTodo();

	const handleAddClick = () => {
		if (content.trim() === "") return;
		createTodo(content);
		setContent("");
	};

	return (
		<div className="flex gap-2">
			<Input
				placeholder="새로운 할 일을 입력하세요"
				onChange={(e) => setContent(e.target.value)}
			/>
			<Button onClick={handleAddClick}>추가</Button>
		</div>
	);
};

export default TodoEditor;
