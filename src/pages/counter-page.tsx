import { useCountStore } from "@/store/count";
import { Button } from '@/components/ui/button';

const CounterPage = () => {
	const { count, increase, decrease } = useCountStore();

	return (
		<div>
			<h1>Counter</h1>
            <div>{count}</div>
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
		</div>
	);
};

export default CounterPage;
