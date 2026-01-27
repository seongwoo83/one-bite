import { useCountStore } from "@/store/count";
import Viewer from "@/components/counter/viewer";
import Controller from "@/components/counter/controller";

const CounterPage = () => {
	return (
		<div>
			<h1>Counter</h1>
			<Viewer />
			<Controller />
		</div>
	);
};

export default CounterPage;
