function About() {
  return (
    <div>
      <h1 className="text-6xl mb-10">GitProfile</h1>
      <p className="text-xl">
        A simple React app that allows you to search for a GitHub user and view
        their profile information.
      </p>
      <p className="text-xl my-3">
        I created this project to learn about{" "}
        <a href="https://tanstack.com/router/" className="link">
          Tanstack Router
        </a>{" "}
        and{" "}
        <a href="https://daisyui.com/" className="link">
          daisyUI
        </a>
        .
      </p>
    </div>
  );
}
export default About;
