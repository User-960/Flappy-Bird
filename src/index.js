import "./index.html";
import "./index.scss";

import game from "./components/Game/Game";
// запускаем подготовку и после неё запуститься игра
game.prepare().then(() => {
  game.preview();
});
