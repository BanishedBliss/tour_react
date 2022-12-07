import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {ImageSlider} from "../ui-elements";
import TextSection from "./sections/TextSection";
import BlueTextSection from "./sections/BlueTextSection";
import TourListSection from "./sections/TourListSection";

export default function TourPacksScreen() {
    const whiteSectionContent = [
        {
            type: 'heading',
            content: 'Что такое пакетный тур?',
        },
        {
            type: 'text',
            content: 'Если говорить простым языком, пакетный тур – это тур по системе «все включено" т.е это уже ваш  готовый отдых. \n' +
                '\n' +
                'Такие туры подходят людям, которые на отдыхе хотят получить полное расслабление, а не задаваться вопросами «где мне жить", Куда пойти" и «Что посмотреть"? \n' +
                '\n' +
                'Пакет может включать в себя только стандартные услуги , такие как трансфер, питание и проживание или он может содержать также Доп услуги например : личный гид, организация мероприятия для вас Индивидуальные экскурсии и другие развлечения.',
        },
        {
            type: 'ul',
            content: [
                'Стоимость туров зависит вашего бюджета и кол-Ва дней пребывания.',
                'Каждый тур рассчитываем индивидуально, программу собираем под ваши предпочтения.',
                'Проживание, трансфер , гид и автомобиль с личным водителем входит в стоимость тура. Конфиденциальность данных  гарантируем.',
            ]
        },
        {
            type: 'button',
            content: {
                title: 'Заполнить форму заявки',
                action: null,
            }
        }
    ]

    const blueSectionContent = [
        {
            type: 'text',
            content: 'Заполните форму заявки и мы соберём тур специально для вас\n' +
                '\n' +
                'Также вы можете выбрать один из наших готовых пакетов, для этого выберите кол-во дней и ваше местоположение и вы увидите  Наши готовые решения в выбранном регионе. Любой тур вы можете корректировать под себя.'
        }
    ]

    const countries = [{id: 1, name: 'Россия'}, {id: 2, name: 'Турция'}]
    const cities = [
        {id: 1, country_id: 1, name: 'Сочи'},
        {id: 2, country_id: 1, name: 'Абхазия'},
        {id: 3, country_id: 2, name: 'Стамбул'}
    ]
    const tours = [
        {id: 1, country_id: 1, city_id: 1, dayRanges: [0, 1], name: 'Красная поляна', length: '2200м', shortDescription: 'Величественные горы, водопады и другие природные объекты, надолго запомнятся своим уникальными пейзажами.', image: 'https://thumb.tildacdn.com/tild3638-3739-4437-b431-346164333964/-/resize/400x300/-/format/webp/unnamed-file-2649.jpeg'},
        {id: 2, country_id: 1, city_id: 2, dayRanges: [1, 2], name: '33 Водопада с Кавказским застольем', shortDescription: 'Горное ущелье, в котором 33 водопада, прогулка по самшитовой роще и знакомство с местными преданиями.', image: 'https://thumb.tildacdn.com/tild6330-3462-4466-b632-616161363733/-/resize/400x300/-/format/webp/vRfUghQsthPBVNdhcH6N.jpg'},
        {id: 3, country_id: 2, city_id: 3, dayRanges: [2], name: 'Джип-тур каньон Псахо', shortDescription: 'Каньон Псахо, Троице-Георгиевский монастырь, источник целебной глины и живописная зеленая долина.', image: 'https://thumb.tildacdn.com/tild6362-6137-4430-b965-393538306366/-/resize/400x300/-/format/webp/photo_2020-12-20_18-.jpg'}
    ]


    return (
        <ScrollView>
            <ImageSlider images={ images } style={ styles.imageSlider } />
            <TextSection content={ whiteSectionContent } style={ styles.largePadding }/>
            <BlueTextSection content={ blueSectionContent } style={ styles.largePadding }/>
            <TourListSection tourList={{ countries, cities, tours }}/>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    largePadding: {
        paddingHorizontal: 40,
    },
    imageSlider: {
        height: 328,
    },
})

const images = [
    { id: 1, url: "https://upmycash.ru/storage/tourImages/1664345529_1759076018_0_256_2730_1792_1920x0_80_0_0_4fd54a39a0f0983054f4713d9ea56fe4.jpg" },
    { id: 2, url: "https://upmycash.ru/storage/tourImages/1664345394_zoa_7803_unstudio_seafront_sochi_0023_cropped.jpg(mediaclass-list-image.fcd54d3441375085a87028277be316313cf123a5).jpg" },
    { id: 3, url: "https://upmycash.ru/storage/tourImages/1664891883lake-2970657_1280.jpg" },
    { id: 4, url: "https://upmycash.ru/storage/tourImages/1664891883abkhazia-3211861_1920.jpg" },
    { id: 5, url: "https://upmycash.ru/storage/tourImages/1664345394_1759076018_0_256_2730_1792_1920x0_80_0_0_4fd54a39a0f0983054f4713d9ea56fe4.jpg"},
];
