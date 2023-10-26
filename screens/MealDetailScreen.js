import { Text, View, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailScreen ({route, navigations}) {

    const router = useRoute();
    const mealId = router.params.mealId

    const navigation = useNavigation()

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const headerButtonPress = () => {
        console.log('Pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={headerButtonPress} icon="heart" color="#ffffff"/>
            }
        })
    }, [navigation, headerButtonPress])

    const windowHeight = Dimensions.get('window').height;
    const scrollViewHeight = windowHeight - 324;

    // const mealId = route.params.mealId

    return (
        <View style={styles.rootContainer}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>

            <ScrollView style={{maxHeight: scrollViewHeight}}>
                <Text style={styles.title}> {selectedMeal.title} </Text>

                <MealDetails 
                    duration={selectedMeal.duration} 
                    complexity={selectedMeal.complexity} 
                    affordability={selectedMeal.affordability} 
                    textStyle={styles.detailText}
                />
            
                <View style={styles.listOuter}>
                    <View style={styles.listContainer}>
                        <SubTitle >Ingredients</SubTitle>
                        <List data={selectedMeal.ingredients} />

                        <SubTitle >Step</SubTitle>
                        <List data={selectedMeal.steps} />
                    </View>
                </View>
            </ScrollView>
            
            

            {/*
              --------------- modified ---------------
            */}
            {/* <Text style={styles.subTitle} >Ingredients</Text> */}
            {/* {
                selectedMeal.ingredients.map((ingredient) => (
                    <Text key={ingredient}> {ingredient} </Text>
                ))
            } */}

            {/* <Text style={styles.subTitle} >Steps</Text> */}
            {/* {
                selectedMeal.steps.map((step) => (
                    <Text key={step}> {step} </Text>
                ))
            } */}

        </View>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        paddingBottom: 34
    },
    image: {
        width: '100%',
        height: 250,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuter: {
        alignItems:'center'
    },
    listContainer: {
        width: '80%'
    }
})