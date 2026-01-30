import type { Todo } from "@/types";
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialState: { todos: Todo[] } = {
	todos: [],
};

const useTodosStore = create(
	immer(
		combine(initialState, (set) => ({
			actions: {
				createTodos: (content: string) => {
					set((state) =>
						state.todos.push({
							id: new Date().getTime(),
							content: content,
						}),
					);
				},
				deleteTodos: (targetId: number) => {
					set((state) => state.todos.filter((todo) => todo.id !== targetId));
				},
			},
		})),
	),
);

export const useTodos = () => {
	const todos = useTodosStore((store) => store.todos);
	return todos;
};
export const useCreateTodo = () => {
	const createTodo = useTodosStore((store) => store.actions.createTodos);
	return createTodo;
};
export const useDeleteTodos = () => {
	const deleteTodo = useTodosStore((store) => store.actions.deleteTodos);
	return deleteTodo;
};
