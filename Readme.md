# Flint plugin

With this plugin you can extend flint plugins.

![CleanShot 2024-06-12 at 10 56 52@2x](https://github.com/streaksllc/flint-plugin/assets/42768/dfad944e-5ae3-4658-9769-4ac339123d20)

## Example

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
