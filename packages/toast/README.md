# Toast Component

React component for Lido Finance projects based on React-Toastify (https://github.com/fkhadra/react-toastify).
Part of [Lido UI Components](https://github.com/lidofinance/ui/#readme)

## Install

```bash
yarn add @lidofinance/toast
```

## Usage

For example will use `ToastDefault`, also you can use `ToastError`, `ToastSuccess`, `ToastInfo` and other.

Also, you can use native React-Toastify functional, just `import { toast } from '@lidofinance/toast'`
(see example below), but be careful `@lidofinance/toast` does not support full functionality of React-Toastify!!!

```ts
import { ToastContainer, ToastDefault, toast } from '@lidofinance/toast'

function ExampleToast() {
  const notifyDefault = () => ToastDefault('🚀🚀🚀 Wow so easy!')
  const dismissAll = () => toast.dismiss()

  return (
    <>
      <button onClick={notifyDefault}>Show notify!</button>
      <Button onClick={dismissAll} size='xs' variant='translucent'>
        Dismiss all
      </Button>
      <ToastContainer />
    </>
  )
}
```

**IMPORTANT:**

1. Remember to render the ToastContainer once in your application tree.
   If you can not figure out where to put it, rendering it in the application root would
   be the best bet;
2. `@lidofinance/toast` use own scss styles, see `packages/toast/src/ToastContainer.tsx`;

3. `@lidofinance/toast` does not support full functionality of React-Toastify!!!

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)
