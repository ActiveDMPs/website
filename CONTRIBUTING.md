# Contributing Guidelines

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other
method with the owners of this repository before making a change.

## Development and Code Style

We just use `.editorconfig` for basic code style which is checked using GitHub Actions.

### Jekyll Project Structure

This website is a simple single-page web created using [Jekyll](https://jekyllrb.com/), 
built via [GitHub Actions](https://github.com/features/actions) and deployed on [GitHub Pages](https://pages.github.com/).

* `_bibliography/cite.bib` = content for *Cite Us* section, should be based on 'CITATION.cff'
* `_bibliography/resources.bib` = content for *Resources* section
* `_data/supporters.yml` = list of people supporting the manifesto for *Supporters* section
* `_includes/` = fragments of the website (sections, navbar and footer)
  *  `manifesto.md` = text of the [DMP Manifesto](./_includes/manifesto.md)
* `_layouts/` = layouts used in the website
* `_plugins/` = custom Ruby code used in templates/Jekyll
* `assets` = static files
* `.editorconfig` = file with code style rules
* `404.html` = 404 error page
* `_config.yml` = Jekyll configuration file
* `CITATION.cff` = file for citing the repository
* `CODEOWNERS` = owners of the repository contents
* `Gemfile` = Ruby/Jekyll dependencies
* `index.html` = index file of the website
* `Makefile` = prepared commands for easier project maintenance and development

For the development and local testing, we recommend using the prepared `Makefile` (e.g. `make install` and `make dev`).

## Pull Request Process

1. Ensure any unnecessary dependencies and other generated files are removed (adjust `.gitignore` if necessary).
2. Explain the changes and update in the Pull Request message.
3. Be ready to communicate about the Pull Request and make changes if required by reviewers.
4. The Pull Request may be merged once it passes the review and automatic checks.

## Git branches

* __main__ branch is used for the currently published website contents, any work-in-progress and testing must be done in
  different branches

