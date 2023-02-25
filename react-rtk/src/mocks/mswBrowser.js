import { setupWorker } from "msw";
import { mswHandlers } from "./mswHandler";
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...mswHandlers);
