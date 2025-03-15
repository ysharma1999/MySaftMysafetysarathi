import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppThemeStyles } from '../hooks/theme.hooks';
import { onBoardStyles } from './onboarding-styles';
import { TextCmp } from '../components/typography/text.component';
import Video, { VideoRef } from 'react-native-video';


const ProfileScreen = () => {
    const [activeTab, setActiveTab] = useState('Posts');
    const styles = useAppThemeStyles(onBoardStyles);
    const [reportModalVisible, setReportModalVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const fullText =
        "Currently on my second cup of 'no one asked coffee' | Fluent in sarcasm & movie quotes | Professional Overthinker | Living Proof That Just One More Episode";
    const shortText = fullText.length > 60 ? fullText.substring(0, 60) + "..." : fullText;

    const renderTab = (tabName: string) => {
        const isActive = activeTab === tabName;
        return (
            <TouchableOpacity
                style={[styles.tab, isActive && styles.activeTab]}
                onPress={() => setActiveTab(tabName)}
            >
                <Text style={[styles.tabText, isActive && styles.activeTabText]}>{tabName}</Text>
            </TouchableOpacity>
        );
    };
    const videoRef = useRef<VideoRef>(null);
    const background = require('../assets/images/SmapleVideo.mp4');

    const renderContent = () => {
        if (activeTab === 'Posts') {
            return (
                <View style={styles.postsGrid}>
                    <Image source={require('../assets/images/image.png')} style={styles.postImage} />
                    <Image source={require('../assets/images/image.png')} style={styles.postImage} />
                </View>
            );
        } else if (activeTab === 'Memes') {
            return (
                <View style={styles.postVideo}>
                    <View style={styles.video}>
                        <Video
                            ref={videoRef}
                            source={background}
                            style={styles.postVideos}
                            resizeMode="cover"
                            muted={true}
                            repeat={true}
                            playWhenInactive={true}
                            playInBackground={true}
                            ignoreSilentSwitch="obey"
                            onError={(e) => console.log('Video Error:', e)}

                        />

                    </View>
                </View>
            );
        }
    };



    return (

        <SafeAreaView style={styles.containerProfile}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialCommunityIcons name="chevron-left" size={28} color="white" />
                </TouchableOpacity>
                <TextCmp variant='bodyLarge' color='neutralLight' fontWeight={'700'} >@david23</TextCmp>
                <TouchableOpacity style={styles.menuButton} onPress={() => setReportModalVisible(true)}>
                    <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
                </TouchableOpacity>
            </View>


            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/images/user.png')}
                    style={styles.profileImages}

                />

                <View style={styles.profileInfo}>
                    <TextCmp variant='headlineSmall' color='neutralLight' fontWeight={'700'} >David</TextCmp>
                    <TextCmp variant='bodySmall' color='lightgrey'>@shubham.dev</TextCmp>

                    <TextCmp variant='bodySmall' color='textLight'>
                        {isExpanded ? fullText : shortText}
                    </TextCmp>

                    {fullText.length > 60 && (
                        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                            <TextCmp variant='bodySmall' color='lightgrey'>
                                {isExpanded ? '...see less' : 'see more'}
                            </TextCmp>
                        </TouchableOpacity>
                    )}
                </View>
            </View>


            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <TextCmp variant='titleLarge' color='neutralLight' fontWeight={'700'} >267</TextCmp>
                    <TextCmp variant='titleMedium' color='neutralLight'  >Posts</TextCmp>
                </View>

                <View style={styles.statItem}>
                    <TextCmp variant='titleLarge' color='neutralLight' fontWeight={'700'} >26.8k</TextCmp>
                    <TextCmp variant='titleMedium' color='neutralLight'  >Followers</TextCmp>
                </View>

                <View style={styles.statItem}>
                    <TextCmp variant='titleLarge' color='neutralLight' fontWeight={'700'} >276</TextCmp>
                    <TextCmp variant='titleMedium' color='neutralLight'  >Following</TextCmp>
                </View>
            </View>
            <View style={styles.bottomSheet}>
                <View style={styles.tabContainer}>
                    {renderTab('Posts')}
                    {renderTab('Memes')}
                    {renderTab('Flicks')}
                </View>


                <ScrollView contentContainerStyle={styles.postsContainer}>

                    {renderContent()}
                </ScrollView>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={reportModalVisible}
                onRequestClose={() => setReportModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.reportModalContainer}>
                            <View style={styles.reportModalText}>
                                <TextCmp variant='titleMedium' color='handleGray' numberOfLines={2} textAlign='center' >Are you sure you want to report this person?</TextCmp>
                            </View>

                            <TouchableOpacity
                                style={styles.reportButton}
                                onPress={() => setReportModalVisible(false)}
                            >
                                <TextCmp variant='titleMedium' color='error' fontWeight={'700'} >Report</TextCmp>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setReportModalVisible(false)}
                        >
                            <TextCmp variant='titleMedium' color='neutralLight'>Cancel</TextCmp>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    backButton: {
        padding: 4,
    },
    username: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    menuButton: {
        padding: 4,
    },
    profileContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    profileInfo: {
        flex: 1,
    },
    name: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    handle: {
        color: '#aaa',
        fontSize: 14,
        marginBottom: 8,
    },
    bio: {
        color: 'white',
        fontSize: 14,
        lineHeight: 20,
    },
    seeMore: {
        color: '#aaa',
        fontSize: 14,
        marginTop: 4,
    },
    statsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#2A2A2A',
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statNumber: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        color: '#aaa',
        fontSize: 14,
        marginTop: 2,
    },
    statDivider: {
        width: 1,
        height: '60%',
        backgroundColor: '#2A2A2A',
        alignSelf: 'center',
    },
    tabContainer: {
        flexDirection: 'row',
        marginVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#212121',
        borderRadius: 24,
        padding: 4,
        alignSelf: 'center',
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: '#17E5A1',
    },
    tabText: {
        color: 'white',
        fontSize: 14,
    },
    activeTabText: {
        color: '#121212',
        fontWeight: 'bold',
    },
    postsContainer: {
        paddingHorizontal: 16,
    },
    postsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    postImage: {
        width: '48%',
        aspectRatio: 1,
        borderRadius: 8,
        marginBottom: 16,
    },
    placeholderPost: {
        width: '48%',
        aspectRatio: 1,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#2A2A2A',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProfileScreen;