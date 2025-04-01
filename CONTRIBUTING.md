
# Contributing to PayStream

Thank you for considering contributing to PayStream! This document outlines the process for contributing to this project and helps make the contribution process straightforward and effective.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct, which ensures a harassment-free experience for everyone. We are committed to providing a welcoming and inspiring community for all.

## How Can I Contribute?

### Reporting Bugs

Before submitting a bug report:

1. Check if the bug has already been reported in our [Issues section](https://github.com/your-org/paystream/issues)
2. Use the bug report template when creating a new issue
3. Include detailed steps to reproduce the bug
4. Add information about your environment (browser, OS, version numbers)
5. Add screenshots if applicable
6. Describe expected behavior vs. actual behavior

Example bug report:

```md
**Bug Description**: Login button unresponsive on Safari mobile

**Steps to Reproduce**:
1. Navigate to login page on iOS Safari
2. Enter credentials
3. Tap login button
4. Observe button doesn't respond to tap

**Environment**:
- Browser: Safari
- OS: iOS 16.5
- Device: iPhone 13

**Screenshots**: [login_button_issue.png]

**Additional context**: Issue doesn't occur on Chrome mobile
```

### Suggesting Features

When suggesting a feature:

1. Check if the feature has already been suggested in our [Issues section](https://github.com/your-org/paystream/issues)
2. Use the feature request template
3. Explain how the feature would benefit most users
4. Consider including mockups or diagrams

Example feature suggestion:

```md
**Feature**: Recurring payment scheduler

**Problem it solves**: Users currently need to manually create the same payments repeatedly

**Proposed solution**: Add a scheduling interface that allows users to set up payments on daily, weekly, monthly or custom recurrence patterns

**Mockup**: [recurring_payment_mockup.png]

**Additional context**: Similar to how Google Calendar recurring events work
```

### Code Contributions

#### Development Workflow

1. Fork the repository
2. Create a new branch with a descriptive name:
   - `feature/feature-name` for new features
   - `fix/bug-name` for bug fixes
   - `docs/doc-change` for documentation changes
3. Make your changes following our coding standards
4. Run tests to ensure they pass
5. Commit with clear, descriptive messages following our commit message guidelines
6. Push to your fork
7. Open a Pull Request

#### Example Workflow

```bash
# Fork the repo on GitHub, then:
git clone https://github.com/your-username/paystream.git
cd paystream
git checkout -b feature/recurring-payments

# Make your changes...

# Run tests
npm test

# Commit changes
git commit -m "Add recurring payment scheduler feature"
git push origin feature/recurring-payments

# Then open a Pull Request on GitHub
```

#### Commit Message Guidelines

We follow a simplified version of the [Conventional Commits](https://www.conventionalcommits.org/) specification. Each commit message should have a clear structure:

```
type(scope): short description

longer description if necessary
```

Types include:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semi-colons, etc; no code change
- `refactor`: Refactoring production code
- `test`: Adding tests, refactoring test; no production code change
- `chore`: Updating build tasks, package manager configs, etc; no production code change

Example:
```
feat(payments): add recurring payment scheduler

- Adds UI for setting up recurring payments
- Implements backend logic for scheduling
- Adds notification system for upcoming payments
```

## Development Setup

1. Ensure you have Node.js (v14+) installed
2. Clone your fork of the repository
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server
5. Visit `http://localhost:5173` to see the application

### Project Structure

```
src/
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
├── pages/           # Application pages
└── main.tsx         # Application entry point
```

## Coding Standards

### JavaScript/TypeScript

- Use TypeScript for all new code
- Follow the existing code style
- Utilize proper type definitions
- Avoid `any` type unless absolutely necessary
- Document complex functions with JSDoc comments

### React Components

- Use functional components with hooks
- Keep components small and focused (under 300 lines)
- Use appropriate component composition
- Implement proper prop validation

### CSS/Styling

- Use Tailwind CSS for styling
- Follow the established design system
- Ensure responsive design across all components
- Test on multiple viewport sizes

### Testing

- Write tests for all new features
- Ensure existing tests pass
- Follow the established testing patterns

## Pull Request Process

1. Update documentation (README, inline docs) if needed
2. Include tests for new functionality
3. Ensure all CI checks pass
4. Request review from maintainers
5. Address any feedback from code reviews
6. Once approved, a maintainer will merge your PR

## Examples of Contributions

### Small Contributions

- Fixing typos in documentation
- Adding comments to complex code
- Minor styling fixes
- Small bug fixes

### Medium Contributions

- Adding new UI components
- Implementing small features
- Writing tests for existing functionality
- Refactoring small portions of code

### Large Contributions

- Implementing major new features
- Significant refactoring
- Adding new pages or workflows
- Integrating new third-party services

## Questions?

Feel free to contact us at dev@paystream.example.com if you have any questions about contributing.

Thank you for helping make PayStream better!
