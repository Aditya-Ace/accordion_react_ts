# Contributing to Modern React Accordion

Thank you for your interest in contributing to the Modern React Accordion component! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn
- Git

### Development Setup

1. **Fork the repository**
   \`\`\`bash

   # Click the "Fork" button on GitHub, then clone your fork

   git clone https://github.com/yourusername/modern-accordion.git
   cd modern-accordion
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Create a new branch**
   \`\`\`bash
   git checkout -b feature/your-feature-name
   \`\`\`

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure accessibility standards are maintained

### Component Structure

\`\`\`tsx
// 1. Imports (React, external libraries, internal modules)
import React from 'react'
import { motion } from 'framer-motion'

// 2. Types and interfaces
interface ComponentProps {
// ...
}

// 3. Component implementation
export const Component: React.FC<ComponentProps> = ({
// props
}) => {
// hooks and state
// event handlers
// render logic
}
\`\`\`

### Accessibility Requirements

- All interactive elements must be keyboard accessible
- Proper ARIA attributes must be included
- Color contrast must meet WCAG AA standards
- Screen reader compatibility is required
- Focus management must be implemented

## 🧪 Testing

### Running Tests

\`\`\`bash

# Run all tests

npm test

# Run tests in watch mode

npm run test:watch

# Run tests with coverage

npm run test:coverage
\`\`\`

### Writing Tests

- Write unit tests for all new features
- Include accessibility tests
- Test keyboard navigation
- Test different variants and props
- Mock external dependencies when necessary

## 📖 Documentation

### Code Documentation

- Add JSDoc comments for all public APIs
- Document complex algorithms or business logic
- Include usage examples in comments

### README Updates

- Update the README.md for new features
- Add examples for new props or variants
- Update the API reference table
- Include migration guides for breaking changes

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Detailed steps to reproduce the bug
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Environment**: Browser, OS, React version, etc.
6. **Code Example**: Minimal code example that reproduces the issue

### Bug Report Template

\`\`\`markdown
**Bug Description**
A clear and concise description of the bug.

**Steps to Reproduce**

1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment**

- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- React Version: [e.g. 18.3.1]
- Component Version: [e.g. 1.0.0]
  \`\`\`

## 💡 Feature Requests

When suggesting new features:

1. **Use Case**: Describe the problem you're trying to solve
2. **Proposed Solution**: Describe your proposed solution
3. **Alternatives**: Describe alternatives you've considered
4. **Additional Context**: Add any other context or screenshots

## 🔄 Pull Request Process

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Self-review of your own code
- [ ] Comments added to hard-to-understand areas
- [ ] Tests added for new features
- [ ] All tests pass
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)

### Pull Request Template

\`\`\`markdown

## Description

Brief description of changes

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing

- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Accessibility testing completed

## Screenshots (if applicable)

Add screenshots to help explain your changes

## Checklist

- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
      \`\`\`

## 🏷️ Commit Messages

Use conventional commit messages:

\`\`\`
type(scope): description

[optional body]

[optional footer]
\`\`\`

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

\`\`\`bash
feat(accordion): add neon variant with glowing effects
fix(accessibility): improve keyboard navigation for locked accordions
docs(readme): update installation instructions
style(component): improve code formatting and comments
\`\`\`

## 📋 Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create a pull request
4. After merge, create a GitHub release
5. Publish to npm (maintainers only)

## 🤝 Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the code of conduct
- Ask questions if you're unsure

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Email**: your.email@example.com

Thank you for contributing to the Modern React Accordion! 🎉
