# Auto-Updater

Using this package you can directly copy and paste a directory while writing code.

## Installation

\```bash

npm install @afaeid/auto-updater

\```

## Usage

The CLI command is:

\```bash
npx auto-updater <command> [options]
\```

### Commands

#### `init`
Initializes Auto-Updater in the current directory.

\```bash
npx auto-updater init
\```

During initialization, you will be prompted for:

- **Executing directory**: destination directory where files are mirrored.
- **Exclude folders**: comma-separated folder/file patterns to skip.
- **Delay (ms)**: watch interval in milliseconds (default: `2000`).

This creates:
- `.auto-updater.config.json`
- `.auto-updater.records.json`

#### `run`
Starts synchronization and keeps watching for changes.

\```bash
npx auto-updater run
\```

Requires `.auto-updater.config.json` from `init`.

#### `reset`
Removes Auto-Updater setup files.

\```bash
npx auto-updater reset [option]
\```

Options:

- `--s` (default): remove config and record files only; keep mirrored directory.
- `--d`: remove config and record files and delete the mirrored directory.

### Typical workflow

1. `npx auto-updater init`
2. `npx auto-updater run`
3. (Optional cleanup) use `npx auto-updater reset --s` to keep mirrored files, or `npx auto-updater reset --d` to remove everything.


## License

MIT