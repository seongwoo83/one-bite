import { Button } from "@/components/ui/button";
import {
	useCountStore,
	useDereaseCount,
	useIncreaseCount,
} from "@/store/count";

const Controller = () => {
	const increase = useIncreaseCount();
const decrease = useDereaseCount();

	return (
		<>
			<Button onClick={decrease}>-</Button>
			<Button onClick={increase}>+</Button>
		</>
	);
};

export default Controller;
