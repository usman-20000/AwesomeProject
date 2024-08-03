import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import styles from './style';
import EmojiPicker from "rn-emoji-picker";
import { emojis } from "rn-emoji-picker/dist/data";
// import {getPreview} from "react-native-link-preview";

const ChatScreen = () => {
    // State to hold messages
    const [messages, setMessages] = useState([
        { id: 1, sender: 'John', text: 'Hello there!' },
        { id: 2, sender: 'Jane', text: 'Hi John!' },
    ]);
    
    // State for new message input
    const [newMessage, setNewMessage] = useState('');
    const [recentEmojis, setRecentEmojis] = useState([]);
    const [showEmojis, setShowEmojis] = useState(false); // State to control emoji picker visibility

    // Reference to the text input element
    const textInputRef = useRef(null);

    // Function to handle sending message
    const sendMessage = async () => {
        if (newMessage.trim() !== '') {
            const isLink = newMessage.match(/\bhttps?:\/\/\S+/gi);
    
            if (isLink) {
                try {
                    console.log('link:', isLink[0]);
                    const linkInfo = await getPreview(isLink[0]);
                    // Add the link preview data to the message object
                    // console.log(nkInfo);
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { id: prevMessages.length + 1, sender: 'You', text: newMessage, linkPreview: linkInfo },
                    ]);
                } catch (error) {
                    console.error('Error fetching link preview:', error);
                    // Handle the error (e.g., show a message to the user)
                }
            } else {
                // If the message doesn't contain a URL, simply add it to the messages
                setMessages(prevMessages => [
                    ...prevMessages,
                    { id: prevMessages.length + 1, sender: 'You', text: newMessage },
                ]);
            }
    
            setNewMessage('');
        }
    };

    // Function to handle emoji selection
    const handleEmojiSelect = (emoji:any) => {
        setRecentEmojis([emoji, ...recentEmojis.slice(0, 4)]);
        setNewMessage(prevMessage => prevMessage + emoji.emoji);
        // Hide the emoji picker after selecting an emoji
        // setShowEmojis(false);
    };

    // Function to toggle emoji picker visibility and hide keyboard
    const toggleEmojiPicker = () => {
        setShowEmojis(!showEmojis);
        // Hide the keyboard
        Keyboard.dismiss();
    };

    return (
        <View style={styles.Container}>
            <ScrollView
                contentContainerStyle={styles.messageContainer}
                showsVerticalScrollIndicator={false}
                ref={scrollView => scrollView?.scrollToEnd({ animated: true })}
            >
                {/* Render messages */}
                {messages.map(message => (
                    <View
                        key={message.id}
                        style={[
                            styles.message,
                            // Apply different styles for messages sent by the user and other users
                            message.sender === 'You' ? styles.sentMessage : styles.receivedMessage,
                        ]}
                    >               
                       {message.linkPreview && (
                        <TouchableOpacity style={styles.linkContainer}>
                            {message.linkPreview.images && <Image resizeMode='contain' source={{ uri: message.linkPreview.images[0] }} style={styles.linkImage} />}
                            <View style={styles.descContainer}>
                            {message.linkPreview.title && <Text style={styles.linkTitle}>{message.linkPreview.title}</Text>}
                            {message.linkPreview.description && <Text style={styles.linkDescription}>{message.linkPreview.description}</Text>}
                        </View>
                        </TouchableOpacity>
                    )}
                        <Text style={styles.messageText}>{message.text}</Text>
                        <Text style={styles.messageSender}>{message.sender}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.emojiButton} onPress={toggleEmojiPicker}>
                    <Text>😀</Text>
                </TouchableOpacity>
                {/* Render EmojiPicker component */}
                <TextInput
                    ref={textInputRef}
                    style={styles.input}
                    placeholder="Type a message..."
                    value={newMessage}
                    placeholderTextColor={'black'}
                    onChangeText={setNewMessage}
                    // onFocus={setShowEmojis(false)}
                />  
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
            {/* Render EmojiPicker component if showEmojis is true */}
            {showEmojis && (
                <View style={{height:'40%'}}>     
                    <EmojiPicker
                    emojis={emojis}
                    recent={recentEmojis}
                    autoFocus={false}
                    loading={false}
                    darkMode={false}
                    perLine={7}
                    onSelect={handleEmojiSelect}
                    onChangeRecent={setRecentEmojis}
                    enabledCategories={[
                        'recent',
                        'emotion',
                        'emojis',
                        'activities',
                        'flags',
                        'food',
                        'places',
                        'nature'
                    ]}
                />
                </View>
            )}
        </View>
    );
};

export default ChatScreen;
