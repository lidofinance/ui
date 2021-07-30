# Toast Component

React component for Lido Finance projects.
Part of [Lido UI Components](https://github.com/lidofinance/ui/#readme)

## Install

```bash
yarn add @lidofinance/toast
```

## Usage

For example will use `ToastDefault`, also you can use `ToastError`, `ToastSuccess`, `ToastInfo` and other.

```ts
import { ToastContainer, ToastDefault } from '@lidofinance/toast'

function ExampleToast() {
  const notifyDefault = () => ToastDefault('🚀🚀🚀 Wow so easy!')

  return (
    <>
      <button onClick={notifyDefault}>Show notify!</button>
      <ToastContainer />
    </>
  )
}
```

**IMPORTANT:** Remember to render the ToastContainer once in your application tree. If
you can not figure out where to put it, rendering it in the application root would
be the best bet.

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)
