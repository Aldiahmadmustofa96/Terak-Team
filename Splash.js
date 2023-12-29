import React, {Component} from "react";
import { View,ImageBackground,Image, View} from "react-native";

var bg=require('./backgrnd.png');
var logo=require('./logoo.png');

export default class Splash extends Component
{
    render()
    {
        return(
                <ImageBackground
                source={bg}
                style={{height:'100%', width:'100%'}}>
                    <View>
                    style={{flex:1,justifyContent:'center', alignItems:'center'}}
                            <Image> source={logo}
                            style={{height:100, width:100}}</Image>
                    </View>
                </ImageBackground>


        );
    }
}