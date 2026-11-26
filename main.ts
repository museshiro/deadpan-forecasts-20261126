import { mkdirSync, writeFileSync } from "node:fs";

const line = "In Lower Muckleberry, fog clears by noon, then returns for its afternoon shift.";

// Deadpan forecast for a city that does not exist: Lower Muckleberry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
