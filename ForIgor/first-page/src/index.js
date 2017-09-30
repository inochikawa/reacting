import  React from "react";
import { render } from 'react-dom';
import "./base.scss";

import { Header } from "./components/Header/Header.jsx";
import { Banner } from "./components/Banner/Banner.jsx";
import { SimpleBlockSection } from "./components/SimpleBlockSection/SimpleBlockSection.jsx";

class Index extends React.Component {
    render(){

        let blocksInfo1 = [
            {
                number: 1,
                header: "Только лучшие",
                text: "Мы знаем кто вам нужен, поэтому Вашу вакансию будут видеть исключительно подходящие кандидаты."
            },
            {
                number: 2,
                header: "Таланты будущего",
                text: "Молодые специалисты – это “чистый лист”, с которого можно сделать профессионала для вашей команды."
            },
            {
                number: 3,
                header: "Желание и энтузиазм",
                text: "Главный плюс студентов - жажда прикладывать все усилия, чтобы добиться профессиональных высот в вашей компании."
            },
            {
                number: 4,
                header: "Финансовая выгода",
                text: "Наши кандидаты больше заинтересованы в развитии, поэтому, их желаемая зарплата на 20-40% процентов ниже рыночной"
            }
        ]

        let blocksInfo2 = [
            {
                number: 1,
                header: "Легкий старт",
                text: "Создание вакансии занимает всего 5 этапов, нам этого достаточно чтобы отобрать лучших для вас!"
            },
            {
                number: 2,
                header: "Качественные отклики",
                text: "Только кандидаты со специальностью и умениями, которые вам нужны смогут податься на вакансию. Уже не нужно тратить уйму времени на собеседования."
            },
            {
                number: 3,
                header: "Автоподбор резюме",
                text: "Сразу после размещения вакансии, вы увидите резюме 10 лучших кандидатов, которые уже готовы приступать к работе!"
            }
        ]

        return(
            <div>
                <Header/>
                <Banner/>
                <SimpleBlockSection blockInfo={blocksInfo1} sectionHeader="Преимущества" type="grey"/>
                <SimpleBlockSection blockInfo={blocksInfo2} sectionHeader="Как это работает"  type="white"/>
            </div>
        )
    }
}

render(<Index />, document.getElementById('root'));