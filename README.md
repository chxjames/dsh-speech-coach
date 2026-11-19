# dsh-speech-coach

A DSH plugin that puts [speech-coach](https://www.npmjs.com/package/speech-coach) in your chat.

Say *"score ~/talks/rehearsal.mp4 as a competition talk"* and you get the same report the web page
downloads: a score out of 100, the findings ordered by points lost, a sentence-by-sentence table and the
transcript. Nothing is uploaded — the audio is decoded and transcribed on this machine.

## What it adds

| | |
|---|---|
| Tool | `mcp__speech-coach__analyze_speech` |
| Server | `npx -y speech-coach` (stdio) |
| Needs | Node 20+, a video file on disk |
| Network | the package and ~80 MB of Whisper weights on the first run, then nothing |

## Install

Install the bundle directory from Plugin Manager (the same operation is
`plugin_manager install_bundle` with this folder as the target). Windows is
wired up already (`cmd /c npx …`); on macOS or Linux edit the two lines in
`cordis.patch.yml` as the comment there says.

After installing, restart Harness once so the new MCP row is loaded — then the
tool shows up as `mcp__speech-coach__analyze_speech`.

## Use

> Analyse `E:\talks\rehearsal-final.mp4` as a 3MT contest talk at solid level and tell me the one thing to fix.

Useful arguments: `scene` (`homework`, `final`, `contest`, `interview`, `defense`, `pitch`), `level`
(`starter`, `solid`, `pro`), `format` (`camera`, `stage`), `lang` (`en`, `zh`), `content` and `composition`
(your own 0–100 scores for the two things a machine cannot judge).

## Notes

- The first tool call is slow: it installs the package and downloads the model. Later calls reuse both.
- Long talks: a 3-minute video takes about a minute on CPU. The bundle allows 30 minutes per call.
- This bundle only declares the connection; the engine and the scoring live in the published package.
