import electronics from "../images/electronics.jpg";
import jewelery from "../images/jewelery.jpg";
import mensclothing from "../images/mensclothing.jpg";
import womensclothing from "../images/womensclothing.jpg";

export const kindOfImg = (kind) => {
    if (kind === "electronics") {
      return electronics;
    } else if (kind === "jewelery") {
      return jewelery;
    } else if (kind === `men's clothing`) {
      return mensclothing;
    } else if (kind === `women's clothing`) {
      return womensclothing;
    }
  };