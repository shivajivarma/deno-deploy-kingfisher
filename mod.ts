import { expandGlobSync } from 'https://deno.land/std@0.95.0/fs/mod.ts';

import * as path from "https://deno.land/std@0.57.0/path/mod.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

console.log(__dirname);

const ROOT_PATH = path.normalize(__dirname+ '/**');

for (const file of expandGlobSync(ROOT_PATH)) {
  console.log("PATH" + file.path);
}
