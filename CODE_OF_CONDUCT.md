# Code of Conduct: Guidelines

Consistent Git practices improve collaboration and project maintainability. Follow these guidelines for commit messages and branch naming.

## Git Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format
```
<type>[optional scope]: <short description>
```

### Examples
```
feat: add user login functionality
fix: resolve image loading issue on mobile
docs: update API endpoint documentation
```

### Allowed Types
| Type       | Description                                         |
| ---------- | --------------------------------------------------- |
| `feat`     | New feature or functionality                        |
| `fix`      | Bug fix                                             |
| `docs`     | Documentation changes                               |
| `style`    | Code formatting (no functional changes)             |
| `refactor` | Code changes that neither fix bugs nor add features |
| `test`     | Add or update tests                                 |
| `chore`    | Maintenance tasks, config changes                   |

### Guidelines
- Keep subject line under 50 characters
- Use imperative mood ("Add" not "Added" or "Adds")
- Reference issues/tickets at end (e.g., `Closes #123`, `Refs JIRA-456`)

## Branch Naming Convention
> [!WARNING] 
> It is not allowed to push to the `master` directly. Create a branch for specific work and make a pull request and it will be approved after reviewing.
### Format
```
<type>/<short-description>
```

### Examples
```
feat/user-authentication
fix/mobile-responsive-header
docs/api-endpoint-specs
```

### Allowed Types
Same as commit message types (`feat`, `fix`, `docs`, etc.)

### Guidelines
- Use kebab-case (lowercase with hyphens)
- Keep names concise but descriptive
- Avoid special characters (!@#$%^&*)
- Prefix with type for easy categorization
- Delete branches after merging