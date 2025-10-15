function Intro() {
  return (
    <>
      <h2 className="text-center"> Game </h2>
      <div className="flex-center">
        <p className="max-w-6">
          It's a simple finger game of two players. Each player uses their hands
          to represent two numbers from 0 to 9 inclusively.
          <br />
          For example, state (11 | 11) is the starting state, which both players
          have their hands as 1.
          <br />
          For each round, one player can use one of their hands to touch one of
          the hands of their opponent and change their hand to the sum of the
          two hands mod by 10.
          <br />
          For example, when 9 + 9, the player of current round would get 8. And
          when 1 + 9, the player would get 0. When a hand is zero, both players
          can't use that hand to add.
          <br />
          The first player to get both of their hands zero wins.
        </p>
      </div>
      <hr className="max-w-6" />
      <h2 className="text-center"> Idea </h2>
      <div className="flex-center">
        <p className="max-w-6">
          Using the Multi-level Force-directed graph layout algorithm I
          implemented, I visualized the entire game graph.
          <br />
          In the visualization, <span className="c0">red</span> indicates the
          winner would be the first player if they don't make mistakes, similar
          for <span className="c1">blue</span>. <br />
          And <span className="c2">Green</span> states indicate the game will
          end in infinite loops if both players don't make mistakes.
          <br />
          And then build and use this interface to play with it haha.
        </p>
      </div>

      <hr className="max-w-6" />
      <h2 className="text-center"> Controls </h2>
      <div className="font-6 text-center">
        <div className="mt-2">
          <H2>Mouse:</H2>
          rotate, zoom, and span.
        </div>
        <div className="mt-2">
          <H2>Push:</H2>
          click the states below it to add the next state to the stack.
        </div>
        <div className="mt-2">
          <H2>Pop:</H2>
          pop the most recent state out.
        </div>
        <div className="mt-2">
          <H2>Hover on state:</H2>
          highlight the position of the state in the Visualization.
        </div>
      </div>
    </>
  );
}

export { Intro };
