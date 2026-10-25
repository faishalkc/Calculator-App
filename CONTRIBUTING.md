# Contributing to Calculator App

Thank you for your interest in contributing to Calculator App! Contributions such as bug reports, documentation improvements, and focused fixes are welcome.

Calculator App uses a shared web-based calculator interface built with HTML, CSS, and JavaScript. It is packaged for desktop with Electron and for Android with Flutter WebView. Please keep this shared-interface approach in mind when proposing or implementing changes.

## Before You Start

- Check the existing [issues](https://github.com/faishalkc/Calculator-App/issues) to see whether the problem or proposal has already been reported.
- For substantial changes, open an issue first to discuss the approach.
- Keep contributions focused and avoid unrelated refactoring.
- Do not include generated build output, dependency directories, or personal configuration files in a pull request.

## Reporting Bugs

When opening a bug report, include as much relevant information as possible:

- A clear description of the problem and the expected behavior.
- Steps to reproduce the issue.
- The affected platform (Windows desktop or Android) and relevant version details.
- Screenshots, logs, or error messages, when helpful.

Please avoid including sensitive or personal information in reports.

## Suggesting Features

Feature suggestions should explain:

- The use case or problem the feature addresses.
- The expected behavior.
- Whether it affects the shared calculator interface, the desktop wrapper, or the mobile wrapper.

Suggestions that preserve a consistent experience across supported platforms are especially helpful.

## Development Workflow

1. Fork the repository.
2. Create a descriptive branch from the default branch, for example:
   - `fix/decimal-input`
   - `feat/keyboard-shortcuts`
   - `docs/update-installation`
3. Make your changes in the relevant part of the project.
4. Test the change on the platform or platforms it affects.
5. Commit your work with a concise, descriptive message.
6. Open a pull request against the repository's default branch.

## Project-Specific Guidelines

- **Shared calculator behavior:** When changing arithmetic or input behavior, work in the shared web interface where possible so desktop and mobile remain consistent.
- **Platform-specific behavior:** Keep Electron-specific changes in the desktop wrapper and Flutter/WebView-specific changes in the mobile wrapper.
- **Interface:** Preserve the responsive layout and the existing lightweight design.
- **Electron security:** Do not weaken the existing security configuration without a clear technical reason. Avoid enabling Node.js integration in renderer content, disabling context isolation, or allowing untrusted navigation.
- **Dependencies:** Add or update dependencies only when necessary. Explain the reason in the pull request.
- **Scope:** Avoid changing unrelated files or reformatting large sections without need.

## Testing

There may not be an automated test suite for every part of the application. At minimum, verify the behavior affected by your change.

For calculator-interface changes, check relevant cases such as:

- Addition, subtraction, multiplication, and division.
- Decimal input and clearing/reset behavior.
- Keyboard input on desktop, when applicable.
- Responsive layout and dark mode.
- The affected wrapper's launch and display behavior.

If you cannot test on a particular platform, state that clearly in your pull request rather than implying that it was tested.

## Pull Request Checklist

Before submitting a pull request, please make sure that:

- [ ] The change addresses the issue or clearly explains its purpose.
- [ ] The implementation is focused and consistent with the project structure.
- [ ] Relevant behavior has been tested.
- [ ] No build artifacts, secrets, or unrelated files are included.
- [ ] The pull request description summarizes the changes and testing performed.

Thank you for helping improve Calculator App!
