# Gemini Instructions — Calculator App

## Project Overview

Calculator App is a multi-platform calculator application. The main calculator experience is implemented using shared web technologies (HTML, CSS, and JavaScript). The project uses Electron for desktop and Flutter WebView for Android.

## Instructions for Repository Work

1. Understand the user's requested outcome before editing.
2. Review `README.md` and the specific source/configuration files relevant to the task.
3. Limit exploration to what is necessary. Do not inspect the full repository or the contents of `mobile/` and `desktop/` unless the requested work calls for it.
4. Locate the correct layer: shared web interface for common calculator behavior; desktop wrapper for Electron-specific behavior; mobile wrapper for Flutter/WebView-specific behavior.
5. Follow existing conventions and keep changes narrow.

## Coding Principles

- Prefer shared implementation for behavior that should match across platforms.
- Preserve the current UI, responsive behavior, and user interaction patterns.
- Avoid unnecessary duplication, broad refactoring, or adding dependencies without a clear reason.
- Verify available scripts, build commands, and test coverage before using or recommending them.
- Maintain secure configuration for Electron and WebView. Do not weaken isolation or navigation controls without a specific technical justification.
- Treat input and external content as untrusted. Do not expose secrets or sensitive data.

## Verification

- Run appropriate checks documented by the project.
- Manually test relevant calculator behavior when practical, such as basic arithmetic, decimal entry, clear/reset, keyboard input on desktop, and responsive layout.
- Verify the affected platform wrapper when feasible.
- Clearly distinguish completed tests from checks that were not run.

## Response Expectations

When finishing a task, provide a concise summary of the changes, the files touched, validation performed, and any limitations or follow-up items.
