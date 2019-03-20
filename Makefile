# Configure these variables for your project

SYMFONY_DIR=.
SYMFONY_BIN_DIR=$(SYMFONY_DIR)/bin
SYMFONY_CONSOLE_PATH=$(SYMFONY_BIN_DIR)/console
SYMFONY_CONSOLE=php $(SYMFONY_CONSOLE_PATH)
ENCORE=yarn encore

lint_yaml: ## Apply the linter to Yaml files
	$(SYMFONY_CONSOLE) lint:yaml config
.PHONY: lint_yaml

lint_twig: ## Apply the linter to Twig templates
	$(SYMFONY_CONSOLE) lint:twig templates
.PHONY: lint_twig

export_routing:	## Exports routing for JS path generation
	$(SYMFONY_CONSOLE) fos:js-routing:dump --format=json --target=public/js/fos_js_routes.json

vue_ui: ## Starts Vue UI on port 8000
	yarn global add @vue/cli && vue ui --host 0.0.0.0

encore: ## Builds the assets in dev environment
	$(ENCORE) dev
.PHONY: encore

watch_encore: ## Builds the assets and watches changes
	yarn watch
.PHONY: encore_watch