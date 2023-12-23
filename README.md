# Web Performance Notes

# Common issues

1. **Unoptimized Images**: Large or unoptimized images can significantly slow down page load times. This is one of the most common issues, as images are a major part of most websites.

2. **Excessive JavaScript Execution**: Heavy or inefficient JavaScript can block the main thread, leading to delays in page interactivity and rendering.

3. **Too Many Render-Blocking Resources**: CSS and JavaScript files that are loaded in the head of your document without async or defer attributes can block the page from rendering quickly.

4. **Unnecessary Downloads**: Loading resources that aren't immediately needed, such as off-screen images or features only used by a small percentage of users.

5. **Lack of Compression**: Not using text compression (like Gzip or Brotli) for your resources can increase the amount of data transferred, affecting load time.

6. **Inefficient CSS Selectors**: Complex or inefficient CSS selectors can slow down the rendering process, as the browser has to spend more time calculating styles.

7. **Excessive DOM Size**: A large DOM can lead to increased memory usage and slower performance, especially during DOM manipulation operations.

8. **Memory Leaks**: JavaScript memory leaks can lead to increased memory usage over time, eventually causing the page to slow down or crash.

9. **Poor Cache Strategy**: Not leveraging browser caching effectively can lead to unnecessary network requests, slowing down repeat visits to your page.

10. **Slow Third-Party Scripts**: Dependency on third-party scripts and services (like ads, analytics, or widgets) can significantly impact performance if these scripts are slow or unresponsive.

# Analyzing the performance data

## Interpreting the flame chart

### Understanding the Flame Chart

- **Time Axis**: The horizontal axis represents time.
- **Call Stack**: Each row in the flame chart represents a function call stack at any point in time.
- **Bars**: Each bar represents a function call. The width of the bar indicates the time taken by that function.

### Interpreting the Data

- **Wide Bars**: Indicate functions that took a long time to execute. These are your primary targets for optimization.
- **Tall Stacks**: A tall stack of bars represents a deep call stack, suggesting complex function executions.
- **Color Coding**: Different colors can represent different types of activities (e.g., scripting, rendering).
- **Hover for Details**: Hover over bars to see more information about the function, including execution time and resources used.

### Analyze deep call stacks

1. **Identify the Root Cause**: Look at the bottom of the stack to understand what initiated the series of calls.
2. **Trace the Execution Path**: Follow the stack upwards to see the sequence of function calls and how the execution flows through different layers of your application.
3. **Look for Anomalies**: Unusually deep or unexpected paths might indicate inefficiencies or bugs, like unintended recursive calls or unnecessary nested functions.

## Call Tree and Bottom-Up Views

**Examine the Call Tree:**

Switch to the "Bottom-Up" or "Call Tree" tab to see where most time is spent.

Focus on high self-time functions.

## Tips for effective analysis

- **Look for Wide Bars**: In the flame chart, wide bars indicate functions that took a long time to execute. These are your primary targets for optimization.
- **Identify Long Tasks**: Any task that takes over 50ms can impact user responsiveness. In the overview graph, these are often marked with a red triangle.
- **Check Call Stacks**: Deep stacks can indicate complex calculations or recursive functions.
- **Correlate with Events**: Use the overview graph to correlate scripting or rendering spikes with specific events like user interactions or network responses.

# Memory profiling

## What is the heap?

The heap is a region of computer memory that's used to store dynamic data structures. It's where objects, strings, and closures are allocated when your code is running.

## Take heap snapshots

Go to memory panel and take a heap snapshot.

## Interpreting heap snapshots

**Look at Constructor Names:** This helps you identify objects by their types.

Sort by Shallow Size or Retained Size.

**Shallow Size:** The memory taken up by the object itself.
**Retained Size:** The total size of memory that can be freed up if this object is removed, including its dependencies.

**Check for Unexpected Large Objects:** Objects consuming a large amount of memory could be a sign of a memory leak.

Use the **Containment** and **Dominators** Views: These views help to understand the hierarchy and the ownership of objects.

## Identify objects for garbage collection

An object should be garbage collected when it is no longer reachable or needed in your application. This typically occurs when:

- There are no references to it from other live objects or global variables.
- It’s not part of a closure, event listener, or callback that’s still in use.

In heap snapshots, investigate objects with no clear references or those that are unexpectedly large and don't seem to be in use anymore.

## Check for detached DOM trees

Detached DOM trees are collections of DOM elements that are no longer part of the live DOM but are still held in memory by JavaScript references.

**How to Identify:**

- In the heap snapshot, look for DOM nodes that have no parent or whose parent is not part of the current document.
- Use the 'DOM Breakdown' tab to see a summary of detached DOM elements.

# Critical Rendering Path

The Critical Rendering Path (CRP) is the process by which a browser converts HTML, CSS, and JavaScript into pixels on the screen. It's a sequence of steps that the browser goes through to render a web page.

**HTML Parsing and DOM Construction:** The browser reads the HTML and creates the Document Object Model (DOM), a tree structure representing all HTML elements.

**CSS Parsing and CSSOM Construction:** The browser parses CSS files and inline styles, creating the CSS Object Model (CSSOM), which represents the styling information for each DOM node.

**Render Tree Construction:** The browser combines the DOM and CSSOM to create a render tree, which contains only the nodes required to render the page, along with their styles.

**Layout:** The browser calculates the size and position of each node in the render tree. This process is also known as "reflow."

**Paint:** The browser fills in pixels for each node, applying text, colors, images, etc.

**Composite:** Layers are drawn onto the screen in the correct order to create the final visual output.

```
[HTML] --> [DOM]
[CSS] --> [CSSOM]
[DOM + CSSOM] --> [Render Tree] --> [Layout] --> [Paint] --> [Composite]
```

# Layout Reflow

A layout reflow is the process by which the browser recalculates the positions and dimensions of elements in the document. It's a critical step in the rendering process, where the browser determines where to place each element on the page.

## How they occur

**DOM Manipulation:** Any script that changes the layout of a part of the page (like altering the height of an element) will trigger a reflow of that element, its children, and possibly siblings and ancestors.

**Style Changes:** Changing styles that affect the size or position of elements (like width, height, margin, padding, border, etc.) will also trigger a reflow.

**Computed Style Access:** Accessing certain properties in JavaScript, like offsetWidth, scrollTop, or getComputedStyle(), can also trigger reflow because the browser needs to ensure it returns the correct value.

# Layout Thrashing

When your JavaScript repeatedly reads and then writes to the DOM, the browser must reflow the layout after each read/write cycle. If these cycles are numerous and close together, it causes layout thrashing.

Each reflow operation is computationally expensive. In a thrashing scenario, the browser ends up performing far more layout calculations than necessary, consuming significant CPU time and slowing down the page.

## How to avoid

**Batch DOM Read/Write Operations:**

Group all your DOM reads together first, and then perform all the writes. This minimizes the number of reflow cycles.

Example: If you need to read then write to multiple elements, read from all of them first, then write to all of them.

**Use Document Fragments:**

Build your changes off-DOM using document fragments, and then append the fragment to the DOM as a single operation.

**Optimize CSS:**

Simplify CSS selectors to reduce the time the browser spends recalculating styles.

**Use requestAnimationFrame:**

This method allows you to queue changes to be made in the next repaint, reducing the number of reflows.

**Debounce and Throttle:**

For operations tied to events like resize or scroll, use debounce or throttle techniques to limit the number of times these operations are executed.
# node-and-performance
