import { Course } from "../../components/CourseType/CourseType.jsx";
import s from "../../components/CourseType/CourseType.module.css";

export const Bodyflex = () => {
  return (
    <Course
      fon={`${s.skill_card_bodyflex}`}
      name={"Бодифлекс"}
      cause1={
        "Хотите укрепить легкие и снизить вероятность заболеваний дыхательной системы."
      }
      cause2={"Улучшить пищеварение."}
      cause3={"Ускорить метаболизм."}
      directions1={"• базовый"}
      directions2={"• продвинутый"}
      text={
        "BodyFlex – система, в которой особым образом сочетаются физические упражнения на укрепление и растяжку мышц, и дыхательная гимнастика. Такое сочетание приводит к ряду положительных эффектов, которые практически невозможно достичь с помощью других направлений фитнеса. Одна из самых интересных особенностей данной системы заключается в том, что это эффективный фитнес дома. Весь смысл бодифлекса сводится к правильному дыханию, благодаря которому упражнения на растяжку и укрепление мышц приобретают свою эффективность. При выдыхании воздуха и задержке дыхания организм на короткое время испытывает кислородное голодание, в крови накапливается углекислый газ, что приводит к запуску некоторых физиологических процессов, типичных для ситуации «бей или беги». То есть, организм приходит в состояние повышенной готовности и способен выполнять быстрые и энергичные действия."
      }
    />
  );
};
