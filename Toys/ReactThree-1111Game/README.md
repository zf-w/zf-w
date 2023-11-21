# ReactThree 1111GameVisualization 2023-05

## First attempt of making informantion-rich? interactive visualization

This is, as far as I can recall, the first attempt at making an information-rich interactive visualization. In this mini-project, I tried to pass the core attribute of the graph geometry to a controller and consequently design a binding to link the 2D interface with the 3D elements.

## Playing with React Render Cycle

Based on my understanding, React states would prefer deep copies of states for easy management. But I feel like coping with the three objects or controllers might be somewhat time and memory-consuming. So, I tried to use a refresh React state and stored the actual state in the controller, controlling both the internal game state and the three.js resources.

## Modularity

I guess, in general, the file structure and modularity are gradually improving. Several months later, I tried to use an interface object for the graph object in the middle to make the structure clearer. The interface is responsible for changing vertices' color and positions, edge colors, and directions.
