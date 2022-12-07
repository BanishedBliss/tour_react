import React, {useEffect, useRef, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import {ClipPath, Defs, G, Path, Rect, Svg} from "react-native-svg";
import {PhoneCallButton, TourListTile} from "../../ui-elements";

export default function TourListSection({ tourList }) {
    const [country, setCountry] = useState(0)
    const [city, setCity] = useState(0)
    const [dayRange, setDayRange] = useState(0)
    const [shownTours, setShownTours] = useState(updateTours())
    const cityDropdown = useRef({})

    /*
    * Select functions
    * */
    useEffect(() => {
        cityDropdown.current.reset()
        setCity(-1)
    },[country])

    useEffect(() => {
        setShownTours(updateTours())
    }, [city, country, dayRange])

    function updateTours() {
        return tourList.tours.filter(tour =>
            tour.country_id === tourList.countries[country].id &&
            (city === -1 || tour.city_id === tourList.cities[city].id) &&
            tour.dayRanges.includes(dayRange)
        )
    }

    const selectProps = {
        defaultValueByIndex: 0,
        buttonStyle: styles.dropdown1BtnStyle,
        buttonTextStyle: styles.dropdown1BtnTxtStyle,
        dropdownStyle: styles.dropdown1DropdownStyle,
        rowStyle: styles.dropdown1RowStyle,
        rowTextStyle: styles.dropdown1RowTxtStyle,
        selectedRowStyle: styles.dropdown1SelectedRowStyle,
        renderDropdownIcon: isOpened => (
            <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                <Path transform={isOpened ? "rotate(180,9,5)" : "rotate(0,9,5)"} d="M1 1L9 9L17 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
        ),
        dropdownOverlayColor: 'transparent',
    }

    // TODO: Заполнить ссылку консультации
    return (
        <View>
            <View style={ styles.largeContainer }>
                <Text style={ styles.heading }>Вот примеры готовых{'\n'}пакетных туров для вас:</Text>
                <Text style={ styles.selectLabel }>Страна</Text>
                <SelectDropdown
                    data={ tourList.countries.map(country => country.name) }
                    defaultButtonText="Любая страна"
                    {...selectProps}
                    onSelect={(item, index) => setCountry(index)}
                />
                <Text style={ styles.selectLabel }>Город</Text>
                <SelectDropdown
                    data={ tourList.cities.filter(city => city.country_id === tourList.countries[country].id).map(city => city.name) }
                    defaultButtonText="Любой город"
                    {...selectProps}
                    ref={ cityDropdown }
                    onSelect={ (item) => setCity(tourList.cities.findIndex(city => city.name === item)) }
                />
                <View style={ styles.daySelect }>
                    <TouchableOpacity
                        style={ [styles.dayBtn, dayRange === 0 ? styles.dayActive : null] }
                        onPress={() => setDayRange(0)}
                        activeOpacity={0.7}
                    >
                        <Text style={ [styles.dayBtnText, dayRange === 0 ? styles.dayActiveText : null] }>
                            1-3 дн
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ [styles.dayBtn, dayRange === 1 ? styles.dayActive : null] }
                        onPress={() => setDayRange(1)}
                        activeOpacity={0.7}
                    >
                        <Text style={ [styles.dayBtnText, dayRange === 1 ? styles.dayActiveText : null] }>
                            4-14 дн
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ [styles.dayBtn, dayRange === 2 ? styles.dayActive : null] }
                        onPress={() => setDayRange(2)}
                        activeOpacity={0.7}
                    >
                        <Text style={ [styles.dayBtnText, , dayRange === 2 ? styles.dayActiveText : null] }>
                            15-30 дн
                        </Text>
                    </TouchableOpacity>
                </View>
                <PhoneCallButton />
            </View>
            <View style={ styles.smallContainer }>
                { shownTours.map(tour => <TourListTile key={ tour.id } tour={ tour }/>) }
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    largeContainer: {
        padding: 40,
        backgroundColor: '#fff',
        paddingBottom: 0,
    },
    smallContainer: {
        padding: 20,
        backgroundColor: '#fff',
    },
    heading: {
        color: '#0080DE',
        fontFamily: 'Raleway-Medium',
        fontSize: 20,
        lineHeight: 23.48,
    },
    selectLabel: {
        color: '#494949',
        fontFamily: 'Raleway-Medium',
        fontSize: 20,
        lineHeight: 23.48,
        marginTop: 20,
    },
    dropdown1BtnStyle: {
        width: '100%',
        height: 'auto',
        paddingVertical: 8,
        marginTop: 8,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0080DE',
    },
    dropdown1BtnTxtStyle: {
        color: '#444',
        textAlign: 'left',
    },
    dropdown1DropdownStyle: {
        backgroundColor: '#fff',
        marginTop: -26,
        borderRadius: 8,
    },
    dropdown1RowStyle: {
        backgroundColor: '#fff',
        borderBottomColor: '#C5C5C5'
    },
    dropdown1RowTxtStyle: {
        color: '#444',
        textAlign: 'left'
    },
    dropdown1SelectedRowStyle: {
        backgroundColor: 'rgba(0,128,222,0.1)'
    },
    daySelect: {
        marginTop: 15,
        borderColor: '#0080DE',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    dayBtn: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#0080DE',
        paddingVertical: 6,
    },
    dayBtnText: {
        color: '#333',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        marginBottom: -3,
    },
    dayActive: {
        backgroundColor: '#0080DE',
    },
    dayActiveText: {
        color: '#fff',
    }
})
