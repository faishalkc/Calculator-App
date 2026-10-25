# AI Coding Instructions — Calculator App

## Project Context

Calculator App is a cross-platform calculator project. Its calculator interface is shared through web technologies (HTML, CSS, and JavaScript), with platform wrappers for desktop (Electron) and Android (Flutter WebView).

Keep work scoped to the user's request and to the relevant layer. The root repository documentation is in scope when requested; do not expand into detailed inspection of the `mobile/` or `desktop/` directories unless the task requires it.

## Before Making Changes

1. Read the relevant root documentation, especially `README.md`, to understand setup, structure, and expected behavior.
2. Inspect only the files needed for the requested change.
3. Identify whether the behavior belongs to the shared web interface or a platform wrapper.
4. Follow existing conventions and patterns. Do not introduce a new architecture or duplicate implementation without a clear reason.

## Implementation Guidelines

- Prefer shared-interface changes for calculator behavior that should be consistent across platforms.
- Keep Electron-specific implementation in the desktop layer and Flutter/WebView-specific implementation in the mobile layer.
- Preserve existing layout, responsive behavior, and established user interaction patterns.
- Keep changes focused; avoid unrelated refactoring, broad formatting changes, or repeated code.
- Do not add dependencies unless needed. Explain meaningful dependency changes.
- Do not invent commands, files, APIs, or project capabilities. Confirm them in the repository before relying on them.
- Preserve security-conscious Electron and WebView configuration. Do not weaken navigation restrictions or isolation settings without a demonstrated requirement and explicit rationale.
- Treat external content and user input as untrusted. Avoid exposing secrets or sensitive data in logs, commits, or documentation.

## Validation

- Run the checks or build steps documented by the project and relevant to the change.
- Manually verify affected calculator interactions when appropriate, including arithmetic, decimal input, clear/reset behavior, and keyboard behavior on desktop.
- Check responsive presentation and the platform wrapper affected by the change when feasible.
- Report what was tested and what could not be tested. Never claim a command or test passed unless it actually ran and succeeded.

## Completion

Summarize the changes, identify the files affected, and state the validation performed. Mention important limitations or follow-up work clearly.
