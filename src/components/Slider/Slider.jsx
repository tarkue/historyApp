import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from "./Slider.module.css"
import { useCallback, useEffect, useRef, useState } from 'react';
import Item from './Item/Item';

const tags = {
    USSR: {
        name: "СССР", 
        color: "var(--color-red)"
    },
    USA: {
        name: "США", 
        color: "var(--color-blue)"
    },
}

const persons = [
    {
        name: "Юлий Борисович Харитон", 
        img: "/чел.png",
        text: "(1923-1996)- советский физик и ученый в области ядерной физики. Он был одним из ключевых ученых, работавших над разработкой советской атомной бомбы во время Второй мировой войны.",
        tag: tags.USSR,
    },
    {
        name: "Серго Лаврентьевич Берия", 
        img: "/чел2.png",
        text: "(1899-1953) -советский политический деятелем и глава НКВД, сыграл важную роль во время Второй мировой войны и послевоенного периода.",
        tag: tags.USSR,
    },
    {
        name: "Игорь Васильевич Курчатов", 
        img: "/чел3.png",
        text: "(1903-1960) - советский физик-ядерщик, основатель советской ядерной программы. Он руководил разработкой первой советской атомной бомбы и созданием первой советской атомной электростанции.",
        tag: tags.USSR,
    },
    {
        name: "Георгий Николаевич Флёров", 
        img: "/чел4.png",
        text: "(1913-1990)- советский физик-ядерщик. Он известен своими исследованиями в области ядерной физики и ядерных реакций.",
        tag: tags.USSR,
    },
    {
        name: "Франклин Делано Рузвельт", 
        img: "/чел5.png",
        text: "(1882-1945)- 32-ой президент Соединенных Штатов Америки, служивший с 1933 по 1945 годы. Рузвельт был членом Демократической партии и стал одним из самых влиятельных президентов в истории США.",
        tag: tags.USA,
    },
    {
        name: "Роберт Оппенгеймер", 
        img: "/чел6.png",
        text: "(1904-1967)- американский физик, один из главных ученых, работавших над разработкой атомной бомбы во время Второй мировой войны. Оппенгеймер был директором проекта Манхэттен, который привел к созданию первой ядерной бомбы.",
        tag: tags.USA,
    },
    {
        name: "Лесли Гровс", 
        img: "/чел7.png",
        text: "(1876-1967)-американский военный инженер и генерал армии США. Он играл ключевую роль в разработке атомной бомбы во время Второй мировой войны в рамках проекта Манхэттен.",
        tag: tags.USA,
    },
]
function Slider() {
    const sliderRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const [activeSlide, setActiveSlide] = useState(0)
    const [name, setActiveName] = useState(persons[0].name)
    

    useEffect(() => {
        setActiveName(persons[activeSlide].name)

        prevButtonRef.current.classList.remove(s.noActive)
        nextButtonRef.current.classList.remove(s.noActive)

        if (activeSlide == 0) {
            prevButtonRef.current.classList.add(s.noActive)
        }
        if (activeSlide == persons.length-1) {
            nextButtonRef.current.classList.add(s.noActive)
        }
    }, [activeSlide])
    return (
        <div className={s.personal} id="persons">
        <div className={s.Header}>
          <h2>{name}</h2>
          <h2>{activeSlide+1}/{persons.length}</h2>
        </div>
        <div className={s.ContentWrappper}>
          <Swiper
            slidesPerView={1}
            onSlideChange={(e) => setActiveSlide(e.activeIndex)}
            direction={'vertical'}
            ref={sliderRef}
            height={500}
          >
            {persons.map((el, k) => 
                <SwiperSlide className={s.Slide} key={k}>
                    <Item img={el.img} tag={el.tag} text={el.text} />
                </SwiperSlide>
            )}
          </Swiper>
          <div className={s.ButtonsList}> 
            <span 
                className={s.Button}  ref={prevButtonRef}
                onClick={handlePrev}
            >
                <svg width="45" height="26" viewBox="0 0 45 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.87868 19.9705L19.9706 0.878593C21.1421 -0.292981 23.0416 -0.292981 24.2132 0.878592L43.3051 19.9705C44.4767 21.142 44.4767 23.0415 43.3051 24.2131C42.1335 25.3847 40.234 25.3847 39.0624 24.2131L22.0919 7.24255L5.12132 24.2131C3.94975 25.3847 2.05025 25.3847 0.87868 24.2131C-0.292893 23.0415 -0.292894 21.142 0.87868 19.9705Z" fill="black"/></svg>
            </span>
            <span 
                className={s.Button} ref={nextButtonRef}
                onClick={handleNext}
            >
                <svg className={s.Rotate} width="45" height="26" viewBox="0 0 45 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.87868 19.9705L19.9706 0.878593C21.1421 -0.292981 23.0416 -0.292981 24.2132 0.878592L43.3051 19.9705C44.4767 21.142 44.4767 23.0415 43.3051 24.2131C42.1335 25.3847 40.234 25.3847 39.0624 24.2131L22.0919 7.24255L5.12132 24.2131C3.94975 25.3847 2.05025 25.3847 0.87868 24.2131C-0.292893 23.0415 -0.292894 21.142 0.87868 19.9705Z" fill="black"/></svg>
            </span>
          </div>
        </div>
      </div>
    )
}

export default Slider