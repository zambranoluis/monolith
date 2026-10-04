# Monolith

A static hub for independent Monolith concept versions. Monolith is a planned workspace for organizing work information that OpenJM can use to assist with real work. The hub links to [v01 — Common Thread](versions/v01/index.html), an independent brand proposal with reusable SVG assets. It does not implement the workspace or OpenJM integration.

## Run the hub

Open `index.html` directly in a browser. The hub has no dependencies, JavaScript requirement, or build step.

For an HTTP preview, use Python 3 from the repository root:

```powershell
python -m http.server 3300 --bind 127.0.0.1
```

Open `http://127.0.0.1:3300/`. Reuse a compatible existing preview when available; if the port belongs to another service, leave that service intact and choose an explicitly available port. Stop only a preview started for this work.

## Files and ownership

- `index.html`: hub introduction and concept directory.
- `styles.css`: styles used only by the hub.
- [PRODUCT.md](PRODUCT.md): confirmed workspace direction, hub purpose, constraints, and unresolved product decisions.
- [DESIGN.md](DESIGN.md): implemented hub design; its visual guidance applies only to the root hub.
- `.impeccable/config.json`: registers `versions/*` as independent project roots and records the hub's code-first build method.
- `.impeccable/design.json`: hub design metadata for Impeccable.
- [versions/v01/README.md](versions/v01/README.md): Common Thread presentation, local assets, provenance, and verification. Further `versions/vNN/` projects are created only when requested.
- `references/`: existing documents for other projects, not starting templates or approved Monolith requirements.
- [AGENTS.md](AGENTS.md): repository working agreement. Its routed `AGENTS/` documents are currently absent; this implementation does not recreate or revise that instruction system.

## Build an independent concept

1. Confirm the requested version's brief, product facts, design direction, stack, and build method. Do not infer an app purpose from the hub or another project's references.
2. Create the next unused directory (`versions/v01/` now exists). Keep its `index.html`, styles, scripts, assets, `PRODUCT.md`, and `DESIGN.md` together. Assets and scripts are added only as needed.
3. Write that folder's own product and design context before running design work. Both documents must explicitly define that concept's scope so Impeccable does not fall back to the root hub's context. Document unresolved material facts rather than adopting the hub's identity.
4. Start from scratch. Do not copy prior concepts, the hub's visual system, or existing reference work. Run the installed Impeccable workflow from the selected version folder with `--target index.html`. The root configuration registers `versions/*` using the resolver's `projectRoots` key. See the [Impeccable context resolver](https://github.com/pbakaus/impeccable/blob/engine-v0.1.5/crates/context/src/context.rs).
5. Record the version's independently chosen stack in its `PRODUCT.md` and build method in its own `.impeccable/config.json` (`"buildPath": "code"` or `"buildPath": "comp"`). Confirm this choice rather than treating the root hub's code-first value as a version default.
6. Include a normal return link to `../../index.html`, styled within that concept's identity. Keep the concept independently navigable with a real directory entry point and no client-side route dependency.
7. Once the concept page exists and is verified, replace the hub's empty state with a semantic list. Every entry shows the version number, concept name, short description, and ordinary link such as `./versions/v01/index.html`. Add only existing concepts; remove the empty message when the first entry is added.

Do not create empty concept folders, preview links, or placeholder identities in advance. The hub is a directory, not a shared component library or visual starter for versions.

## Paths and publishing

Keep hub assets relative (`./styles.css`), concept links relative (`./versions/vNN/index.html`), and concept assets local to their own folder. Avoid origin-root paths such as `/styles.css` or `/versions/v01/`, which bypass a GitHub Pages project's `/monolith/` prefix.

The repository-root `index.html` is the site entry point when the publishing source is the repository root. See [GitHub Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). No Pages configuration, commit, push, or deployment is included here; live publishing remains unverified.

## Lightweight verification

- View the hub at desktop and mobile sizes; check readable wrapping and absence of horizontal overflow.
- Tab through the skip link and navigation; activate both and confirm their targets and visible focus.
- Check that local asset and page URLs resolve, including under a simulated `/monolith/` prefix. No concept link should exist until its target exists.
- Inspect the diff and run `git diff --check`; include newly added files in the review.

No extensive test suite or CI is required for this static hub. Use one batched visual pass and a follow-up only if a finding requires correction.
