import React, {useState} from "react";
import { ScrollView, StyleSheet } from "react-native";
import { LayoutChangeEvent } from "react-native";
import BlueTextSection from "./sections/BlueTextSection";
import TextSection from "./sections/TextSection";
import ImageBackgroundSection from "./sections/ImageBackgroundSection";
import HowWeWorkSection from "./sections/HowWeWorkSection";
import {Button} from "../ui-elements";

export default function AboutScreen() {
    const [fullHeight, setFullHeight] = useState(0)
    const updateHeight = (e: LayoutChangeEvent) => {
        setFullHeight(e.nativeEvent.layout.height)
    }
    const imageBgText = {
        title: 'Организация мероприятий',
        description: 'Сделаем максимальный "Вау Эффект"\n' +
            'Вашего мероприятия, который Вы\n' +
            'сможете приводить в пример\n' +
            'на протяжении многих лет',
    }
    const whiteSectionContent = [
        {
            type: 'text',
            content: 'Мы уже более 10 лет занимаемся организацией закрытых частных мероприятий в Сочи.' +
                'Наш наработанный опыт и профессионализм позволяют нам находится на вершине среди лучших в' +
                'сфере создания вечеринок и мероприятий в Сочи с "Вау Эффектом" для наших клиентов.' +
                'Расскажите нам о своих желаниях и позвольте нам Вас удивить',
        },
        {
            type: 'video',
            content: {
                title: 'Climbers on Mount Rainier - 4K Time-lapse Clip',
                videoId: 'ESsI4r55MV0',
            }
        }
    ]
    const blueSectionContent = [
        {
            type: 'heading',
            content: 'ЧЕМ МЫ МОЖЕМ\n ВАМ ПОМОЧЬ:',
        },
        {
            type: 'ul',
            content: [
                'Организация любых праздников от дня рождения котика до концертов, корпоративов крупных корпораций.',
                'Много вариантов готовых программ на разные бюджеты. Все подскажем, со всем поможем.',
                'Максимально оперативно и качество выполняем свою работу. Работаем только с профессионалами.',
                'Разработаем сценарий и шоу программу под Ваш бюджет.',
                'Учитываем все пожелания, индивидуально подходим к каждому клиенту.',
                'Все что Вам нужно сделать - это быть с нами связи. Остальное мы сделаем за Вас.',
            ]
        }
    ]
    const points = [
        {
            title: 'Заявка или звонок',
            description: 'Вы оставляете Заявку на сайте или звоните нам по контактам указанным на сайте',
        },
        {
            title: 'Даты и предпочтения',
            description: 'Уточняем даты, Ваши предпочтения, детали, подписываем договор',
        },
        {
            title: 'Договор / Оплата',
            description: 'Вы Оплачиваете наши услуги, мы закрепляем за Вами личного гида-менеджера, ' +
                'который работает только с Вами и ждём дня Х',
        },
        {
            title: 'Старт программы',
            description: 'Встречаем Вас в день "Х", утверждаем программу Вашего отдыха, ' +
                'заселяемся и отправляемся вместе с Вами в увлекательное путешествие',
        },

    ]

    return (
        <ScrollView onLayout={ updateHeight }>
            <ImageBackgroundSection image='/storage/tourImages/1664891386_goa_5.jpg' text={imageBgText} button={<Button text="Заказать мероприятие"/>} fullHeight={ fullHeight }/>
            <TextSection content={ whiteSectionContent } style={ styles.largePadding }/>
            <BlueTextSection content={ blueSectionContent } style={ styles.largePadding }/>

            {/*<View>
                <Text>Наши готовые решения</Text>
                <ScrollView horizontal={ true }
                            showsHorizontalScrollIndicator={ false }
                            style={ styles.scrollContainer }>

                    { products.map((product) => (
                        <CatalogListTile key={ product.id } data={ product } type="small" />
                    )) }

                    <View style={{width: 20}}/>
                </ScrollView>
            </View>*/}
            <HowWeWorkSection points={ points } style={ styles.largePadding }/>

        </ScrollView>
    )
}



const styles = StyleSheet.create({
    contPadding: {
        paddingHorizontal: 20,
    },
    largePadding: {
        paddingHorizontal: 40,
    },
    textWhite: {
        color: '#fff',
    },
    scrollContainer: {

    }
})
