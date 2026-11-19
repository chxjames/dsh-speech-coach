/**
 * Package entry — the smallest thing that makes this bundle a loadable package.
 *
 * Everything this plugin does lives in `cordis.patch.yml`: it inserts one row of
 * `@deepseek-ai/dsh-mcp-client` that launches the published `speech-coach`
 * server, and that row is what the harness loads. This file registers nothing
 * and starts nothing.
 *
 * It exists because a package without `main` (or with a `main` that exports no
 * plugin function) is treated as "has no entry", and the loader then fails the
 * row with `next is not a function` — which is exactly what happened the first
 * time this bundle was installed without it.
 */

/** Cordis plugin name. Also the package name, which is what the loader expects. */
export const name = 'dsh-speech-coach'

/**
 * Intentionally empty.
 *
 * The MCP row comes from the bundle patch, not from this function. Registering
 * it here as well would create a second `serverName: speech-coach` entry, and
 * the harness refuses a duplicate server name.
 */
export function apply() {}
