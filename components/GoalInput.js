import { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        // console.log(`🚀 ~ Entered text is '${enteredText}'`);
        setEnteredGoalText(enteredText);
    };
    
    function addGoalHandler() {
        // console.log(`🚀 ~ Entered text is '${enteredText}'`);
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput} 
            placeholder='Your course goal!' 
            onChangeText={goalInputHandler}
            value={enteredGoalText}     
            />
            <Button disabled={enteredGoalText == ''} title='Add Goal' onPress={addGoalHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
});

export default GoalInput
