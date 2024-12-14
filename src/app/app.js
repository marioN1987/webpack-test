import { AdditionComponent } from "../services/AdditionComponent";
import { parseInputs } from "./utils/parse-inputs";

const addComp = new AdditionComponent();

export const run = () => {
    addComp.clickEvent(() => {
        const inputs = parseInputs(addComp.getInputs());
        const res = addComp.getResult(inputs);
        addComp.showResult(res);
    });
}
