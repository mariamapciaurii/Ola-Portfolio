import "./about.css";
import leaves from '../../image/Leaves.png';
const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div>
        <img className="leaves" alt="leaves" src={leaves} />
      </div>
      <p>I caught fire coding.</p>

      <br></br>
      <p>
        Front-end development calls to all my passions. It incorporates
        creativity and problem solving and I'm allowed to break it to improve
        the code (in a separate Git branch, of course.) Because of my strong
        background in coding and lifelong love for art, I can proudly say that
        creating beautiful and powerful websites is my passion and my
        profession. I always enjoy working with clients to provide high quality
        work and quick responses.
      </p>

      <br></br>
      <p>
        I love applying responsive design principles and watching my web pages
        shrink into mobile screens and still look amazing. it's oddly
        satisfying. I think in a way I'm kind of like those web pages; I'm
        moldable, but still keep my creative flare intact.
      </p>

      <br></br>
      <p>
        Have any questions? Want to discuss your projects? Feel free to contact
        me and have a nice day! ;)<br></br>
        And let my work speak for itself!
      </p>
    </div>
  );
};

export default About;
