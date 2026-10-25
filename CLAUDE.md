# Claude Instructions — Calculator App

You are assisting with development of Calculator App, a cross-platform calculator built around a shared HTML/CSS/JavaScript interface. Electron provides the desktop wrapper, and Flutter WebView provides the Android wrapper.

## Working Approach

- First understand the request and relevant project context. Read `README.md` and inspect only the files necessary for the task.
- Do not scan the entire repository or recursively inspect `mobile/` and `desktop/` by default. Explore those areas only when the requested implementation requires it.
- Determine whether a requested behavior belongs in the shared calculator UI, Electron desktop integration, or Flutter/WebView mobile integration.
- Prefer the existing implementation and patterns over adding new abstractions or duplicating logic.
- Keep the change minimal, focused, and consistent with the repository.

## Project-Specific Guidance

- Implement common calculator behavior in the shared web interface whenever practical so platform behavior remains aligned.
- Keep platform-specific APIs and configuration in their respective wrappers.
- Preserve responsive layout and existing visual conventions.
- Avoid unrelated refactors, formatting churn, and unnecessary dependencies.
- Do not assume build scripts, tests, or package commands exist; verify the relevant configuration first.
- Maintain security-conscious desktop and WebView behavior. Do not disable Electron context isolation, enable unsafe renderer privileges, or loosen navigation handling without a clear, justified need.
- Do not add secrets, local machine paths, or personal information to source control.

## Testing and Reporting

- Validate the affected functionality using the project's documented steps and available checks.
- For calculator changes, consider arithmetic operations, decimal handling, clearing/resetting, keyboard input where applicable, and responsive presentation.
- If platform testing is unavailable, state that limitation.
- In the final response, summarize the implementation, files changed, tests actually performed, and any remaining concerns.
