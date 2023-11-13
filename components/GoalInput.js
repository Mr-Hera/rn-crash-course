import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

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
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.textInput} 
                placeholder='Your course goal!' 
                onChangeText={goalInputHandler}
                value={enteredGoalText}     
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button disabled={enteredGoalText == ''} title='Add Goal' onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' color='red' onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});

export default GoalInput
