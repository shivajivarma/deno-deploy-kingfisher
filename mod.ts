import { existsSync, expandGlobSync, copy, copySync } from 'https://deno.land/std@0.95.0/fs/mod.ts';

for (const file of expandGlobSync('**')) {
  console.log("PATH" + file.path);
}
