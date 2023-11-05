import { setupWorker } from "msw/browser";
import { handlers } from "./browserHandlers";

export const worker = setupWorker(...handlers);
