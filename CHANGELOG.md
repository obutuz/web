# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/obudget/web/compare/v0.2.0...HEAD)

## [0.2.0](https://github.com/obudget/web/releases/tag/v0.2.0) - 2017-12-03 - [Diff](https://github.com/obudget/web/compare/v0.1.0...v0.2.0)

### Added

- This changelog. ([#20](https://github.com/obudget/web/pull/20))
- A favicon / logo for the site.
- Use GPL 3.0 as the license for this project.
- Add [Code of Conduct](CODE_OF_CONDUCT.md). ([#17](https://github.com/obudget/web/pull/17))
- Add [Contributing Guidelines](CONTRIBUTING.md). ([#17](https://github.com/obudget/web/pull/17))
- Add page for user registration. [#32](https://github.com/obudget/web/pull/32)
- Add page for creating new budget accounts. [#36](https://github.com/obudget/web/pull/36)
- Add page for viewing budget account information. [#40](https://github.com/obudget/web/pull/40)
- Add page for updating budget accounts. [#43](https://github.com/obudget/web/pull/43)
- Add button for deleting budget accounts. [#47](https://github.com/obudget/web/pull/47)
- Require users to be authenticated to view all pages except Sign In/Up. [#44](https://github.com/obudget/web/pull/44)
- Add page for viewing budget information. [#51](https://github.com/obudget/web/pull/51)
- Add page for creating new budgets. [#52](https://github.com/obudget/web/pull/52)
- Add page for updating budget information. [#53](https://github.com/obudget/web/pull/53)
- Add button for deleting budgets. [#54](https://github.com/obudget/web/pull/54)
- Add button for switching default/active budget. [#55](https://github.com/obudget/web/pull/55)

### Changed

- Switch UI framework to [Semantic UI](https://react.semantic-ui.com). ([#24](https://github.com/obudget/web/pull/24))
- Pass auth tokens to all Accounts endpoints now. ([#26](https://github.com/obudget/web/pull/26))
- Add headers to API response objects. [#31](https://github.com/obudget/web/pull/31)

### Fixed

- Fix the way we're passing auth tokens when signing out users. ([#26](https://github.com/obudget/web/pull/26))
- Force all saga functions to listen to actions more than once. [#42](https://github.com/obudget/web/pull/42)
- Fix pages not redirecting properly. [#44](https://github.com/obudget/web/pull/44)

## 0.1.0 - 2017-10-14

### Added

- This project.
- Use [Material UI](https://material-ui-next.com) as the foundation for OpenBudget's UI.
- Add the basic layout for the app.
- Connect this project to OpenBudget Core's API.
- Allow users to authenticate in the app.
- Add Accounts List page
