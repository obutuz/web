# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/obudget/ui/compare/v0.1.0...HEAD)

### Added

- This changelog. ([#20](https://github.com/obudget/ui/pull/20))
- A favicon / logo for the site.
- Use GPL 3.0 as the license for this project.
- Add [Code of Conduct](CODE_OF_CONDUCT.md). ([#17](https://github.com/obudget/ui/pull/17))
- Add [Contributing Guidelines](CONTRIBUTING.md). ([#17](https://github.com/obudget/ui/pull/17))
- Add page for user registration. [#32](https://github.com/obudget/ui/pull/32)
- Add page for creating new budget accounts. [#36](https://github.com/obudget/ui/pull/36)

### Changed

- Switch UI framework to [Semantic UI](https://react.semantic-ui.com). ([#24](https://github.com/obudget/ui/pull/24))
- Pass auth tokens to all Accounts endpoints now. ([#26](https://github.com/obudget/ui/pull/26))
- Add headers to API response objects. [#31](https://github.com/obudget/ui/pull/31)

### Fixed

- Fix the way we're passing auth tokens when signing out users. ([#26](https://github.com/obudget/ui/pull/26))

## 0.1.0 - 2017-10-14

### Added

- This project.
- Use [Material UI](https://material-ui-next.com) as the foundation for OpenBudget's UI.
- Add the basic layout for the app.
- Connect this project to OpenBudget Core's API.
- Allow users to authenticate in the app.
- Add Accounts List page
