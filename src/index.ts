import { readdir, mkdir, rm } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { cwd } from 'process';
import Bluebird from 'bluebird';
import builder from './scripts/builder';

const main = async () => {
  try {
    const path = `${cwd()}/src/Projects/GoRentals`;
    const write_path = `${cwd()}/src/build`;

    if (existsSync(write_path)) {
      await rm(write_path, {
        recursive: true,
        force: true,
      });
    }

    await mkdir(write_path);

    const file_paths = (await readdir(path)).map((file_name) =>
      join(path, file_name)
    );

    await Bluebird.map(file_paths, async (path) => {
      const { default: config } = await import(path);
      await builder(write_path, config);
    });
  } catch (e) {
    console.error(e);
  }
};

main();
