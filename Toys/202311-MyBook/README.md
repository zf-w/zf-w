---
slug: "2023-MyBook"
title: "202311: My Book Renderer"
depth: 0
description: "Inspired by Rust's official textbook, I want to make a personal Markdown renderer."
author: "之枫-Zhifeng"
---

# My Next.js Markdown Renderer

Inspired by Rust's official textbook, I want to make a personal Markdown renderer. I can use it to render READMEs into an organized book with different customized components like Multiple Choice Questions.

# Reflection

> "What you don’t use, you don’t pay for. And further: What you do use, you couldn’t hand code any better." - Bjarne Stroustrup (2012) _Foundations of C++_

## Parsing Markdown

By reading through the documentation for libraries like Remark-Rehype, I got some idea about parsing documents under some syntax rules. It's like the dead memory of understanding programming language compilation from A-Level starting to attack me. Those words like "tokens" truly interest me. I wonder how the syntax checkers of languages and those parsers work.

## Handling Theme Colors

By "reading" through the Rust textbook, I first truly touched on the power of variables in CSS. I guess that might be the best approach for implementing multiple themes for a webpage. I think using CSS for colors and styles is natural and performant. The one of the themes of my project was taken from the Rust textbook's Navy theme.

## Handling Animations

Also, by "reading" through the Rust textbook, I first truly touched using CSS animations to handle sidebars and menus. Again, I feel this might be a more natural way to handle the display of elements instead of directly manipulating the DOM tree. Although I don't know the low-level implementation of CSS and how browsers actually draw pixels, I guess using CSS might be a better way compared to adding another layer of Javascript to control CSS and the DOM tree.

# Idea

## More Robust?

One thing that I learned from making webpages using different frameworks and libraries like Angular and React is that I will always want to make new sites with new ideas and different techs. So, I guess rendering those pages into static web pages and serving them using a static server might be a more stable approach.

## Higher level of Abstraction?

Using Next.js and libraries like Remark-Rehype, I can easily customize the rendering of Markdown texts with different functionalities. I will also try to learn how the real Rust book compiler works and make more lightweight HTML pages.
