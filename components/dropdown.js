import React from 'react';
import { StyleSheet, Image, Text, View,Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
export default function Dropdown({icon,items,defaultvalue,placeholder,onchangeitem,simple,bgstyle,containerStyle,zIndex}) {
    return (
        <View style={[styles.box,Platform.OS !== 'android' ? {zIndex: 10}:{},containerStyle]}>
            <View style={[styles.bg,bgstyle]}></View>
            {!simple ? 
                <View style={styles.icon}>
                    <Image style={styles.boxicon} source={icon ? icon : require('./../assets/icons/filter-sort.png')}/>
                </View>
            : null
            }
            <DropDownPicker 
                        items={items ? items : []}
                        defaultValue={defaultvalue ? defaultvalue : ''}
                        containerStyle={styles.dropdowncontainer}
                        style={styles.dropdown}
                        itemStyle={styles.dropdownitemstyle}
                        dropDownStyle={styles.dropdownstyle}
                        labelStyle={styles.dropdownlabelstyle}
                        arrowStyle={{marginRight: 5}}
                        placeholder={placeholder}
                        zIndex={zIndex}
                        customArrowUp={(size, color) => {
                            return <Image style={styles.arrowicon} source={require('./../assets/icons/polyup.png')}/>
                        }}
                        customArrowDown={(size, color) => {
                            return <Image style={styles.arrowicon} source={require('./../assets/icons/polydown.png')}/>
                        }}
                        onChangeItem={item => onchangeitem(item)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    box:{
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
    },
    bg:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:50,
        backgroundColor:'#fff',
        borderRadius:5
    },
    dropdowncontainer:{
        flex:1,
        height:40,
        margin:5,
        marginRight:10
    },
    dropdown:{
        width:'100%',
        backgroundColor:'#fff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor:'rgba(255,255,255,0.2)',
    },
    dropdownitemstyle:{
        justifyContent: 'flex-start',
    },
    dropdownstyle:{
        backgroundColor:'#fff',
        borderColor:'#fff',
    },
    dropdownlabelstyle:{
        fontSize:18,
        fontFamily:'BarlowCondensed-Medium',
        color:'#032B77'
    },
    icon:{
        paddingHorizontal:9,
        borderColor:'rgba(171,183,208,0.3)',
        borderRightWidth:1
    },
    boxicon:{
        width:14,
        height:14,
        resizeMode:'contain'
    },
    arrowicon:{
        width:10,
        height:7.5,
        resizeMode:'contain'
    }
});