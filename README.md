# Auto-Updater

A npm package using which you can directly copy and paste a directory while writing code.

## Installation

Inatall it locally

\```bash

npm install @afaeid/auto-updater

\```

or, you can also install it globally

\```bash

npm i -g @afaeid/auto-updater

\```

## Usage

The CLI command is:

\```bash
npx auto-updater <command> [options]
\```

or, if you installed it globally 

\```bash
auto-updater <command> [options]
\```

### Commands

#### `init`

Initializes Auto-Updater in the current directory.

> Important: You must run `init` inside the directory you want to mirror.  
> That current directory is automatically used as the mirror source.

\```bash
npx auto-updater init
\```

or, if you installed it globally 

\```bash
auto-updater init
\```

During initialization, you will be prompted for:

- **Executing directory**: destination directory where files are mirrored. You can provide either a relative path (from your current/source directory) or an absolute path.
- **Exclude folders**: comma-separated folder/file patterns to skip. (For example: `.git,node_modules`; This will exclide all the folders and files that contain the part of ".git" or "node_modules" or the name exactly)
- **Delay (ms)**: watch interval in milliseconds (default: `2000`).

This creates:
- `.auto-updater.config.json` (Contains informations of Configuration)
- The very first mirror on the certain directory (Executing Directory). This copies all the filles and folders initially.
- `.auto-updater.records.json` (Contains the records)

#### `run`

Starts synchronization and keeps watching for changes.

\```bash
npx auto-updater run
\```

or, if you installed it globally 

\```bash
auto-updater run
\```


Requires `.auto-updater.config.json` from `init`.

#### `reset`

Removes Auto-Updater setup files.

\```bash
npx auto-updater reset [option]
\```

or, if you installed it globally 

\```bash
auto-updater reset [option]
\```

Options:

- `--s` (default): remove config and record files only; keep mirrored directory.
- `--d`: remove config and record files and delete the mirrored directory.

### Typical workflow

1. `npx auto-updater init`
2. `npx auto-updater run`
3. (Optional cleanup) use `npx auto-updater reset --s` to keep mirrored files, or `npx auto-updater reset --d` to remove everything.


## AI usage

I used AIs as a helper. Here is it: 

1. Claude for identifying un expected errors
2. Claude for information that I didn't know but was reqiured to fulfill my project
3. Github Copilot Coding Agent for making the `Usage` section of this README.md file, though I edited it then.

## Why I made this? or, From where the plan came?

While I strated for Angular it crashed during installation as my local code editor (SPCK Editor) doesn't allow symlinks. So I was barely in need of somethimg that could contaniously update the files on the Termux automatically while writing codes in SPCK Editor. My plan was 

1. Write code in SPCK Editor (Where the node_modules folder will not exist)
2. Bear them to project folder in Termux
3. Execute the written code seperately in Termux

So, I made the package meeting those desires.

## License

MIT