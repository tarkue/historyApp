import s from './App.module.css'
import Chronology from './components/Chronology/Chronology'
import Header from './components/Header/Header'
import ChronologyItem from './components/ChronologyItem/ChronologyItem'
import { PhotoView } from 'react-photo-view'

import Tag from './components/Tag/Tag'
import Slider from './components/Slider/Slider'
import ContentRow from './components/ContentRow/ContentRow'


function App() {
  const images=['/1.png','/2.png','/3.png']
  const images2=['/17.png','/8.png']
  const images3=['/10.png','/11.png']
  const images4=['/12.png','/13.png','/14.png','/15.png','/16.png']
  const images5=['/18.png','/19.png','/20.png']
  const images6=['/21.png','/22.png','/23.png']
  const images7=['/4.png','/5.png']
  const images8=['/25.png','/26.png','/24.png']
  const images9=['/27.png','/28.png','/29.png']
  const images10=['/30.png','/31.png','/32.png']
  const images11=['/33.png','/34.png','/35.png']
  return (
    <>
    <Header></Header>
    <h1 className={s.title}>Атомный проект <br/>СССР и США</h1>
    <img src='/mainkraft.png' alt='main body' className={s.mainkraft}/>
    <h2 className={s.title} id="main">Содержание</h2>
    <Chronology tag_color= 'var(--color-red)' tag_name='СССР' img='https://www.atomic-energy.ru/files/images/2022/02/15.png'>
      <p>Ядерный проект СССР (атомный проект СССР) - комплекс научных изысканий и организационно-технических мер, спланированных и реализованных в Советском Союзе в 1940–1950-х гг. с целью создания отечественного ядерного оружия и формирования в стране исследовательской и промышленной базы для новой отрасли народного хозяйства – атомной энергетики.<br/>
Исследования в области ядерной физики в СССР относятся к концу 1920 – началу 1930-х гг. Этими исследованиями занимались видные советские учёные-физики: А. Ф. Иоффе, И. В. Курчатов, Г. Н. Флёров, Л. И. Русинов, И. Е. Тамм, Я. Б. Зельдович, Л. Д. Ландау и др., имевшие международный авторитет. Были достигнуты значительные успехи в области деления атомного ядра, однако считалось, что эти успехи почти не имеют практического применения и научной перспективы. Уже к концу 1930-х гг. были высказаны предположения о возможности использования ядерной энергии в военных целях.<br/> 
Начавшаяся Великая Отечественная война 1941–1945 гг. приостановила проведение экспериментов в области ядерной физики. Но к весне 1942 г. работы по созданию ядерного оружия возобновились. Из данных советской разведки стало ясно, что США и Великобритания проводят совместные исследования по использованию ядерной энергии в военных целях («Манхэттенский проект»). 28 сентября 1942 г. было принято постановление Государственного комитета обороны «Об организации работ по урану», что стало первым этапом ядерного проекта.<br/>
      </p>
    </Chronology>
    <Chronology tag_color= 'var(--color-blue)' tag_name='США' img='https://avatars.dzeninfra.ru/get-zen_doc/4697081/pub_64148eb23c58ad20cbb5fbc0_64148ed8dac81b380e00c7fc/scale_1200'>
      <p>«Манхэттенский проект» - кодовое название программы США по разработке ядерного оружия<br/>
      В1939 году учёные-физики Л. Силард и Ю. Вигнер написали письмо президенту США Ф. Д. Рузвельту с предупреждение, что Германия разрабатывает проект мощной бомбы нового типа. Письмо было подписано А. Эйнштейном.<br/>
Рузвельт назначил Лаймана Бриггса из Национального института стандартов и технологий главой Уранового комитета для исследования проблем, поднятых в письме, и 1 ноября 1939 г. комитет доложил, что использование урана позволит создать новое мощное оружие.<br/> 
Со вступлением США во Вторую мировую войну в декабре 1941 г. правительство создало проект, которым руководил бригадный генерал Лесли Гровс. Был сформирован и включён в состав военно-инженерных войск армии США Манхэттенский инженерный округ (Manhattan Engineering District), Гровс был назначен командующим этим округом, а научным руководителем – американский физик Роберт Оппенгеймер.<br/>
В рамках проекта были созданы 3 атомные бомбы: плутониевая «Штучка» (Gadget) – взорвана при первом ядерном испытании, урановый «Малыш» (Little Boy) – сброшена на Хиросиму 6 августа 1945 г., и плутониевый «Толстяк» (Fat Man) – сброшена на Нагасаки 9 августа 1945 г.<br/>

      </p>
    </Chronology>
    <h2 className={s.title} id="chronology">Хронология</h2>
    <div className={s.ChronologyWrapper}>
      <Tag tag_color='var(--color-red)' tag_name='СССР'/>
      <div className={s.flexim}>
        <ChronologyItem text='1. Распоряжение ГКО от 28 сентября 1942 года «Об организации работ по урану». 10 марта 1943 года Игоря Курчатов был назначен на пост научного руководителя работ по использованию атомной энергии в СССР.' photo='/ссср1.png' podpis='Распоряжение ГКО от 28.09.1942'/>
        <ChronologyItem text='2. В 1943 году был создан научно-исследовательский центр по урановой проблеме - Лаборатория № 2 АН СССР, ныне Российский Научный центр «Курчатовский институт».' photo='/ссср2.png' podpis='Лаборатория №2 АН СССР'/>
        <ChronologyItem text='3. После американских бомбардировок Хиросимы и Нагасаки 6 и 9 августа 1945 года. В СССР были приняты чрезвычайные меры. 20 августа 1945 года подписано Постановление «О Специальном Комитете при ГКО». Председатель—Лаврентий Берия.' photo='/ссср3.png' podpis='Доклад Берии для Сталина о создании атомной бомбы'/>
        <ChronologyItem text='4. 9 апреля 1946 принято закрытое постановление Совета Министров  о создании конструкторского бюро (КБ 11) при Лаборатории № 2 АН СССР для разработки конструкции атомной бомбы.' photo='/ссср4.png' podpis='Постановление Совета Министров'/>
        <ChronologyItem text='5. Начальник—Павел Зернов, главный конструктор—Юлий Харитон. Сверхсекретный объект был в 80 км от Арзамаса на территории бывшего Саровского монастыря. ' photo='/ссср5.png' podpis='Сверхсекретный объект на территории Саровского монастыря'/>
        <ChronologyItem text='6. В 1946 атомный проект перешел в промышленную стадию. На Урале, были созданы предприятия и комбинаты по производству ядерноделящегося материала.' photo='/ссср6.png' podpis='Промышленное производство рабочих блоков из металлического урана. Завод № 12, 1946 г.'/>
        <ChronologyItem text='7. К январю 1949 отработан весь комплекс конструкторских вопросов по РДС 1 (первая атомная бомба). В 170 км от города Семипалатинска был построен испытательный комплекс Учебный полигон № 2 Министерства обороны СССР. В мае 1949 года на полигон прибыл Курчатов, он руководил испытаниями.' photo='/ссср7.jpg' podpis='Учебный полигон № 2 Министерства обороны СССР'/>
        <ChronologyItem text='8. 21 августа 1949 года основной заряд прибыл на полигон. В 4 часа утра 29 августа атомная бомба была поднята на испытательную башню высотой 37,5 м. В 7 часов утра состоялось первое испытание советского атомного оружия. Оно было успешным.' photo='/ссср9.png' podpis='Первое испытание советской атомной бомбы'/>
      </div>
    </div>
    <h2 className={s.title}>Галерея</h2>
    <p className={s.text}>Распоряжение государственного комитета обороны от 28 сентября 1942 об организации работ по урану</p>
    <div className={s.imagesList}>
      {images.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" className={s.imgochka}/>
        </PhotoView>
      ))}
    </div>
    <p className={s.text}>Лаборатория № 2 АН СССР</p>
    <div className={s.imagesList}>
      {images2.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" className={s.imgochka}/>
        </PhotoView>
      ))}
    </div>
    <p className={s.text}>Постановление совета министров СССР по вопросам лаборатории №2</p>
    <div className={s.imagesList}>
      {images3.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" className={s.imgochka}/>
        </PhotoView>
      ))}
    </div>
    <p className={s.text}>Постановление ГКО "о специальном комитете при ГОКО"</p>
    <div className={s.imagesList}>
      {images4.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" className={s.imgochka}/>
        </PhotoView>
      ))}
    </div>
    <p className={s.text}>Поселок Саров и Саровский монастырь. 1946 год</p>
    <div className={s.imagesList}>
      {images5.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" className={s.imgochka}/>
        </PhotoView>
      ))}
    </div>
    <p className={s.text}>Доклад Берии для Сталина о создании атомной бомбы</p>
    <div className={s.imagesList}>
      {images6.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" className={s.imgochka}/>
        </PhotoView>
      ))}
    </div>
    <p className={s.text}>Постановление совета министров СССР об испытаниях атомной бомбы</p>
    <div className={s.imagesList}>
      {images7.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" className={s.imgochka}/>
        </PhotoView>
      ))}
    </div>
    <p className={s.text}>Испытание первой советской атомной бомбы 29 августа 1949 г.</p>
    <div className={s.imagesList}>
      {images8.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" className={s.imgochka}/>
        </PhotoView>
      ))}
    </div>
    <div className={s.ChronologyWrapper}>
      <Tag tag_color='var(--color-blue)' tag_name='США'/>
      <div className={s.flexim}>
        <ChronologyItem text='1. Создание проекта в декабре 1941 года. Руководителем был назначен бригадный генерал Лесли Гровс.' photo='/сша1.png' podpis='Лесли Гровс и Роберт Оппенгеймер'/>
        <ChronologyItem text='2. Для ядерного делящегося материала требовался уран-235 и плутоний-239. В Ок-Риджской национальной лаборатории искали методы обогащения урана. Электромагнитное разделение, газовая диффузия, термодиффузия показали хорошие результаты.' photo='/сша2.png' podpis='Ок-Риджская национальная лаборатория'/>
        <ChronologyItem text='3. 28 декабря 1942 года президент Рузвельт подписал распоряжения о строительстве заводов по обогащению урана газовой диффузией и электромагнитным методом, а также завода по производству плутония. ' photo='/сша3.png' podpis='К-25 установка по обогащению урана'/>
        <ChronologyItem text='4. Создание ядерного реактора под западными трибунами стадиона «Стагг Филд» Чикагского университета. 2 декабря 1942 года реализована управляемая самоподдерживающаяся цепная реакция деления ядер атомов урана.' photo='/сша4.png' podpis='Первый в мире ядерный реактор'/>
        <ChronologyItem text='5. Феврале 1943 год начало строительства плутониевого завода в Ок-Ридже. Первый реактор для наработки плутония был запущен 4 ноября 1943 года, первые образцы были получены в конце ноября 1943 года. Переход к созданию атомной бомбы.' photo='/сша5.png' podpis='Графитовый реактор Х-10'/>
        <ChronologyItem text='6. Утром 16 июля 1945 г. на полигоне в пустыне (полигон Аламогордо, штат Нью-Мексико, США) испытание первой атомной бомбы.' photo='/сша6.png' podpis='Испытание «Тринити» — взрыв первой атомной бомбы «Штучка»'/>
      </div>
    </div>
    <h2 className={s.title}>Галерея</h2>
    <p className={s.text}>Установка K-25 в Ок-Ридж</p>
    <div className={s.imagesList}>
      {images9.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" className={s.imgochka}/>
        </PhotoView>
      ))}
    </div>
    <p className={s.text}>Испытание атомной бомбы "Тринити" 16 июля 1945 года</p>
    <div className={s.imagesList}>
      {images10.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" className={s.imgochka}/>
        </PhotoView>
      ))}
    </div>
    <p className={s.text}>Последствия взрыва атомных бомб над Нагасаки и Хиросимой</p>
    <div className={s.imagesList}>
      {images11.map((item, index) => (
        <PhotoView key={index} src={item}>
          <img src={item} alt="" className={s.imgochka}/>
        </PhotoView>
      ))}
    </div>
      <Slider/>
      <h2 className={s.title} id="end">Заключение</h2>
      <h3 className={s.title}>Сравнительный анализ</h3>
      <p className={s.text}>Учитывая предпосылки создания атомных проектов, можно сказать, что в США и в СССР существовали политические, научно – технические и экономические возможности для создания ядерного оружия.<br/>
Несмотря на успех обеих стран, данные проекты имеют как сходства, так и различия.<br/>
      </p>
      <div className={s.ChronologyWrapper}>
      <Tag tag_color='var(--color-blue)' tag_name='Сходства'/>
        <div className={s.flexim}>
          <ChronologyItem mini={true} text='Сроки строительства и освоения индустрии: в США от получения первой цепной реакции деления урана до взрыва первой атомной бомбы прошло 2 года 8 месяцев и 15 дней; в CCCP - 2 года 9 месяцев и 5 дней.'/>
          <ChronologyItem mini={true} text='Обе стороны получили сходное по своим параметрам сверхоружие и опробовали его с первой попытки.'/>
          <ChronologyItem mini={true} text='Обе страны предусматривали создание как плутониевых, так и урановых бомб.'/>
          <ChronologyItem mini={true} text='Работы велись в обстановке строжайшей секретности.'/>
        </div>
      </div>
      <div className={s.ChronologyWrapper}>
      <Tag tag_color='var(--color-red)' tag_name='Различия'/>
        <div className={s.flexim}>
          <ChronologyItem mini={true} text='Атомную бомбу для США создавали европейские учёные, а Советский Союз создавал её силами своих учёных.'/>
          <ChronologyItem mini={true} text='Испытания советской бомбы проводились на специальном полигоне, США применили свои изобретения на городах.'/>
          <ChronologyItem mini={true} text='Создание ядерного оружия проходило в разных условиях.'/>
        </div>
      </div>
      <h3 className={s.title}>Анализ последствий</h3>
      <p className={s.text}>Атомные проекты XX века положили начало новой отрасли – ядерной энергетике. Благодаря этому сегодня в мире существует производство электрической и тепловой энергии путём преобразования ядерной энергии.<br/>
Атомную бомбу можно назвать великим достижением для науки, над ее созданием трудилось множество блестящих умов, однако, как и в других сферах, такое открытие может служить на благо, а может привести к катастрофе.<br/>
В результате ядерных проектов в мире появилось новое оружие разрушительной силы, стирающее с лица земли целые города и, при использовании в неправильных целях, представляющее угрозу для всего человечества. Это, безусловно, является самым негативным последствием из возможных.<br/>
      </p>
      <h3 className={s.title}>Выводы</h3>
      <p className={s.text}>В процессе работы над атомными проектами, США и CCCP столкнулись с многочисленными трудностями. Прежде всего, это объясняется необходимостью освоения принципиально новых технологий при развитии производства плутония и урана в обеих странах. Из-за этого промышленное производство в ходе всего процесса создания ядерного оружия во многом было экспериментальным, однако оба проекта закончились успешно.<br/>
Результатом работы американских учёных были первые атомные бомбы: Fat Man (толстяк), плутониевая, основанная на плутонии 239, испытанная 16 июля 1945 года, а 9 августа сброшенная вблизи города Нагасаки, и Little Boy (малыш), урановая, основанная на уране-235, сброшенная 6 августа на японский город Хиросиму. <br/>
Результатом работы советских учёных была атомная бомба РДС-1, содержащая плутониевую полую сферу, испытанную на Семипалатинском полигоне 29 августа 1949 года. Испытание прошло успешно, и цель проекта была достигнута.<br/>
О последствиях атомных проектов прошлого века можно говорить по-разному. Благодаря этим проектам сегодня в мире существует производство электрической и тепловой энергии путём преобразования ядерной энергии. Результат этих проектов, атомную бомбу, можно назвать великим достижением для мировой науки, однако такое открытие может служить на благо, а может привести к катастрофическим последствиям, как это было во время первых испытаний.<br/>
      </p>
    </>
  )
}

export default App
  
