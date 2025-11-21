import "./JucastaNuu.css";
import JocastaNuu from "/Jedi/JocastaNuu/JocastaPortrait.jpg";
import FadeIn from "./Blocks/FadeIn";

export default function JucastaNuu() {
  return (
    <FadeIn>
      <section className="JocastaNuu_Container Featured_Border">
        <div className="JocastaNuu_Title">
          <h2>Chief Librarian</h2>
          <h3>Jocasta Nuu</h3>
        </div>
        <div>
          <img src={JocastaNuu} alt="" width={800} />
        </div>
        <div className="JocastaNuu_Text">
          <p>
            Jedi Master and primary caretaker of the extensive Archives,
            assisting fellow Jedi find the information they needed, while
            controlling access to several restricted vaults and artifacts.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
