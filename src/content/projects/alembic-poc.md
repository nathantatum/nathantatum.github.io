---
title: "Alembic Database Migrations PoC"
description: "A proof of concept exploring schema management, migration scripts, and automated database rollbacks with Alembic and SQLAlchemy."
badge: "PoC"
tags: ["Python", "Alembic", "SQLAlchemy", "PostgreSQL"]
icon: "🗄️"
githubUrl: "https://github.com/nathantatum/alembic-poc"
featured: true
order: 1
---

## Alembic Database Migrations PoC

This project is a proof of concept evaluating **Alembic** as a database migration framework alongside **SQLAlchemy** in Python backend applications.

### Key Objectives & Features
- **Schema Version Control**: Track database schema revisions alongside code changes.
- **Auto-generating Migrations**: Generate migration scripts automatically by diffing SQLAlchemy models against live database state.
- **Rollback Safety**: Ensure reversible database migrations (`upgrade()` and `downgrade()` tasks).
