# Web Performance Notes

## Common issues

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

## Critical Rendering Path

## Layout Reflow

## Layout Thrashing

## Identify long-running and blocking functions
