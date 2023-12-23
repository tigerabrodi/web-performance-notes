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

## Identifying long tasks

## Call Tree and Bottom-Up Views

## Tips for effective analysis

# Memory profiling

# Critical Rendering Path

# Layout Reflow

# Layout Thrashing
