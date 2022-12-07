import React, {useState} from "react";
import { ScrollView, StyleSheet } from "react-native";
import { LayoutChangeEvent } from "react-native";
import BlueTextSection from "./sections/BlueTextSection";
import TextSection from "./sections/TextSection";
import ImageBackgroundSection from "./sections/ImageBackgroundSection";
import HowWeWorkSection from "./sections/HowWeWorkSection";
import {Button} from "../ui-elements";

export default function VipScreen() {
    const [fullHeight, setFullHeight] = useState(0)
    const updateHeight = (e: LayoutChangeEvent) => {
        setFullHeight(e.nativeEvent.layout.height)
    }
    const imageBgText = {
        title: 'VIP СЕРВИС ПО ЗВОНКУ',
        description: 'Время наших клиентов - самый ценный\n' +
            'ресурс. Мы готовы закрыть все\n' +
            'операционные вопросы, связанные с\n' +
            'Вашим отдыхом',
    }
    const whatsVipContent = [
        {
            type: 'heading',
            content: 'Что такое сервис\n"по звонку"?'
        },
        {
            type: 'text',
            content: '"По звонку" это когда Вы звоните, говорите нам цель отдыха, ' +
                'свои предпочтения, дату прибытия и бюджет, а мы готовим Вам 3 ' +
                'варианта программы на выбор, с прикреплением личного помощника. ' +
                'Дополнительно в любом можете позвонить нашему гиду и заказать что-то ' +
                'ещё одним звонком. Все что будет происходить с вами в путешествии это ' +
                'сюрприз и конечно строго конфиденциально',
        }
    ]
    const vipIncludesContent = [
        {
            type: 'heading',
            content: 'В тур уровня VIP\nуже входит:',
        },
        {
            type: 'ul',
            content: [
                'Проживание в лучших отелях или отдельный дом вилла',
                'Автомобиль премиум класса с личным водителем',
            ]
        },
        {
            type: 'button',
            content: {
                title: 'Связаться с менеджером',
                action: () => {},
            }
        }
    ]
    const pricingContent = [
        {
            type: 'heading',
            content: 'Стоимость такого пакета от 200.000₽',
        },
        {
            type: 'text',
            content: 'Остальные услуги по Вашему желанию можете выбрать заполнив заявку.' +
                'Полный список того, что мы можем Вам предложить можно увидеть при оформлении заявки нажав в' +
                'Форме на: "Выбор дополнительных услуг"',
        },
        {
            type: 'button',
            content: {
                title: 'Заказать VIP сервис',
                action: () => {}
            }
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
    const contacts = [
        {
            type: 'heading',
            content: 'КОНАКТЫ',
        },
        {
            type: 'text',
            content: '+7(900)259-00-25\n' +
                'tour-boyazh@yandex.ru\n' +
                'г.Сочи, Адлер, Морской бульвар, д.1',
        }
    ]

    return (
        <ScrollView onLayout={ updateHeight }>
            <ImageBackgroundSection image='/storage/tourImages/1664891386_goa_5.jpg' text={imageBgText} button={<Button text="Связаться с менеджером"/>} fullHeight={ fullHeight }/>
            <TextSection content={ whatsVipContent } style={ styles.largePadding }/>
            <TextSection content={ vipIncludesContent } style={ styles.largePadding } isBlack/>
            <TextSection content={ pricingContent } style={ styles.largePadding }/>
            <HowWeWorkSection points={ points } style={ styles.largePadding }/>
            <TextSection content={ contacts } style={ styles.largePadding } isBlack/>
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
