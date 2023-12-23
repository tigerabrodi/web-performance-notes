# Learnings

will-change in combination with transforms or opacity does not trigger paint.

will-change is a newer property. It allows you to hint to the browser that an element is going to change in the future. This allows the browser to optimize for this change ahead of time.

Use it sparingly and only when you know that an element is going to change. Otherwise, you may end up with worse performance. Every performance optimization comes with a cost, but not always a benefit.
