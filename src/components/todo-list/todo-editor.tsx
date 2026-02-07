import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createTodo } from "@/api/create-todo";
import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutation";

const TodoEditor = () => {
	const { mutate, isPending } = useCreateTodoMutation();
	const [content, setContent] = useState("");

	const handleAddClick = () => {
		if (content.trim() === "") return;
		mutate(content);
		setContent("");
	};

	return (
		<div className="flex gap-2">
			<Input
				placeholder="새로운 할 일을 입력하세요"
				onChange={(e) => setContent(e.target.value)}
			/>
			<Button onClick={handleAddClick} disabled={isPending}>
				추가
			</Button>
		</div>
	);
};

export default TodoEditor;
