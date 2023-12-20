---
slug: "2023-GraphGallery"
title: "202308: Graph Visualization Gallery"
depth: 0
description: 'React.js and Three.js Mini Project: Graph Visualization Gallery. In this mini project, I played around with the ideas of "Single Canvas Multi Scene" and "Muli Single Page Web App".'
author: "王之枫-Zhifeng"
---

# React-Graph-Gallery

This mini-project was my focus for July and August 2023. At that time, I just finished refactoring the graph layout project into C++.

## Mutli-Single-Page web application?

With some special modification to the React router's root URL matching defination, I can simply put one Single-Page Web Application into a sub-directory of a static server.

Although this design doesn't use the advantage of Single Page Web Application, I guess its relatively easier for my development workflow.

## Reflection on "Multi-Single-Page" web application

I think this is about a general problem with "High Level of Abstraction." Those "high-level" libraries, like React, Next.js, and Angular, provide a lot of convenience for fast and general product development. Those libraries, including development tools like Webpack, really accelerate the development process by providing live and hot updates of your web pages. But, to some extent, for new learners like me, these tools also hide the low-level details, which might not be a good thing for me to truly and deeply understand how web applications work.

Furthermore, sometimes, those high-level abstractions also take away from your design choices in some way. Although Single-Page Application provides a bunch of advantages like not-full-page-reloading when navigating, in my opinion, it also makes the entire application more intertwined and unmanageable in some way.

## Graph Visualizations

I was also thinking about how to illustrate and display the graphs I have visualized. This layout design is kind of simple but effective.

## San Context: Multi-Scene Single Canvas Design

The San Context provides a lot of convenience for the "Mutli-Scene" Single Canvas design. It's super convenient!!! The San Context in this directory is a primitive version, not considering the problem of time elapsed (not a big deal). I think the destruction of Three geometries and materials and updating the scene should be the work of individual "scenes", but I haven't considered it at the time of working on this project.
