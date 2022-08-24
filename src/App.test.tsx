import {vi} from "vitest"
import * as hooks from "./hooks/usePokemonCount";
import {render} from "@testing-library/react";
import App from "./App";

describe('Dato che voglio sapere quanti pokemon esistono', function () {
    it('dovrebbe stampare il numero corretto ritornato dalle api', function () {
        vi.spyOn(hooks, "usePokemonCount").mockReturnValue(10)

        const {getByText} = render(<App />)

        expect(getByText("Esistono 10 pokemon attualmente")).toBeInTheDocument()
    });
}); 