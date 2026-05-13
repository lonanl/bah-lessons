import { setInnerHtmlForFirsElemntByClass, setInnerHtmlForFirsElemntById } from "./lib/elementsLib.js";
import { duplicateText } from "./lib/mathLib.js";

// Непосредственно программа, основной код
setInnerHtmlForFirsElemntByClass("btn1", duplicateText("Кнопка 1"));
setInnerHtmlForFirsElemntByClass("btn2", "Кнопка 2");
setInnerHtmlForFirsElemntByClass("btn3", "Кнопка 3");
setInnerHtmlForFirsElemntById("btn4", "Кнопка 4");
