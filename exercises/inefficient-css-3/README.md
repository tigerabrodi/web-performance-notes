# Learnings

width and height are expensive properties to animate. They trigger layout, paint, and composite. Consider using transform with e.g. scale instead.
