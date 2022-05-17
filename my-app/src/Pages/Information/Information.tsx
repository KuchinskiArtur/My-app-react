import React, { useState } from "react";
import "./Information.css";

const Header = () => {
  const [tabNumber, setTabNumber] = useState("0");
  const numberTab = () => {
    let result = "";
    switch (tabNumber) {
      case "1":
        result = `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi a nam
              natus corrupti beatae ab consequuntur provident aliquid, magnam ipsam
              velit totam culpa distinctio, doloremque sed inventore tenetur eveniet,
              neque reiciendis. Quam similique officiis repellendus placeat ratione
              laboriosam, fuga, et id optio molestias veritatis nostrum accusamus
              atque odio aperiam, dicta asperiores tempora doloremque distinctio
              voluptates voluptatibus aliquid? Enim aspernatur ab nam earum voluptatum
              alias totam excepturi provident modi ad natus sapiente ex, cumque ullam
              nesciunt mollitia vitae, soluta illum aut rerum. Nam id reprehenderit
              est distinctio quibusdam illo tenetur quas deleniti facere perspiciatis
              expedita, voluptatibus voluptates dolore error consequatur odit rerum
              praesentium sunt sequi quos placeat? Nobis eius dolorem quam illum
              laudantium, consectetur quos maxime culpa odio hic eveniet minima non
              molestias similique eligendi, veritatis ipsum at aut? Reprehenderit
              soluta consequuntur molestiae maiores. Accusantium cupiditate architecto
              non ipsa temporibus soluta reiciendis consequatur. Quasi odit vero quod,
              omnis repudiandae eos cum, dolorum id, non deserunt provident cumque
              iste excepturi consequatur hic numquam reprehenderit. Corrupti libero id
              cum repellendus quidem odio aut totam aliquid commodi reiciendis.
              Impedit rem corporis dolorum hic odit, harum omnis distinctio, esse,
              iure sapiente maxime. Enim est accusantium autem. Dicta exercitationem
              veritatis eum id explicabo necessitatibus nisi tenetur.`;
        break;
      case "2":
        result = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
            voluptas dolorem est accusantium eum tempora officia error nemo minus
            nulla assumenda necessitatibus? Expedita qui, harum rerum provident
            nesciunt quaerat cum quam temporibus esse cumque illo iusto sint autem,
            aliquam quod obcaecati distinctio blanditiis perferendis consequatur
            unde! Ducimus distinctio amet, ipsa, error quae nihil natus numquam sit
            reprehenderit culpa omnis illum neque at perferendis, eos beatae? Iusto
            quam quas repellat sint! A eum tempore, illo repellat earum aspernatur
            voluptate libero voluptatibus voluptatem possimus officiis molestiae!
            Laboriosam animi non nobis accusamus maiores quam adipisci dolorem
            quisquam nam illo iste atque minima possimus dignissimos culpa,
            laudantium, odit, nihil repellendus officia debitis cumque! Dolore autem
            tempore at corrupti. Necessitatibus voluptatibus perspiciatis nulla vero
            harum maxime accusamus facere optio numquam, similique, architecto
            delectus quaerat dolore omnis itaque aut praesentium repellat eaque
            natus dolores corrupti neque! Voluptatibus ad voluptatem dolorum porro,
            a dolore id error harum.`;
        break;
      case "3":
        result = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            voluptate commodi nihil. Dolorem officiis hic omnis optio, magnam natus
            maiores. Magnam nobis vero doloremque exercitationem pariatur id eius
            incidunt perferendis reprehenderit, soluta itaque nisi iste tenetur
            neque sapiente placeat beatae excepturi delectus alias fugiat quae
            provident. Ipsam ipsa quod deleniti.`;
        break;
    }
    return result;
  };

  return (
    <div className="information">
      <h1>Information</h1>
      <div className="wrapperBtnTab">
        <button className="btnTabOne" onClick={() => setTabNumber("1")}>
          Tab 1
        </button>
        <button className="btnTabTwo" onClick={() => setTabNumber("2")}>
          Tab 2
        </button>
        <button className="btnTabThree" onClick={() => setTabNumber("3")}>
          Tab 3
        </button>
      </div>
      <p className="TabOne">{numberTab()} </p>
    </div>
  );
};

export default Header;
