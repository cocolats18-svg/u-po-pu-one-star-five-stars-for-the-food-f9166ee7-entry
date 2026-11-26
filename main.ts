// One Star, Five Stars for the Food — program/v1 entrypoint.
// Writes one sentence (1-200 chars) to entry.txt: an alien tourist's
// one-star review of Earth that still compliments the food.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final line, written for this bounty: the alien is charged rent for the
// dirt it stands on and rained on without asking — but the tacos are so
// good it pays up, asks for the recipe, and nearly upgrades Earth to two
// stars. The turn plays on the one-star format itself.
const LINE =
  "One star: Earth charged me rent for the dirt I stood on, then rained on me without asking — but the tacos were so good I paid up, asked for the recipe, and nearly gave it two.";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace,
// on a single line. Fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
