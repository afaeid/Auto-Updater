<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>@afaeid/auto-updater</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  :root {
    --bg:       #060b10;
    --surface:  #0c1520;
    --panel:    #0f1e2e;
    --border:   #1a3045;
    --green:    #00ff9d;
    --cyan:     #00cfff;
    --purple:   #a855f7;
    --dim:      #4a7a9b;
    --text:     #c8dce8;
    --muted:    #587a95;
    --glow-g:   0 0 18px rgba(0,255,157,0.35);
    --glow-c:   0 0 18px rgba(0,207,255,0.35);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    line-height: 1.7;
    background-image:
      linear-gradient(rgba(0,207,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,207,255,0.025) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  /* ── HEADER ── */
  header {
    position: relative;
    overflow: hidden;
    padding: 72px 24px 56px;
    text-align: center;
    border-bottom: 1px solid var(--border);
  }
  header::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,157,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .badge-row {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 28px;
  }
  .badge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    padding: 4px 12px;
    border-radius: 3px;
    border: 1px solid;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .badge-green  { color: var(--green);  border-color: rgba(0,255,157,0.4);  background: rgba(0,255,157,0.06); }
  .badge-cyan   { color: var(--cyan);   border-color: rgba(0,207,255,0.4);  background: rgba(0,207,255,0.06); }
  .badge-purple { color: var(--purple); border-color: rgba(168,85,247,0.4); background: rgba(168,85,247,0.06); }

  .pkg-name {
    font-family: 'JetBrains Mono', monospace;
    font-size: clamp(28px, 6vw, 52px);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 10px;
  }
  .pkg-name .scope { color: var(--dim); }
  .pkg-name .name  { color: var(--green); text-shadow: var(--glow-g); }

  .tagline {
    font-size: clamp(14px, 2.5vw, 18px);
    color: var(--muted);
    font-weight: 400;
    max-width: 520px;
    margin: 0 auto 32px;
  }

  .terminal-preview {
    display: inline-block;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 14px 20px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: var(--cyan);
    text-shadow: var(--glow-c);
    box-shadow: 0 0 30px rgba(0,207,255,0.08);
  }
  .terminal-preview .prompt { color: var(--green); margin-right: 8px; }

  /* ── LAYOUT ── */
  .container {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ── SECTIONS ── */
  section { padding: 56px 0; border-bottom: 1px solid var(--border); }
  section:last-child { border-bottom: none; }

  .section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--green);
    text-shadow: var(--glow-g);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(0,255,157,0.3), transparent);
    max-width: 120px;
  }

  h2 {
    font-size: clamp(20px, 4vw, 28px);
    font-weight: 600;
    color: #e2eef8;
    margin-bottom: 24px;
    letter-spacing: -0.01em;
  }

  h3 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    font-weight: 600;
    color: var(--cyan);
    text-shadow: var(--glow-c);
    margin: 32px 0 12px;
    padding-left: 12px;
    border-left: 2px solid var(--cyan);
    letter-spacing: 0.04em;
  }

  p { color: var(--text); margin-bottom: 14px; }
  p:last-child { margin-bottom: 0; }

  /* ── CODE BLOCKS ── */
  .code-block {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
    margin: 16px 0;
  }
  .code-block-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    background: var(--panel);
    border-bottom: 1px solid var(--border);
  }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-r { background: #ff5f57; }
  .dot-y { background: #febc2e; }
  .dot-g { background: #28c840; }
  .code-block pre {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    padding: 16px 20px;
    overflow-x: auto;
    color: var(--cyan);
    line-height: 1.65;
  }
  .code-block pre .cmd  { color: var(--green); }
  .code-block pre .flag { color: var(--purple); }
  .code-block pre .cmt  { color: var(--muted); font-style: italic; }

  /* inline code */
  code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85em;
    background: rgba(0,207,255,0.08);
    border: 1px solid rgba(0,207,255,0.18);
    border-radius: 3px;
    padding: 1px 6px;
    color: var(--cyan);
  }

  /* ── INSTALL TABS ── */
  .install-tabs { display: flex; gap: 8px; margin-bottom: 0; }
  .install-tab {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    padding: 6px 16px;
    border: 1px solid var(--border);
    border-radius: 4px 4px 0 0;
    cursor: default;
    color: var(--muted);
    background: var(--panel);
  }
  .install-tab.active {
    color: var(--green);
    border-color: rgba(0,255,157,0.35);
    background: rgba(0,255,157,0.06);
    text-shadow: var(--glow-g);
    border-bottom-color: var(--surface);
  }
  .install-block { border-top-left-radius: 0; }

  /* ── COMMAND CARDS ── */
  .cmd-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 22px 24px;
    margin-bottom: 16px;
    position: relative;
    transition: border-color 0.2s;
  }
  .cmd-card:hover { border-color: rgba(0,207,255,0.3); }
  .cmd-card::before {
    content: attr(data-cmd);
    position: absolute;
    top: -1px; right: 16px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    padding: 3px 10px;
    background: var(--bg);
    border: 1px solid var(--border);
    border-top: none;
    border-radius: 0 0 4px 4px;
    color: var(--muted);
    text-transform: uppercase;
  }
  .cmd-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 18px;
    font-weight: 700;
    color: var(--green);
    text-shadow: var(--glow-g);
    margin-bottom: 8px;
  }
  .cmd-desc { color: var(--text); font-size: 14px; margin-bottom: 16px; }

  /* ── PROMPT LIST ── */
  .prompt-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 16px 0;
  }
  .prompt-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 12px 16px;
    font-size: 14px;
  }
  .prompt-icon {
    font-family: 'JetBrains Mono', monospace;
    color: var(--green);
    font-size: 12px;
    margin-top: 2px;
    flex-shrink: 0;
  }
  .prompt-label { font-weight: 600; color: #d0e8f8; margin-right: 6px; }
  .prompt-detail { color: var(--muted); }

  /* ── FILE ARTIFACTS ── */
  .artifact-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  .artifact {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 8px 14px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: var(--muted);
  }
  .artifact-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--cyan);
    box-shadow: 0 0 6px var(--cyan);
    flex-shrink: 0;
  }

  /* ── WORKFLOW ── */
  .workflow {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 16px;
  }
  .workflow-step {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    position: relative;
  }
  .workflow-step:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 17px;
    top: 36px;
    bottom: -20px;
    width: 1px;
    background: linear-gradient(var(--border), transparent);
  }
  .step-num {
    flex-shrink: 0;
    width: 36px; height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(0,255,157,0.35);
    background: rgba(0,255,157,0.06);
    display: flex; align-items: center; justify-content: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 700;
    color: var(--green);
    text-shadow: var(--glow-g);
    margin-top: 4px;
  }
  .step-body { padding-bottom: 28px; flex: 1; }
  .step-title { font-weight: 600; color: #d0e8f8; margin-bottom: 4px; font-size: 15px; }
  .step-sub { color: var(--muted); font-size: 13px; }

  /* ── RESET OPTIONS ── */
  .reset-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 12px;
  }
  @media (max-width: 540px) { .reset-grid { grid-template-columns: 1fr; } }
  .reset-card {
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 16px;
    background: var(--panel);
  }
  .reset-flag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px;
    font-weight: 700;
    color: var(--purple);
    margin-bottom: 6px;
  }
  .reset-desc { font-size: 13px; color: var(--muted); }

  /* ── ORIGIN STORY ── */
  .origin-block {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--green);
    border-radius: 0 6px 6px 0;
    padding: 22px 24px;
    font-size: 15px;
    color: var(--text);
    line-height: 1.75;
  }
  .origin-steps {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .origin-step {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 14px;
    color: var(--text);
  }
  .origin-step-n {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--cyan);
    margin-top: 3px;
    flex-shrink: 0;
  }

  /* ── AI CREDITS ── */
  .ai-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
  }
  .ai-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 12px 16px;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 5px;
    font-size: 14px;
  }
  .ai-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 3px;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .ai-claude { background: rgba(168,85,247,0.12); border: 1px solid rgba(168,85,247,0.3); color: var(--purple); }
  .ai-copilot { background: rgba(0,207,255,0.08); border: 1px solid rgba(0,207,255,0.25); color: var(--cyan); }

  /* ── LICENSE ── */
  .license-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    border: 1px solid rgba(0,255,157,0.3);
    border-radius: 4px;
    background: rgba(0,255,157,0.05);
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    color: var(--green);
    text-shadow: var(--glow-g);
  }

  /* ── FOOTER ── */
  footer {
    padding: 32px 24px;
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--dim);
    letter-spacing: 0.06em;
    border-top: 1px solid var(--border);
  }
  footer span { color: var(--green); }

  /* ── SCROLLBAR ── */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
</style>
</head>
<body>

<!-- ═══════════════ HEADER ═══════════════ -->
<header>
  <div class="badge-row">
    <span class="badge badge-green">npm package</span>
    <span class="badge badge-cyan">cli tool</span>
    <span class="badge badge-purple">file sync</span>
    <span class="badge badge-green">MIT license</span>
  </div>
  <div class="pkg-name">
    <span class="scope">@afaeid/</span><span class="name">auto-updater</span>
  </div>
  <p class="tagline">
    A real-time file-mirroring CLI — write code in one directory, execute it in another, automatically.
  </p>
  <div class="terminal-preview">
    <span class="prompt">$</span>npx auto-updater run
  </div>
</header>


<!-- ═══════════════ INSTALLATION ═══════════════ -->
<section>
  <div class="container">
    <div class="section-label">01 &nbsp; setup</div>
    <h2>Installation</h2>
    <p>Install as a local project dependency or as a globally accessible system command.</p>

    <div class="install-tabs">
      <div class="install-tab active">LOCAL</div>
      <div class="install-tab">GLOBAL</div>
    </div>
    <div class="code-block install-block">
      <div class="code-block-bar">
        <div class="dot dot-r"></div><div class="dot dot-y"></div><div class="dot dot-g"></div>
      </div>
      <pre><span class="cmd">npm install</span> @afaeid/auto-updater</pre>
    </div>

    <p style="margin-top:20px;">For global installation — invoke from any directory without <code>npx</code>:</p>
    <div class="code-block">
      <div class="code-block-bar">
        <div class="dot dot-r"></div><div class="dot dot-y"></div><div class="dot dot-g"></div>
      </div>
      <pre><span class="cmd">npm i -g</span> @afaeid/auto-updater</pre>
    </div>
  </div>
</section>


<!-- ═══════════════ USAGE ═══════════════ -->
<section>
  <div class="container">
    <div class="section-label">02 &nbsp; interface</div>
    <h2>Usage</h2>
    <p>The CLI entry point is <code>auto-updater</code>. Use <code>npx</code> for local installations or invoke directly if installed globally.</p>

    <div class="code-block">
      <div class="code-block-bar">
        <div class="dot dot-r"></div><div class="dot dot-y"></div><div class="dot dot-g"></div>
      </div>
      <pre><span class="cmt"># local</span>
<span class="cmd">npx</span> auto-updater &lt;command&gt; [options]

<span class="cmt"># global</span>
auto-updater &lt;command&gt; [options]</pre>
    </div>

    <!-- INIT -->
    <h3>init</h3>
    <div class="cmd-card" data-cmd="command">
      <div class="cmd-title">$ auto-updater init</div>
      <div class="cmd-desc">
        Bootstraps Auto-Updater in the current working directory. The current directory is
        automatically designated as the <strong>mirror source</strong> — run <code>init</code> from inside
        the directory you want to replicate.
      </div>
      <div class="code-block">
        <div class="code-block-bar">
          <div class="dot dot-r"></div><div class="dot dot-y"></div><div class="dot dot-g"></div>
        </div>
        <pre><span class="cmd">npx</span> auto-updater init
<span class="cmt"># or (global)</span>
auto-updater init</pre>
      </div>

      <p style="margin-top:16px; font-size:14px; color:var(--muted);">You will be interactively prompted for:</p>
      <div class="prompt-list">
        <div class="prompt-item">
          <span class="prompt-icon">›</span>
          <div>
            <span class="prompt-label">Executing directory</span>
            <span class="prompt-detail">— destination path where files are mirrored. Accepts relative (from source) or absolute paths.</span>
          </div>
        </div>
        <div class="prompt-item">
          <span class="prompt-icon">›</span>
          <div>
            <span class="prompt-label">Exclude patterns</span>
            <span class="prompt-detail">— comma-separated names or substrings to skip (e.g. <code>.git,node_modules</code>). Matches partial names.</span>
          </div>
        </div>
        <div class="prompt-item">
          <span class="prompt-icon">›</span>
          <div>
            <span class="prompt-label">Watch interval (ms)</span>
            <span class="prompt-detail">— polling delay in milliseconds. Default: <code>2000</code>.</span>
          </div>
        </div>
      </div>

      <p style="margin-top:16px; font-size:14px; color:var(--muted);">Generated artifacts:</p>
      <div class="artifact-row">
        <div class="artifact"><div class="artifact-dot"></div>.auto-updater.config.json</div>
        <div class="artifact"><div class="artifact-dot"></div>.auto-updater.records.json</div>
        <div class="artifact"><div class="artifact-dot" style="background:var(--green);box-shadow:0 0 6px var(--green)"></div>initial mirror snapshot</div>
      </div>
    </div>

    <!-- RUN -->
    <h3>run</h3>
    <div class="cmd-card" data-cmd="command">
      <div class="cmd-title">$ auto-updater run</div>
      <div class="cmd-desc">
        Initiates the synchronization daemon — continuously polls the source directory
        and propagates detected changes to the mirror destination. Requires a valid
        <code>.auto-updater.config.json</code> generated by <code>init</code>.
      </div>
      <div class="code-block">
        <div class="code-block-bar">
          <div class="dot dot-r"></div><div class="dot dot-y"></div><div class="dot dot-g"></div>
        </div>
        <pre><span class="cmd">npx</span> auto-updater run
<span class="cmt"># or (global)</span>
auto-updater run</pre>
      </div>
    </div>

    <!-- RESET -->
    <h3>reset</h3>
    <div class="cmd-card" data-cmd="command">
      <div class="cmd-title">$ auto-updater reset [option]</div>
      <div class="cmd-desc">
        Tears down the Auto-Updater configuration. Choose between a soft teardown
        (retaining the mirrored files) or a full purge (destroying the mirror as well).
      </div>
      <div class="code-block">
        <div class="code-block-bar">
          <div class="dot dot-r"></div><div class="dot dot-y"></div><div class="dot dot-g"></div>
        </div>
        <pre><span class="cmd">npx</span> auto-updater reset <span class="flag">--s</span>  <span class="cmt"># soft teardown</span>
<span class="cmd">npx</span> auto-updater reset <span class="flag">--d</span>  <span class="cmt"># full purge</span></pre>
      </div>
      <div class="reset-grid" style="margin-top:16px;">
        <div class="reset-card">
          <div class="reset-flag">--s <span style="color:var(--muted);font-size:11px;">(default)</span></div>
          <div class="reset-desc">Removes config and records files. Mirrored directory is preserved.</div>
        </div>
        <div class="reset-card">
          <div class="reset-flag">--d</div>
          <div class="reset-desc">Removes config and records files and permanently deletes the mirror directory.</div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════ WORKFLOW ═══════════════ -->
<section>
  <div class="container">
    <div class="section-label">03 &nbsp; workflow</div>
    <h2>Typical Workflow</h2>
    <div class="workflow">
      <div class="workflow-step">
        <div class="step-num">1</div>
        <div class="step-body">
          <div class="step-title">Initialize the mirror</div>
          <div class="step-sub"><code>npx auto-updater init</code></div>
        </div>
      </div>
      <div class="workflow-step">
        <div class="step-num">2</div>
        <div class="step-body">
          <div class="step-title">Start the sync daemon</div>
          <div class="step-sub"><code>npx auto-updater run</code></div>
        </div>
      </div>
      <div class="workflow-step">
        <div class="step-num">3</div>
        <div class="step-body">
          <div class="step-title">Clean up when done</div>
          <div class="step-sub">
            <code>npx auto-updater reset --s</code> to preserve mirrored files, or
            <code>npx auto-updater reset --d</code> to remove everything.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════ ORIGIN ═══════════════ -->
<section>
  <div class="container">
    <div class="section-label">04 &nbsp; origin</div>
    <h2>Why This Exists</h2>
    <div class="origin-block">
      <p>
        While setting up Angular, the installation collapsed — the local editor
        (<strong>SPCK Editor</strong>) does not support symlinks, rendering the standard
        <code>node_modules</code> structure unworkable. A bridge was needed: something that could
        continuously propagate source edits from the editor's sandboxed environment into
        the Termux execution context, without manual intervention.
      </p>
      <p style="margin-top:12px;">The target development loop became:</p>
      <div class="origin-steps">
        <div class="origin-step">
          <span class="origin-step-n">→</span>
          <span>Write source code inside <strong>SPCK Editor</strong> — no <code>node_modules</code> present.</span>
        </div>
        <div class="origin-step">
          <span class="origin-step-n">→</span>
          <span>Auto-Updater mirrors the changes in real time to the designated project directory in <strong>Termux</strong>.</span>
        </div>
        <div class="origin-step">
          <span class="origin-step-n">→</span>
          <span>Execute and test the code independently from within <strong>Termux</strong>.</span>
        </div>
      </div>
      <p style="margin-top:12px;">This package was built precisely to satisfy those constraints.</p>
    </div>
  </div>
</section>


<!-- ═══════════════ AI CREDITS ═══════════════ -->
<section>
  <div class="container">
    <div class="section-label">05 &nbsp; credits</div>
    <h2>AI-Assisted Development</h2>
    <p>AI tools were used as accelerators during development — not as authors.</p>
    <div class="ai-grid">
      <div class="ai-item">
        <span class="ai-label ai-claude">Claude</span>
        <span>Identifying and diagnosing unexpected runtime errors.</span>
      </div>
      <div class="ai-item">
        <span class="ai-label ai-claude">Claude</span>
        <span>Providing technical context and documentation on unfamiliar APIs required by the project.</span>
      </div>
      <div class="ai-item">
        <span class="ai-label ai-copilot">GitHub Copilot</span>
        <span>Drafting the initial <em>Usage</em> section of this README — subsequently reviewed and revised by the author.</span>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════ LICENSE ═══════════════ -->
<section>
  <div class="container">
    <div class="section-label">06 &nbsp; legal</div>
    <h2>License</h2>
    <p>Released as free and open-source software under the MIT License.</p>
    <div class="license-tag">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
      MIT LICENSE
    </div>
  </div>
</section>


<!-- ═══════════════ FOOTER ═══════════════ -->
<footer>
  <span>@afaeid/auto-updater</span> &nbsp;·&nbsp; MIT
</footer>

</body>
</html>
