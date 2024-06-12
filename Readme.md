# Flint plugin

With this plugin you can extend flint plugins.

## Example

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
