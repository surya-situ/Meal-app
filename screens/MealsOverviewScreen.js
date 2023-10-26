import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
//! ALTERNATIVE for {route} prop child
// import { useRoute } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealITem from '../components/MealItem';


function MealsOverviewScreen ( {route, navigation} ) {

    // ! ALTERNATIVE of {route}
    // const router = useRoute();
    // const catId = router.params.categoryId

    const catId = route.params.Id

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions ({
            title: categoryTitle
        })
    }, [catId, navigation])

    
    
    const renderMealItem = (itemData) => {

        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity
        }

        return (
            <MealITem {...mealItemProps} />
        )
    }

    return (
        <View style={ styles.container } >
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})