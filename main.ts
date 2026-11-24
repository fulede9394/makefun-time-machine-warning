import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Time machine warning: do not meet your past self.
const LINE =
  "WARNING: Do not meet your past self. He is insufferable, and he will ruin your timeline on purpose.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
