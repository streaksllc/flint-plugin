# Flint plugin

With this plugin you can extend flint plugins.

![CleanShot 2024-06-12 at 10 56 52@2x](https://github.com/streaksllc/flint-plugin/assets/42768/dfad944e-5ae3-4658-9769-4ac339123d20)

## Plugin package

A flint plugin is a folder that consists of at least two files. The `manifest.json` and an executable javascript file that is loaded when the application starts:

Example `manifest.json`:

```json
{
  "id": "sample-plugin",
  "script": "sample-plugin.js",
  "css": "sample-plugin.css",
  "name": "Sample Plugin",
  "description": "A sample plugin for testing",
  "version": "1.0.0"
}
```

- `id` should match the folder name of the plugin.
- `script` is the script relative to the folder that is executed. Note that each script should call `registerPlugin`.
- `css` (optional) additional css relative to the folder that is executed.
- `name` - a human readable name of the plugin, displayed in the plugin manager
- `description` - a human readable description of the plugin, displayed in the plugin manager
- `version` - a version string of the plugin

## Installation of a plugin

1. Open Flint and press CMD-K and open the plugin manager.
2. Click on the "Open plugin folder" button to open the plugin folder.
3. Copy your named plugin folder (containing the `manifest.json` and resources) into this folder.
4. Activate the plugin
5. Restart Flint

## Api

First and foremost, you can access the flint object from a flint window `window.flint`. Make sure to declare the global window as `declare const window: FlintWindow;`.

`window.flint.db` gives you access the Flints database that allows you to CRUD tasks and task events.

## Example Plugin

Find a full example project [https://github.com/streaksllc/flint-plugin-example](https://github.com/streaksllc/flint-plugin-example).

```typescript
import { FlintPlugin, FlintWindow } from "flint-plugin";

declare const window: FlintWindow;

const plugin: FlintPlugin = {
  name: "flint-plugin",
  version: "0.0.1",
  init() {
    // called when the plugin is initialized by flint
    console.log("Hello from flint-plugin!");
  },
  // if you want to add a custom command item, you can render them here
  renderCommandItems: ({ setOpen }) => {
    return [
      {
        value: "Hello World",
        onSelect: async () => {
          // create a task
          await window.flint.db.tasks.createTask("Hello World", "command menu");

          // close the menu
          setTimeout(() => {
            setOpen(false);
          }, 1000);
        },
        children: <div>Hello World</div>,
      },
    ];
  },
};

// register the plugin
window.flint.registerPlugin(plugin);
```
