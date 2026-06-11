# `@afaeid/auto-updater`

> **Real-time file-mirroring CLI** — write code in one directory, execute it in another, automatically.

![npm](https://img.shields.io/badge/npm-%40afaeid%2Fauto--updater-00ff9d?style=flat-square&logo=npm&logoColor=black)
![license](https://img.shields.io/badge/license-MIT-00cfff?style=flat-square)
![platform](https://img.shields.io/badge/platform-Node.js%20CLI-a855f7?style=flat-square&logo=nodedotjs&logoColor=white)
![env](https://img.shields.io/badge/built%20for-Termux%20%2F%20Android-00ff9d?style=flat-square)

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [init](#-init)
  - [run](#-run)
  - [reset](#-reset)
- [Typical Workflow](#typical-workflow)
- [Origin](#origin)
- [AI-Assisted Development](#ai-assisted-development)
- [License](#license)

---

## Features

### ⚡ Autonomous Synchronization
Once the `run` command is dispatched, the executing directory is updated **automatically and continuously** — no manual intervention required. The daemon persists until you consciously terminate it via `e` keypress or `Ctrl+C`.

### 🚀 High-Throughput Delta Propagation
Auto-Updater does not blindly re-copy entire trees. It detects **only the modified portions** of your source directory and propagates those targeted deltas to the mirror destination — making synchronization near-instantaneous even in large projects.

### 🔐 Permission-Preserving Mirroring
Beyond raw content, Auto-Updater faithfully replicates the **filesystem permission metadata** of every file it mirrors. Your executable bits, read/write flags, and ownership semantics survive the transfer intact — eliminating a common source of silent bugs in cross-environment workflows.

### 🎨 Chromatic Log Output
Every runtime event is rendered with **color-coded terminal output**. Info, warnings, sync events, and errors each carry a distinct visual signature — making it effortless to scan log streams at a glance rather than parsing monochrome walls of text.

### 📁 Selective Exclusion Patterns
Define comma-separated exclusion patterns at initialization time. Auto-Updater performs **substring-level pattern matching** — any file or directory whose name contains a matched token (e.g. `.git`, `node_modules`) is silently skipped, keeping your mirror lean.

### 🛡️ Idempotent Bootstrap
Running `init` on an already-initialized directory is safe. Configuration artifacts are generated deterministically, and the **first full mirror snapshot** is produced immediately on init — so your executing directory is in sync from the very first moment.

### 🔄 Configurable Watch Interval
Dial in the polling frequency to balance responsiveness against system resource consumption. The watch interval is persisted in the config file and can be tuned per-project without re-running init from scratch.

---

## Installation

Install as a **local project dependency**:

```bash
npm install @afaeid/auto-updater
```

Or install **globally** to invoke from any directory without `npx`:

```bash
npm i -g @afaeid/auto-updater
```

---

## Usage

```bash
# Local installation
npx auto-updater <command> [options]

# Global installation
auto-updater <command> [options]
```

---

### ▶ `init`

Bootstraps Auto-Updater in the **current working directory**. The directory from which you invoke `init` is automatically designated as the **mirror source** — ensure you are inside the directory you intend to replicate before running this command.

```bash
npx auto-updater init

# Global
auto-updater init
```

> **⚠ Important:** Always run `init` from *inside* the source directory you want to mirror.

During initialization, you will be interactively prompted for the following parameters:

| Parameter | Description | Default |
|---|---|---|
| **Executing directory** | Destination path where files are mirrored. Accepts a relative path (resolved from the source) or an absolute path. | _(required)_ |
| **Exclude patterns** | Comma-separated names or substrings to omit from mirroring (e.g. `.git,node_modules`). Matches partial names. | _(optional)_ |
| **Watch interval (ms)** | Polling delay in milliseconds between synchronization cycles. | `2000` |

**Artifacts generated on init:**

```
.auto-updater.config.json   ← serialized configuration
.auto-updater.records.json  ← file-state registry for delta detection
<executing-directory>/      ← initial full mirror snapshot
```

---

### ▶ `run`

Dispatches the **synchronization daemon** — continuously polls the source directory, detects mutations, and propagates deltas to the mirror destination. The process remains alive until terminated.

```bash
npx auto-updater run

# Global
auto-updater run
```

**Termination signals:**

- Press `e` — graceful shutdown
- Press `Ctrl+C` — interrupt signal (`SIGINT`)

> Requires a valid `.auto-updater.config.json` produced by `init`.

---

### ▶ `reset`

Tears down the Auto-Updater configuration. Two teardown modes are available:

```bash
npx auto-updater reset --s   # Soft teardown  — preserve mirror, remove config
npx auto-updater reset --d   # Full purge     — remove config and destroy mirror

# Global
auto-updater reset [--s | --d]
```

| Flag | Behaviour |
|---|---|
| `--s` _(default)_ | Removes `.auto-updater.config.json` and `.auto-updater.records.json`. The mirrored directory and its contents are **preserved**. |
| `--d` | Removes config, records, **and permanently deletes** the mirror directory. |

---

## Typical Workflow

```
1.  cd into your source directory
2.  npx auto-updater init       ← configure mirror target & generate snapshot
3.  npx auto-updater run        ← start the sync daemon
        │
        │  [ write code in SPCK / any editor ]
        │  [ changes propagate automatically  ]
        │
4.  Press e or Ctrl+C           ← terminate the daemon
5.  npx auto-updater reset --s  ← soft teardown (or --d for full purge)
```

---

## Origin

The requirement for this tool emerged from a concrete constraint: during an attempt to scaffold an Angular project, installation collapsed because **SPCK Editor** — the local mobile editor in use — does not support symbolic links. This rendered the standard `node_modules` resolution mechanism non-functional within the editor's sandboxed filesystem.

The desired development loop was:

```
[ Write code in SPCK Editor ]       ← no node_modules present
          │
          │  auto-updater mirrors changes in real time
          ▼
[ Project directory in Termux ]     ← node_modules intact, deps resolved
          │
          ▼
[ Execute & test from Termux ]      ← runtime environment is separate
```

Auto-Updater was built precisely to bridge that gap — decoupling the **authoring environment** from the **execution environment** without any manual file transfer.

---

## AI-Assisted Development

AI tooling was used as a development accelerator — not as a primary author. All logic, architecture, and design decisions were made by the developer.

| Tool | Role |
|---|---|
| **Claude** | Diagnosing unexpected runtime errors and edge-case bugs |
| **Claude** | Supplying technical context on unfamiliar Node.js APIs required during implementation |
| **GitHub Copilot** | Drafting the initial *Usage* section of this README — subsequently reviewed and revised by the author |
| **Claude** | Designing and authoring the final README layout, structure, and documentation |

---

## License

```
MIT License — free to use, modify, and distribute.
```

---

<div align="center">

`@afaeid/auto-updater` &nbsp;·&nbsp; built for Termux &nbsp;·&nbsp; MIT

</div>
