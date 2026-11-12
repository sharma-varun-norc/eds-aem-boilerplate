# Your Project's Title...
Your project's description...

## Environments
- Preview: https://main--eds-aem-boilerplate--sharma-varun-norc.aem.page/
- Live: https://main--eds-aem-boilerplate--sharma-varun-norc.aem.live/

## Documentation

Before using the aem-boilerplate, we recommend you to go through the documentation on https://www.aem.live/docs/ and more specifically:
1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `eds-aem-boilerplate` directory in your favorite IDE and start coding :)

## Storybook

Storybook is configured with the HTML/Vite renderer and the Cards block as a working
example. It renders the real block decorator using representative authored markup.

1. Install project dependencies, including Storybook: `npm install`
2. Start the interactive Storybook: `npm run storybook`
3. Open `http://localhost:6006` and select **Blocks / Cards**.
4. Choose **Default grid**, **Editorial cards with actions**, **Text-only cards**, or
   **Single feature card**. Adjust the card count and content in the **Controls** panel.
5. In **Editorial cards with actions**, click a card link and inspect the **Actions**
   panel to see the logged event.
6. To create a static Storybook build, run `npm run build-storybook`; output is written
   to `storybook-static/`.

Add more stories beside a block as `blocks/<block-name>/<block-name>.stories.js`.
