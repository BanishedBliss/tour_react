import React, { useCallback } from "react";
import * as Screens from "./components/screens";
import { NavBar } from "./components/ui-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {StatusBar} from "expo-status-bar";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export const backendUrl = 'https://upmycash.ru'

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useFonts({
        'DMSans-Bold': require('./assets/fonts/DMSans-Bold.ttf'),
        'Mina-Bold': require('./assets/fonts/Mina-Bold.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
        'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
        'Raleway-SemiBold': require('./assets/fonts/Raleway-SemiBold.ttf'),
        'SF-Pro-Display-SemiBold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null
    }

    return (
        <NavigationContainer onReady={ onLayoutRootView }>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="rent" component={ Screens.RentScreen }/>
                <Stack.Screen name="catalog" component={ Screens.CatalogScreen }/>
                <Stack.Screen name="catalog-list" component={ Screens.CatalogListScreen }/>
                <Stack.Screen name='catalog-details' component={ Screens.CatalogDetailsScreen }/>
                <Stack.Screen name='cart' component={ Screens.CartScreen }/>
                <Stack.Screen name='order' component={ Screens.OrderScreen }/>
                <Stack.Screen name='about' component={ Screens.AboutScreen }/>
                <Stack.Screen name='vip' component={ Screens.VipScreen }/>
                <Stack.Screen name='tours' component={ Screens.TourPacksScreen }/>
                <Stack.Screen name='tour-details' component={ Screens.TourDetailsScreen }/>
                <Stack.Screen name='tour-book' component={ Screens.BookTourScreen }/>
            </Stack.Navigator>
            <NavBar/>
            <StatusBar style="dark" backgroundColor='#fff' translucent={ false }/>
        </NavigationContainer>
    );
}
