import { useState } from 'react'
import { Buffer } from 'buffer'
import { StyleSheet, View, TextInput, Button, Modal, Image, Text } from 'react-native'
import stkInitiate from '../util/http';

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        // console.log(`🚀 ~ Entered text is '${enteredText}'`);
        
        setEnteredGoalText(enteredText);
    };
    
    function addGoalHandler() {
        // console.log(`🚀 ~ Entered text is '${enteredText}'`);
        const paybill = '174379';
        const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const formattedTime = `${now.getFullYear()}${now.getMonth()}${now.getDate()}${hours}${minutes}${seconds}`;
        const combinedString = `${paybill}${passkey}${formattedTime}`
        const base64Password = Buffer.from(combinedString, 'utf-8').toString('base64');
        // console.log(`base64 ~ ${base64Password}`);
        // console.log(`formatted time ~ ${formattedTime}`);

        const stkRequest = {
            BusinessShortCode: paybill,    
            Password: base64Password,    
            Timestamp:formattedTime,    
            TransactionType: "CustomerPayBillOnline",    
            Amount: enteredGoalText,    
            PartyA:"254795909989",    
            PartyB:paybill,    
            PhoneNumber:"254795909989",    
            CallBackURL: "https://e7d0-197-237-209-31.ngrok-free.app",    
            AccountReference:"Test",    
            TransactionDesc:"Test"
        };
        // console.log(stkRequest);
        stkInitiate(stkRequest);

        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                {/* <Image style={styles.image} source={require('../assets/images/goal.png')}/> */}
                <View style={styles.text}>
                    <Text>Enter your bill amount</Text>
                </View>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Amount' 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                    keyboardType='number-pad' 
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button disabled={enteredGoalText == ''} color='#0BDA51' title='Pay Now' onPress={addGoalHandler}/>
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
        padding: 16,
        backgroundColor: '#FAF9F6'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#E5E4E2',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    text: {
        marginBottom: 16,
        marginHorizontal: 8,
    },
});

export default GoalInput
