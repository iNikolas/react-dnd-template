# React DnD

In this showcase application, you can only operate with a solitary knight figure. But it clearly demonstrates the possibilities of the react-dnd library.

Unfortunately, you can't make applications work simultaneously on touch and computer devices. Thus, you have to choose the proper backend: html5 or touch.

# React DnD at a glance

Usually, to run the react-dnd application you should perform the next steps:

1) Set Drag context with `<DndProvider>`.
2) Define draggable Item `types`. It's a conventional measure to restrict items you can to drag.
3) Write a `useDrag` hook in your draggable component.
4) Write `useDrop` hook in your target component.
5) Profit!

# Issues

During development, I run into the unsavory issue of missing `jsx-runtime.js` React module. To be able to run the application simply add this line `"./jsx-runtime.js": "./jsx-runtime.js"` as exports by path: `\node_modules\react\package.json`. Works only during one application bundle circle or up to another module installation. Then you have to tweak this line again.