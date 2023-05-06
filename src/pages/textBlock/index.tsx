import { Grid, Image } from "@mantine/core";

function TextBlock() {
  return (
    <div className="container">
      <div id="textblock">
        <div id="textblock-container">
          <h1 id="textblock-title">C'est quoi Onyrix AI?</h1>
          {/* <p id="textblock-content">
            The year is 1989.
            <br />
            <br />
            You are a man named Henry who has retreated from your messy life to
            work as a fire lookout in the Wyoming wilderness. Perched atop a
            mountain, it's your job to find smoke and keep the wilderness safe.
            <br />
            <br />
            An especially hot, dry summer has everyone on edge. Your supervisor,
            a woman named Delilah, is available to youat all times over a small,
            handheld radio—and is your only contact with the world you've left
            behind.
            <br />
            <br />
            But when something strange draws you out of your lookout tower and
            into the world below, you'll explore a wild and unknown environment,
            facing questions and making interpersonal choices that can build or
            destroy the only meaningful relationship you have.
          </p> */}

          {/* grid grid-cols-1 md:grid-cols-3 */}

          {/* <div className="bg-white">
            <div
              className="flex"
              style={{ backgroundColor: "yellow", width: "200px" }}
            >
              1
            </div>
            <div className="grid-cols-4" style={{ backgroundColor: "red" }}>
              9
            </div>
          </div> */}
          <Grid grow style={{ textAlign: "center" }}>
            <Grid.Col span={4}>
              <Image
                maw={240}
                mx="auto"
                radius="md"
                src="./avatar.png"
                alt="Random image"
              />
            </Grid.Col>
            <Grid.Col span={4}>2</Grid.Col>
          </Grid>
        </div>
        <footer id="textblock-footer">
          Demo Created With 🧡 By&nbsp;
          <a id="textblock-devsense" href="https://youtube.com/c/DevSense19">
            DevSense
          </a>
        </footer>
      </div>
    </div>
  );
}

export default TextBlock;
