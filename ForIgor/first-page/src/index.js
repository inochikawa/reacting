import React from "react";
import { render } from 'react-dom';
import "./base.scss";

import { Header } from "./components/Header/Header.jsx";
import { Banner } from "./components/Banner/Banner.jsx";
import { SimpleBlockSection } from "./components/SimpleBlockSection/SimpleBlockSection.jsx";
import { AdvansedBlockSection } from "./components/AdvansedBlockSection/AdvansedBlockSection.jsx";
import { Tariffs } from "./components/Tariffs/Tariffs.jsx";
import { ReserveRequest } from "./components/ReserveRequest/ReserveRequest.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

import tariffImg1 from "./components/Tariffs/images/tariff1.png";
import tariffImg2 from "./components/Tariffs/images/tariff2.png";
import tariffImg3 from "./components/Tariffs/images/tariff3.png";

class Index extends React.Component {
    render() {

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

        let directionsBlocksInfo = [
            {
                number: 1,
                header: "Маркетинг",
                list: [
                    "SMM",
                    "Content Marketing",
                    "PR",
                    "SEO"
                ]
            },
            {
                number: 2,
                header: "IT - Разработка",
                list: [
                    "Developing",
                    "Design",
                    "QA",
                    "Project Manager"
                ]
            },
            {
                number: 3,
                header: "Продажи",
                list: [
                    "Sales",
                    "Account",
                    "Business Development",
                    "Finance"
                ]
            }
        ]

        let tariffsBlocksInfo = [
            {
                number: 1,
                img: tariffImg1,
                header: "Плата за результат",
                text: "Мы не имеем тарифных планов и пакетов услуг."
            },
            {
                number: 2,
                img: tariffImg2,
                header: "Без тарифов",
                text: "Мы не имеем тарифных планов и пакетов услуг."
            },
            {
                number: 3,
                img: tariffImg3,
                header: "Закрытая вакансия",
                text: "Вы нам платите за закрытую вакансию."
            }
        ]

        return (
            <div>
                <Header />
                <Banner />
                <SimpleBlockSection blockInfo={blocksInfo1} sectionHeader="Преимущества" type="white" />
                <SimpleBlockSection blockInfo={blocksInfo2} sectionHeader="Как это работает" type="grey" />
                <AdvansedBlockSection blockInfo={directionsBlocksInfo} sectionHeader="Направления" type="white" />
                <Tariffs blockInfo={tariffsBlocksInfo} sectionHeader="Таррифы" type="grey" />
                <ReserveRequest type="white"/>
                <Footer type="grey"/>
            </div>
        )
    }
}

render(<Index />, document.getElementById('root'));