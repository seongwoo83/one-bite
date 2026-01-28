import { create } from "zustand";
import {
	combine,
	subscribeWithSelector,
	persist,
	createJSONStorage,
	devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Store = {
	count: number;
	actions: {
		increase: () => void;
		decrease: () => void;
	};
};

export const useCountStore = create(
	devtools(
		persist(
			// persist를 이용해 로컬스토리지에 저장하면 action함수는 저장되지 않음 -> action함수가 리셋되어 실행되지 않음
			// partialize를 사용해 특정 값만 저장해야 action함수가 작동
			subscribeWithSelector(
				immer(
					combine({ count: 0 }, (set, get) => ({
						actions: {
							increase: () => {
								set((state) => (state.count += 1));
							},
							decrease: () => {
								set((state) => (state.count -= 1));
							},
						},
					})),
				),
			),
			{
				name: "countStore",
				partialize: (store) => ({
					count: store.count,
				}),
				storage: createJSONStorage(() => sessionStorage),
			},
		),
		{
			name: "countStore",
		},
	),
);

// 구독한 값이 변경될 떄마다 리스너 함수를 호출
useCountStore.subscribe(
	(store) => store.count,
	(count, prevCount) => {
		//listener
		console.log(count, prevCount);
	},
);

// export const useCountStore = create<Store>((set, get) => ({
// 	count: 0,
// 	actions: {
// 		increase: () => {
// 			set((store) => ({
// 				count: store.count + 1,
// 			}));
// 		},
// 		decrease: () => {
// 			set((store) => ({
// 				count: store.count - 1,
// 			}));
// 		},
// 	},
// }));

export const useCount = () => {
	const count = useCountStore((store) => store.count);
	return count;
};

export const useIncreaseCount = () => {
	const increase = useCountStore((store) => store.actions.increase);
	return increase;
};

export const useDereaseCount = () => {
	const decrease = useCountStore((store) => store.actions.decrease);
	return decrease;
};
